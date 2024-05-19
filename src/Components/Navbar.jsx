import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const login = localStorage.getItem("login")
  // console.log(login)
  const logoutBtn =()=>{
    localStorage.removeItem("login")
  }

  const links = [
    {
      id: 1,
      link: "home",
      path:"/"
    },
    {
      id: 2,
      link: "District",
      path:"/districts"
    },
    {
      id: 3,
      link: "about",
      path:"/about"
    },
    {
      id: 4,
      link: "Contact",
      path:"/contact"
    }
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed z-50 bg-green-700 text-white">
      <div>
        <div className="flex justify-center items-center">
        <h1 className="font-signature text-5xl mx-2">Devbhumi</h1>
        <img src="../Images/Tourism/Monal.png" alt="Monal" className="w-16 h-16"/>
        </div>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link,path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200"
          >
            <Link to={path}>{link}</Link>
          </li>
        ))}
        <li>
        {login=="true"?<Link to="/login" onClick={logoutBtn} >Logout</Link>:<Link  to="/login">Login</Link>}
              
            </li>
      </ul>
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer md:hidden pe-4 z-10 text-white"
      >
        {toggle ?<i className="fa-solid fa-x text-3xl"></i> :<i className="fa-solid fa-bars text-3xl "></i> }
      </div>

      {toggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-cover bg-center" style={{backgroundImage:"url('../images/Photos/Navbar.jpg')"}}>
          <div className="flex justify-center items-center">
          <li className="font-signature text-5xl mx-2">Devbhumi</li>
          <img src="../Images/Tourism/Monal.png" alt="Monal" className="w-16 h-16"/>
          </div>
          {links.map(({ id, link,path }) => (
            <li
              key={id}
              className="py-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200 text-2xl"
            >
              <Link onClick={()=>setToggle(!toggle)} to={path} >{link}</Link>
            </li>
          ))}
            <li
              className="py-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200 text-2xl"
            >
              <Link  to="/login" >Login</Link>
            </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;


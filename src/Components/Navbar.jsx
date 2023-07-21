import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      path:"/"
    },
    {
      id: 2,
      link: "about",
      path:"/about"
    },
    {
      id: 3,
      link: "District",
      path:"/districts"
    },
    {
      id: 4,
      link: "Contact",
      path:"/contact"
    }
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-green-700 text-white">
      <div>
        <h1 className="font-signature text-5xl ml-2">Devbhoomi</h1>
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
      </ul>
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer md:hidden pe-4 z-10 text-white"
      >
        {toggle ?<i class="fa-solid fa-x text-3xl"></i> :<i class="fa-solid fa-bars text-3xl"></i> }
      </div>

      {toggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-green-600 to-green-950">
          <li className="font-signature text-5xl ml-2">Devbhoomi</li>
          {links.map(({ id, link,path }) => (
            <li
              key={id}
              className="py-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200 text-2xl"
            >
              <Link onClick={()=>setToggle(!toggle)} to={path} >{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;


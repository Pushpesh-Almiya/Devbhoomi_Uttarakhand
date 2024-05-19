import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
export default function SignUp() {
  const [userData, setUserData]=useState({
    username :"",
    email: "",
    mobile :"",
    password :"",
    cpassword:""
  })
  const onChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate();
  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const {username,email,mobile,password,cpassword}= userData;
    //signUp....
      try {
        const res = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, mobile, password, cpassword }),
        });
        localStorage.setItem("login", true)
        navigate('/')
        const data = await res.json();
        console.log(data)
      } catch (error) {
        console.log("frontend error" + error.message);
      }
  }
  return (
    <div className='pt-20 h-1/2 mb-20'>
        <div className='w-full md:w-1/3 mx-2 md:mx-auto flex flex-col my-5 p-5 bg-gray-100 border-black border rounded-md'>
        <h1 className='text-2xl font-bold mb-2'>Create Account</h1>
          <form action="POST" onSubmit={handleSubmit}>
            <div>
              <div className="flex flex-col ">
                <label htmlFor="" className='font-bold p-1'>Username</label>
                <input type="text" name="username" id="username" className='border-black border rounded-md px-2 py-1' value={userData.username} onChange={onChange}/>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className='font-bold p-1'>Email</label>
                <input type="email" name="email" id="email" className='border-black border rounded-md px-2 py-1' value={userData.email} onChange={onChange} />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className='font-bold p-1'>Mobile Number</label>
                <input type="number" name="mobile" id="number" className='border-black border rounded-md px-2 py-1' value={userData.number} onChange={onChange} />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className='font-bold p-1'>Password</label>
                <input type="password" name="password" id="password" className='border-black border rounded-md px-2 py-1' value={userData.password} onChange={onChange} />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className='font-bold p-1'>Confirm Password</label>
                <input type="password" name="cpassword" id="cpassword" className='border-black border rounded-md px-2 py-1' value={userData.cpassword} onChange={onChange} />
              </div>
              <div className="my-2">
                <button className="my-2 w-full py-2 bg-green-400 hover:bg-green-500 border border-black cursor-pointer    capitalize font-medium text-center  text-black rounded-md">Continue</button>
              </div>
          <div className='flex justify-evenly my-2'>
          <p>Already Have account ? </p> 
          <Link to="/login" className='text-blue-600'>Sign In</Link>
          </div>
            </div>
          </form>
        </div>
    </div>
  );
}

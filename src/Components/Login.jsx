import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
// import productContext from '../../Contexts/ProductContext'

function Login() {
  const [logData, setLogData] = useState({
    email :"",
    password:""
  })
  const navigate = useNavigate()
  const onChange =(e)=>{
    setLogData({ ...logData, [e.target.name]: e.target.value });
  }
//   const navigate = useNavigate()
  
  const handleSubmit = async (e)=>{
    e.preventDefault();

    const {email, password} = logData;
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data)
      if (data == "Success"){
        navigate('/')
        localStorage.setItem("login", true)
      }else(
        alert("Invalid Credentials")
      )
      // console.log(data.carts);
    //   if (res.status === 400 || !data) {
    //     console.log("invalid details");
    //     showAlert("red","invalid details");
    // } else{
    //   setAccount(data);
    //   showAlert("green", "Welcome to Quick Deal");
      // navigate('/')
    // }
    } catch (error) {
      console.log("login page error " + error.message);
  }
  }
  return (
    <div className='pt-24 h-1/2 mb-20'>
      <div className='w-full md:w-1/3  md:m-2 md:mx-auto flex flex-col my-5 p-5 bg-gray-100 border-black border rounded-md'>
      <h1 className='text-2xl font-bold mb-2'>Sign-In</h1>
        {/* <form action="POST" onSubmit={handleSubmit}> */}
        <form action="POST" onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-col ">
              <label htmlFor="" className='font-bold p-1'>Email</label>
              <input type="email" name="email" id="emails" className='border-black border rounded-md px-2 py-1' value={logData.email} onChange={onChange}/>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className='font-bold p-1'>Password</label>
              <input type="password" name="password" id="password" className='border-black border rounded-md px-2 py-1' value={logData.password} onChange={onChange}/>
            </div>
            <div className="my-2 py-2 bg-green-400 hover:bg-green-500 border border-black cursor-pointer capitalize font-medium text-center  text-black rounded-md">
              <button className="my-2 w-full">Continue</button>
            </div>
        <div className='flex justify-evenly my-2'>
        <p>Dont Have account ? </p> 
        <Link to="/register" className='text-blue-600'>Create Account</Link>
        </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

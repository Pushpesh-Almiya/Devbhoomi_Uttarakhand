import React, { useContext,useEffect, useState } from "react";
import districtContext from "../Context/DistrictsContexts";
import { useNavigate } from "react-router-dom";
function Contact() {
  const [alert,setAlert]=useState('')
  const context = useContext(districtContext)
  const {scrollUp}= context
  useEffect(()=>{
    scrollUp()
    // eslint-disable-next-line
  },[])
  const [query, setQuery]=useState({username:"",email:"",message:""})
  let name , value;
  const handleOnChange =(e)=>{
    name = e.target.name;
    value=e.target.value;
    setQuery({...query,[name]:value})
  }
  const navigate = useNavigate()
  const handleSubmit =async (e)=>{
    e.preventDefault()
     const {username,email,message}=query;
     await fetch("/user",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,email,message
      })
     })
     setAlert("Your message has been send to Pushpesh Almiya Successfully")
     setTimeout(()=>{
      setAlert("")
     },2000)
     navigate("/contact")
     scrollUp()
     setQuery({username:"",email:"",message:""})
  }

  return (
    <div className="w-full h-full pt-8 bg-green-100">
      
        <div
          style={{ backgroundImage: "url('../images/Photos/Hero.jpg')" }}
          className="pt-8 bg-no-repeat bg-cover bg-center w-full h-80 flex flex-col justify-center items-center"
        >
          <div class={`p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 ${alert===""?"hidden":""}`} role="alert">
            {alert}
</div>
          <h1 className="font-signature text-6xl text-white">Contact</h1>
          <p className="py-6 text-xl text-center text-white">
            Submit the form below to add something or hidden places of
            Uttarakhand into the website 
          </p>
        </div>
      <div className="p-4 flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <form
            method="POST" onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              onChange={handleOnChange}
              value={query.username}
              className="rounded-md p-2 placeholder-gray-700 bg-transparent border-2 text-black border-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleOnChange}
              value={query.email}
              className="rounded-md p-2 placeholder-gray-700 my-4 bg-transparent border-2 text-black border-black"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              onChange={handleOnChange}
              value={query.message}
              rows="7"
              className="rounded-md p-2 placeholder-gray-700 bg-transparent border-2 text-black border-black"
            ></textarea>
            <button className="text-white bg-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useContext,useEffect } from "react";
import districtContext from "../Context/DistrictsContexts";
function Contact() {
  const context = useContext(districtContext)
  const {scrollUp}= context
  useEffect(()=>{
    scrollUp()
    // eslint-disable-next-line
  },[])
  return (
    <div className="w-full h-full pt-8 bg-green-100">
        <div
          style={{ backgroundImage: "url('../images/Photos/Hero.jpg')" }}
          className="pt-8 bg-no-repeat bg-cover bg-center w-full h-80 flex flex-col justify-center items-center"
        >
          <h1 className="font-signature text-6xl text-white">Contact</h1>
          <p className="py-6 text-xl text-center text-white">
            Submit the form below to add something or hidden places of
            Uttarakhand into the website 
          </p>
        </div>
      <div className="p-4 flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <form
            action=""
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md p-2 placeholder-gray-700 bg-transparent border-2 text-black border-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-md p-2 placeholder-gray-700 my-4 bg-transparent border-2 text-black border-black"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
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

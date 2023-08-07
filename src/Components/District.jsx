import React, { useContext,useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import districtContext from "../Context/DistrictsContexts";
function District() {
  const context = useContext(districtContext)
  const {dist,scrollUp} =context
  const navigate=useNavigate()
  const[backToTop, setBackToTop]=useState(false)
  
  useEffect(()=>{
    scrollUp()
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setBackToTop(true)
      }else{
        setBackToTop(false)
      }
    })
     // eslint-disable-next-line
  },[])
  return (
    <div className="pt-20 bg-green-100">
       <div style={{backgroundImage:"url('../images/Photos/Home.jpg')"}} className='bg-no-repeat bg-cover bg-center w-full h-80 flex justify-center items-center' >
      <h1 className='md:pt-48 font-bold text-white pb-32 text-center font-signature text-4xl md:text-6xl '>Uttarakhand Districts</h1>
    </div>
    <div className='w-full pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-green-100 gap-5 pb-5'>
        {dist.map(({id, name,source,area, population,about})=>{
        return <div key={id} className="rounded overflow-hidden shadow-lg mx-1 h-full bg-green-300 mt-5">
            <img
              className="w-full h-1/3 p-1 mx-auto rounded"
              src={source}
              loading="lazy"
              alt="source"
            />
            <div className="px-1 sm:px-2 h-1/2 py-1 mb-5">
              <h1 className="text-2xl capitalize font-bold text-center">{name}</h1>
              <p className="text-xl">{about}</p>
              <h1 className="font-bold mt-2">Area :<span className="font-light px-2">{area}</span></h1>
              <h1 className="font-bold">Population :<span className="font-light px-2">{population}</span></h1>
              <div className="flex justify-center items-center mt-10">
              <button className="text-white bg-blue-700 px-5 py-2 mx-auto hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-2xl text-center font-signature dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 mb-5" onClick={()=>{navigate(`/districts/${name}`)}}>Visit Now</button>
              
              </div>
              {backToTop && (
        <button className='fixed bottom-8 right-10 h-16 w-16 pt-2 rounded-full text-black text-3xl flex justify-center items-center border-2 bg-transparent border-black' onClick={scrollUp}>^</button>
      )}
            </div>
          </div>
})}
      
    </div>
    
    </div>
  );
}

export default District;

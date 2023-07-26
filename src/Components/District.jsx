import React, { useContext } from "react";
import { Link } from "react-router-dom";
import districtContext from "../Context/DistrictsContexts";
function District() {
  const context = useContext(districtContext)
  const {dist} =context
    
  return (
    <div className='w-full pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-green-100 gap-5'>
        {dist.map(({id, name,source,area, population,about})=>{
        return <div key={id} className="rounded overflow-hidden shadow-lg mx-1 bg-green-300 mt-5">
            <img
              className="w-full h-1/3 p-1 mx-auto rounded"
              src={source}
              alt="source"
            />
            <div className="px-6 py-1 mb-5">
              <h1 className="text-2xl capitalize font-bold text-center">{name}</h1>
              <p className="text-xl">{about}</p>
              <p className="font-bold">Area :<span className="font-light px-2">{area}</span></p>
              <p className="font-bold">Population :<span className="font-light px-2">{population}</span></p>
              <div className="flex justify-center items-center mt-10">
              <Link className="text-center px-5 py-2 rounded-lg font-signature text-2xl  bg-gradient-to-r from-cyan-800 to-green-800 text-white" to={`/districts/${name}`} >Visit Now</Link>
              </div>
            </div>
          </div>
})}
      
    </div>
  );
}

export default District;

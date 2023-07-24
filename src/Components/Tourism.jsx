import React, { useContext, useEffect } from "react";

import districtContext from "../Context/DistrictsContexts";
import { useParams } from "react-router-dom";

function Tourism() {
  const params = useParams();
  const context = useContext(districtContext)
  const {tuoristPlaces,setTuoristPlaces} =context
  console.log(params.name)
  // const district = tuoristPlaces.district
  useEffect(()=>{
    const newArray = tuoristPlaces.filter(function(arr){
      return arr.district === params.name
    })
    // console.log(newArray)
    setTuoristPlaces(newArray);
    // eslint-disable-next-line
  },[])

  return (
    <>
    <div className="w-full pt-20">
    <h1 className="text-4xl capitalize font-signature text-center">Tourism Places of <span className="text-blue-800 font-bold">{params.name}</span></h1>
    {tuoristPlaces.map(({img,firstPara,secondPara,name})=>{
      return (
      <>
        <h1 className="text-center text-4xl capitalize font-arial">{name}</h1>
        <div className="w-full md:flex">
        <div className="w-full  md:w-1/3">
          <img src={img} alt="" className="rounded p-5 h-full"  />
        </div>
        <div className="w-full md:w-3/4">
          
          <p className="px-1 py-2">{firstPara}</p>
          <p className="px-1 py-2">{secondPara}</p>
          <hr />
        </div>
        </div>

      </>
      )
    })}
    </div>
    </>
  );
}

export default Tourism;

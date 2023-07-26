import React, { useContext,useEffect } from "react";
import districtContext from "../Context/DistrictsContexts";
import { useParams } from "react-router-dom";

function Tourism() {
  const params = useParams();
  const context = useContext(districtContext)
  const {tuoristPlaces,getData} =context

  useEffect(()=>{
    getData(params.name)
  },[])

  return (
    <>
    <div className="w-full pt-20">
    <h1 className="text-4xl capitalize font-signature text-center">Tourism Places of <span className="text-blue-800 font-bold">{params.name}</span></h1>
    {tuoristPlaces.map(({id,img,firstPara,secondPara,name})=>{
      return (
      <div key={id} className="border-b-2 border-black mt-5" >
        <h1 className="text-center text-4xl capitalize font-arial">{name}</h1>
        <div className="w-full md:flex">
        <div className=" flex flex-col justify-center items-center w-full md:w-1/3">
          <img src={img} alt="" className="rounded p-5 mx-auto w-full"  />
        </div>
        <div className=" flex flex-col justify-center items-center w-full md:w-3/4">
          <p className="px-1 py-2">{firstPara}</p>
          <p className="px-1 py-2">{secondPara}</p>
        </div>
        </div>
      </div>
      )
    })}
    </div>
    </>
  );
}

export default Tourism;

import React from "react";
import almora from "../img/Almora.png"
import bageshwar from "../img/Bageshwar.jpg"
import Dehradun from "../img/dehradun.jpg"
import Nainital from "../img/nainital.jpg"
import Rudraprayag from "../img/rudrapryag.jpg"
import udhamSinghNagar from "../img/US-nagar.jpg"

function District() {
    const dist = [
        {
            id:1,
            name: "almora",
            source:almora,
            formatation:"",
            area:"3,144 sq km",
            population: "865,284"
        },
        {
            id:2,
            name: "Bageshwar",
            source:bageshwar,
            area:"2,241 sq km",
            population: "361,259"
        },
        {
            id:3,
            name: "Champawat",
            source:almora,
            formatation:"",
            area:"1,766 sq km",
            population: "360,911"
        },
        {
            id:4,
            name: "Nainital",
            source:Nainital,
            formatation:"",
            area:"4251 sq km",
            population: "1,326,901"
        },
        {
            id:5,
            name: "Pithoragarh",
            source:almora,
            formatation:"",
            area:"7,090 sq km",
            population: "671,981"
        },
        {
            id:6,
            name: "Udham singh nagar",
            source:udhamSinghNagar,
            formatation:"",
            area:"2,908",
            population: "2,291,974"
        },
        {
            id:7,
            name: "Dehradun",
            source:Dehradun,
            formatation:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:8,
            name: "Haridwar",
            source:Nainital,
            formatation:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:9,
            name: "	Pauri Garhwal",
            source:Dehradun,
            formatation:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:10,
            name: "	Rudraprayag",
            source:Rudraprayag,
            formatation:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:11,
            name: "	Tehri Garhwal",
            source:Nainital,
            formatation:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:12,
            name: "Uttarkashi",
            source:Rudraprayag,
            formatation:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:13,
            name: "	Chamoli",
            source:almora,
            formatation:"",
            area:" 2,908",
            population: " 1,648,367"
        },
    ]
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-green-100 gap-5'>
        {dist.map(({id, name,source,area, population,formatation})=>{
        return <div key={id} className="rounded overflow-hidden shadow-lg mx-1 bg-green-300 mt-5">
            <img
              className="w-full p-1 mx-auto rounded h-1/2"
              src={source}
              alt="source"
            />
            <div className="px-6 py-1">
              <h1 className="text-2xl capitalize font-bold text-center">{name}</h1>
              <p className="font-bold">Established :<span className="font-light px-2">{formatation}</span></p>
              <p className="font-bold">Area :<span className="font-light px-2">{area}</span></p>
              <p className="font-bold">Population :<span className="font-light px-2">{population}</span></p>
              <div className="flex justify-center items-center mt-10">
            <button className="text-center px-5 py-2 rounded-lg font-signature text-2xl  bg-gradient-to-r from-cyan-500 to-green-800 text-white">Visit</button>

              </div>
            </div>
          </div>
})}
      
    </div>
  );
}

export default District;

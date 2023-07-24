import React from "react";
import almora from "../District/Almora.png"
import bageshwar from "../District/Bageshwar.jpg"
import Dehradun from "../District/dehradun.jpg"
import Nainital from "../District/nainital.jpg"
import Pauri from "../District/Pauri.jpg"
import Uttarkashi from "../District/Uttarkashi.jpg"
import Chamoli from "../District/Chamoli.jpg"
import Tehri from "../District/Tehri.jpg"
import Haridwar from "../District/Haridwar.jpg"
import Rudraprayag from "../District/rudrapryag.jpg"
import Pithoragarh from "../District/Pithoragarh.jpg"
import Champawat from "../District/Champawat.jpg"
import udhamSinghNagar from "../District/US-nagar.jpg"
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

function District() {
    
    const dist = [
        {
            id:1,
            name: "almora",
            source:almora,
            about:"Almora is a municipal board and a cantonment town in the state of Uttarakhand, India. Almora was founded in 1568 by King Kalyan Chand. Almora was the seat of Chand kings that ruled over the Kumaon Kingdom. It is considered the cultural heart of the Kumaon region of Uttarakhand.",
            area:"3,144 sq km",
            population: "865,284"
        },
        {
            id:2,
            name: "bageshwar",
            about:"Bageshwar (Kumaoni: Bāgshyār) is a town and a municipal board in Bageshwar district in the state of Uttarakhand, India.Bageshwar is known for its scenic environment, glaciers, rivers and temples.",
            source:bageshwar,
            area:"2,241 sq km",
            population: "361,259"
        },
        {
            id:3,
            name: "champawat",
            source:Champawat,
            about:"1997",
            area:"1,766 sq km",
            population: "360,911"
        },
        {
            id:4,
            name: "nainital",
            source:Nainital,
            about:"",
            area:"4251 sq km",
            population: "1,326,901"
        },
        {
            id:5,
            name: "pithoragarh",
            source:Pithoragarh,
            about:"",
            area:"7,090 sq km",
            population: "671,981"
        },
        {
            id:6,
            name: "udham singh nagar",
            source:udhamSinghNagar,
            about:"",
            area:"2,908",
            population: "2,291,974"
        },
        {
            id:7,
            name: "dehradun",
            source:Dehradun,
            about:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:8,
            name: "haridwar",
            source:Haridwar,
            about:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:9,
            name: "	pauri Garhwal",
            source:Pauri,
            about:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:10,
            name: "	rudraprayag",
            source:Rudraprayag,
            about:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:11,
            name: "	tehri Garhwal",
            source:Tehri,
            about:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:12,
            name: "uttarkashi",
            source:Uttarkashi,
            about:"",
            area:"2,908",
            population: "1,648,367"
        },
        {
            id:13,
            name: "	chamoli",
            source:Chamoli,
            about:"",
            area:" 2,908",
            population: " 1,648,367"
        },
    ]
    // const navigate = useNavigate();
    // const clicked =()=>{
    //     navigate(`/tourism/${name}`)
    // }
  return (
    <div className='w-full pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-green-100 gap-5'>
        {dist.map(({id, name,source,area, population,about})=>{
        return <div key={id} className="rounded overflow-hidden shadow-lg mx-1 bg-green-300 mt-5">
            <img
              className="w-full h-1/3 p-1 mx-auto rounded"
              src={source}
              alt="source"
            />
            <div className="px-6 py-1">
              <h1 className="text-2xl capitalize font-bold text-center">{name}</h1>
              <p className="text-xl">{about}</p>
              <p className="font-bold">Area :<span className="font-light px-2">{area}</span></p>
              <p className="font-bold">Population :<span className="font-light px-2">{population}</span></p>
              <div className="flex justify-center items-center mt-10">
            <button className="text-center px-5 py-2 rounded-lg font-signature text-2xl  bg-gradient-to-r from-cyan-500 to-green-800 text-white"><Link to={`/tourism/${name}`}>Visit</Link></button>
              </div>
            </div>
          </div>
})}
      
    </div>
  );
}

export default District;

import districtContext from "./DistrictsContexts";
import React from 'react'
function DistrictState(props) {
  const dist = [
        
    {
        id:"UK01",
        name: "almora",
        source:'../images/Districts/Almora.png',
        about:"Almora" ,
        area:"3,144 sq km",
        population: "865,284"
    },
    {
        id:"UK02",
        name: "bageshwar",
        source:"../images/Districts/Bageshwar.jpg",
        about:"Bageshwar (Kumaoni: Bāgshyār) is a town and a municipal board in Bageshwar district in the state of Uttarakhand, India.Bageshwar is known for its scenic environment, glaciers, rivers and temples.",
        area:"2,241 sq km",
        population: "361,259"
    },
    {
        id:"UK03",
        name: "champawat",
        source:"../images/Districts/Champawat.jpg",
        about:"1997",
        area:"1,766 sq km",
        population: "360,911"
    },
    {
        id:"UK04",
        name: "nainital",
        source:"../images/Districts/Nainital.jpg",
        about:"",
        area:"4251 sq km",
        population: "1,326,901"
    },
    {
        id:"UK05",
        name: "pithoragarh",
        source:"../images/Districts/Pithoragarh.jpg",
        about:"",
        area:"7,090 sq km",
        population: "671,981"
    },
    {
        id:"UK06",
        name: "udham singh nagar",
        source:"../images/Districts/US-nagar.jpg",
        about:"",
        area:"2,908",
        population: "2,291,974"
    },
    {
        id:"UK07",
        name: "dehradun",
        source:"../images/Districts/Dehradun.jpg",
        about:"",
        area:"2,908",
        population: "1,648,367"
    },
    {
        id:"UK08",
        name: "haridwar",
        source:"../images/Districts/Haridwar.jpg",
        about:"",
        area:"2,908",
        population: "1,648,367"
    },
    {
        id:"UK09",
        name: "	tehri garhwal",
        source:"../images/Districts/Tehri.jpg",
        about:"",
        area:"2,908",
        population: "1,648,367",

    },
    {
        id:"UK10",
        name: "uttarkashi",
        source:"../images/Districts/Uttarkashi.jpg",
        about:"",
        area:"2,908",
        population: "1,648,367",
    },
    {
        id:"UK11",
        name: "	chamoli",
        source:"../images/Districts/Chamoli.jpg",
        about:"",
        area:" 2,908",
        population: " 1,648,367"
    },
    {
        id:"UK12",
        name: "	pauri garhwal",
        source:"../images/Districts/Pauri.jpg",
        about:"",
        area:"2,908",
        population: "1,648,367"
    },
    {
        id:"UK13",
        name: "	rudraprayag",
        source:"../images/Districts/rudrapryag.jpg",
        about:"",
        area:"2,908",
        population: "1,648,367"
    },
]
  return (
    <div>
        <districtContext.Provider value={{dist}}>{props.children}</districtContext.Provider>
    </div>
  )
}

export default DistrictState

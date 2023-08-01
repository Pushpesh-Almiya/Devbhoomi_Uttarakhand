import districtContext from "./DistrictsContexts";
import React from 'react'
function DistrictState(props) {
  const dist = [
        
    {
        id:"UK01",
        name: "almora",
        source:'../images/Districts/Almora.png',
        about:"Almora is famous for its alluring beauty, panoramic view of the Himalayas, rich cultural heritage, unique handicrafts, and delicious cuisines. The picturesque landscape of Almora attracts hundreds of tourists each year as it is one of the business hubs of the Kumaon region." ,
        area:"3,144 sq km",
        population: "865,284"
    },
    {
        id:"UK02",
        name: "bageshwar",
        source:"../images/Districts/Bageshwar.jpg",
        about:"Not just natural and scenic vistas, Bageshwar is also home to the revered Bagnath temple. Dedicated to Lord Shiva, this temple is visited by devotees in large numbers all year round but witnesses a whopping footfall during the annual Shivratri festival.",
        area:"2,241 sq km",
        population: "361,259"
    },
    {
        id:"UK03",
        name: "champawat",
        source:"../images/Districts/Champawat.jpg",
        about:"Champawat, once the capital of the rulers of the Chand dynasty, is famous for its natural beauty and well known temples. The ancient fort, now houses headquarters of the Tehsil office. A historical spot, Champawat has many well known temples of high artistic value.",
        area:"1,766 sq km",
        population: "360,911"
    },
    {
        id:"UK04",
        name: "nainital",
        source:"../images/Districts/Nainital.jpg",
        about:"It is also known for the revered Naina Devi temple, which stands on the edge of the lake. Nainital is not only a famous tourist destination but is also known for its prestigious educational institutions and schools, which have stood since the British era.",
        area:"4251 sq km",
        population: "1,326,901"
    },
    {
        id:"UK05",
        name: "pithoragarh",
        source:"../images/Districts/Pithoragarh.jpg",
        about:"The third-largest city of the Kumaon region, Pithoragarh is popular as being the starting point for treks to the Milam Glacier and the Darma Valley. Being a border town, Pithoragarh is also an important base of the Indian Army.",
        area:"7,090 sq km",
        population: "671,981"
    },
    {
        id:"UK06",
        name: "udham singh nagar",
        source:"../images/Districts/US-nagar.jpg",
        about:"Known as the 'food bowl of Uttarakhand' and 'chawal ki nagari', the district was named in the memory of Late Shri Udham Singh, a great freedom fighter. Best time to visit: Udham Singh Nagar is one of those few blessed destinations in Uttarakhand that can be visited all year round.",
        area:"2,908",
        population: "2,291,974"
    },
    {
        id:"UK07",
        name: "dehradun",
        source:"../images/Districts/Dehradun.jpg",
        about:"Also known as the 'Adobe of Drona', Dehradun has always been an important center for Garhwal rulers which was captured by the British. The headquarters of many National Institutes and Organizations like ONGC, Survey Of India, Forest Research Institute, Indian Institute of Petroleum etc are located in the city.",
        area:"2,908",
        population: "1,648,367"
    },
    {
        id:"UK08",
        name: "haridwar",
        source:"../images/Districts/Haridwar.jpg",
        about:"It is the site of the headworks of the Ganges Canal system. Haridwar is one of the seven sacred cities of the Hindus and is a major pilgrimage centre. It has been known by many names; originally it was called Kapila, for the sage who once lived there.",
        area:"2,908",
        population: "1,648,367"
    },
    {
        id:"UK09",
        name: "	tehri garhwal",
        source:"../images/Districts/Tehri.jpg",
        about:"Tehri dam is renowned as the largest and highest dam in Asia and is considered as the 10th tallest dam in the world harnessing water from Bhilangana and Bhagirathi, the two essential rivers in the Himalayas. The dam is located 13 km away from New Tehri and generates more than 1000 MW of electricity.",
        area:"2,908",
        population: "1,648,367",

    },
    {
        id:"UK10",
        name: "uttarkashi",
        source:"../images/Districts/Uttarkashi.jpg",
        about:"Uttarkashi, the headquarters of the eponymous district, is an ancient land with rich cultural heritage and a picture-postcard-like appeal with sweeping mountain views. It is famous for an ancient temple dedicated to Lord Shiva, which is visited by thousands throughout the year.",
        area:"2,908",
        population: "1,648,367",
    },
    {
        id:"UK11",
        name: "chamoli",
        source:"../images/Districts/Chamoli.jpg",
        about:"One of the most popular destinations in Uttarakhand. Chamoli is known as the abode of gods, courtesy the numerous site of religious shrines and temples here.",
        area:" 2,908",
        population: " 1,648,367"
    },
    {
        id:"UK12",
        name: "pauri garhwal",
        source:"../images/Districts/Pauri.jpg",
        about:"Pilgrimage: The town of Pauri is known for some of the revered temples in the region. Kandoliya Temple and Danda Nagraja Temple near Pauri are flocked with devotees all year round who visit the temple to seek blessings from the deity.",
        area:"2,908",
        population: "1,648,367"
    },
    {
        id:"UK13",
        name: "rudraprayag",
        source:"../images/Districts/rudrapryag.jpg",
        about:"Rudraprayag is a famous stopover point for the Kedarnath yatra, apart from this the town is known for its scenic beauty and for being home to many great sightseeing spots and temples. It is quite famous among tourists such as Panch Prayag, Shiva Temple, City, Business Hub, Local Market, and Char Dham Road.",
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

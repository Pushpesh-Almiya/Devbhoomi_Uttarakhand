import districtContext from "./DistrictsContexts";
import React, { useState } from 'react'
import Kasar from "../Tourism/kasarDevi.jpg";
import Massourie from "../Tourism/Massourie.jpg";
import Rishikesh from "../Tourism/RISHIKESH.jpg";
function DistrictState(props) {
const [tuoristPlaces , setTuoristPlaces] = useState([
    {
      name :"Kasar Devi",
      district:"almora",
      img : Kasar,
      firstPara:"Kasar devi is a village near Almora, Uttarakhand. It is known forthe Kasar Devi temple, a Devi temple, dedicated to Kasar Devi, afterwhom the place is also named. The temple structure dates to the 2ndcentury CE. Swami Vivekananda visited Kasar Devi in 1890s, andnumerous western seeker, Sunyata Baba Alfred Sorensen and LamaAnagarika Govinda.",
      secondPara:"It's believed that this temple is positioned onthe earth's Van Allen Belt. The region surrounding the Kasar DeviTemple has an enormous geomagnetic field, thanks to gaps in bands ofradiation. As a result, Kasar Devi is endowed with a cosmic energysimilar to that of Stonehenge in UK and Machu Pichu in Peru Alsoknown as Hippie Hill or Crank's Ridge, Kasar Devi Temple complex hasalways been a melting pot of art, spiritualism and poetry. SingerBob Dylan and actor Uma Thurman, have made this popular and todayKasar Devi continues to attract folks looking for answers to life'schallenging questions. The temple hosts the annual Kasar Devi Fairon Kartik Poornima (NovemberDecember)."
    },
    {
      name :"Mussoorie",
      district:"dehradun",
      img : Massourie,
      firstPara:"Mussoorie is a hill station and a municipal board, near Dehradun city in the Dehradun district of the Indian state Uttarakhand. It is about 35 kilometres (22 mi) from the state capital of Dehradun and 290 km (180 mi) north of the national capital of New Delhi. The hill station is in the foothills of the Garhwal Himalayan range. The adjoining town of Landour, which includes a military cantonment, is considered part of greater Mussoorie, as are the townships Barlowganj and Jharipani.",
      secondPara:"Mussoorie is at an average altitude of 2,005 metres (6,578 ft). To the northeast are the Himalayan snow ranges, and to the south, the Doon Valley and Shiwalik ranges. The second highest point is the original Lal Tibba in Landour, with a height of over 2,275 m (7,464 ft). Mussoorie is popularly known as The Queen of the Hills. In the recent years, Mussoorie has again gained popularity as an upcoming travel destination with many attractions such as Camel's back road, Dhanaulti, Lal Tibba, etc. Uttarakhand Government reported 3.02 million (30.23 Lacs) travelers to Mussoorie in 2019."
    },
    {
      name :"Nanda Devi",
      district:"almora",
      img : Massourie,
      firstPara:"Nanda Devi is the second-highest mountain in India, after Kangchenjunga, and the highest located entirely within the country. (Kangchenjunga is on the border of India and Nepal.[5]) Nanda Devi is the 23rd-highest peak in the world.",
      secondPara:"Nanda Devi was considered the highest mountain in the world before computations in 1808 proved Dhaulagiri to be higher. It was also the highest mountain in India until 1975, when Sikkim, an independent kingdom until 1948 and a protectorate of India thereafter, became a part of the Republic of India. It is located in Chamoli district of Uttarakhand, between the Rishiganga valley on the west and the Goriganga valley on the east.The peak, whose name means 'Bliss-Giving Goddess', is regarded as the patron goddess of the Garhwal and Kumaon Himalayas. In acknowledgment of its religious significance and for the protection of its fragile ecosystem, the Government of India declared the peak as well as the circle of high mountains surrounding it—the Nanda Devi sanctuary—off-limits to both locals and climbers in 1983. The surrounding Nanda Devi National Park was declared a UNESCO World Heritage Site in 1988."
    },
    {
      name :"Chitai Golu Devta temple",
      district:"almora",
      img : Massourie,
      firstPara:"Golu Devata (Kumaoni: गोलज्यू) is a deity of the Kumaoni community of India.The Chitai Golu devta temple is the most celebrated temple dedicated to the deity and is about 4 km (2.5 mi) from the main gate of Binsar wildlife sanctuary & about 10 km (6.2 mi) from Almora.",
      secondPara:"Golu Devata used to travel far distances on his horse and used to meet people of his kingdom, in a practice called Golu Darbar: Golu Devata used to hear the problems of the people and help them in any way possible. He had a special place for people in his heart and he was always ready to help them. Due to his complete dedication to people, he led a very simple life, following the principles of brahmacharya.Golu Devata still meets with his people and in many villages the practice of Golu darbar is still prevalent, where Golu Devata appears in front of people, listens to their problems and helps people in every way possible. In present times, the most common form of Golu Devata Darbar is Jagar.[2] Golu Devata always had a special place in his heart for his white horse, and it is believed that he still rides his white horse to travel around.He is worshipped as the god of justice and he serves it well. HIs mantra is the following: 'Jai Nyay Devta Goljyu Tumar Jai ho. Sabuk lije dain haije' (Translation: 'Hail the God of justice: Goljyu! Blessings for everyone').!"
    },
    {
      name :"Jageshwar",
      district:"almora",
      img : Massourie,
      firstPara:"Jageshwar is a Hindu pilgrimage town near Almora in Almora district of the Himalayan Indian state of Uttarakhand. It is one of the Dhams (pilgrimage region) in the Shaivism tradition. The site is protected under Indian laws, and managed by the Archaeological Survey of India (ASI). It includes Dandeshwar Temple, Chandi-ka-Temple, Jageshwar Temple, Kuber Temple, Mritunjaya Temple, Nanda Devi or Nau Durga, Nava-grah temple, a Pyramidal shrine, and Surya Temple. The site celebrates the Jageshwar Monsoon Festival during the Hindu calendar month of Shravan (overlaps with July–August) and the annual Maha Shivratri Mela (Shivratri festival), which takes place in early spring.",
      secondPara:"Jageshwar Temples, also referred to as Jageswar Temples or Jageshwar Valley Temples, are a group of 125 ancient Hindu temples dated between 7th and 14th century, [1] The valley has a number of temple clusters such as the Dandeshwar and Jageshwar sites. Some locations have attracted construction of new temples through the 20th-century. Together these clusters over the valley consist of over 200 structural temples built from cut stone. Many are small, while a few are substantial. They predominantly illustrate North Indian Nagara style of architecture with a few exceptions that show South and Central Indian style designs, many are dedicated to god Shiva, while others in immediate vicinity are dedicated to god Vishnu, Shakti goddesses and Surya traditions of Hinduism.There are other Hindu temples in the Himalayan region that are called Jageshwar Temple such as one in Dalash, Himachal Pradesh.[3]"
    },
    {
      name :"Dunagiri",
      district:"almora",
      img : Massourie,
      firstPara:"Dunagiri is a historic area in Almora district in the state of Uttarakhand in India. Dunagiri is known as the birthplace of modern-day Kriya Yoga due to the fact that Lahiri Mahasaya was initiated into Kriya Yoga by Mahavatar Babaji at this site.",
      secondPara:"Approximately 400 km (250 mi) from Delhi, a cluster of six small villages forms the place that is variously known as Dunagiri, Drongiri and Doonagiri. 116 such villages combine to form the Development Block of Dwarahat, which falls under the District of Almora. Located at a height of 8,000 feet (2,400 meters) above sea level, Dunagiri is famous within Kumaon for its temple of Shakti – known here as Dunagiri Devi."
    },
    {
      name :"Ranikhet",
      district:"almora",
      img : Massourie,
      firstPara:"Ranikhet (Kumaoni: Rānikhèt) is a hill station and cantonment town, near Almora Town in Almora district[1] in the Indian state of Uttarakhand. It is the home of the Military Hospital, Kumaon Regiment[2] (KRC) and Naga Regiment[2] and is maintained by the Indian Army.",
      secondPara:"Ranikhet is at an altitude of 1,869 metres (6,132 ft) above sea level, within sight of the western peaks of the Himalayas. Ranikhet is a Class IV town with a civic status of a Cantonment board."
    },
    {
      name :"katarmal sun temple",
      district:"almora",
      img : Massourie,
      firstPara:"Katarmal is a remote village located in Kumaon Division, in Almora District, Uttarakhand, India.Katarmal is located at a distance of 1.5 km from Kosi village and 12 km from the district centre, Almora[1] and 70 km from Nainital.[2] Located at a height of 2116 meters above sea level, it is well connected by road, 30 km away from Khairna, Garampani (Nainital, Haldwani, Coordinates: 29°29'39'N 79°28'46'E) & 33 km from Ranikhet and Kausani the nearest connecting point being near Kosi village.[1] The G.B. Pant Institute of Himalayan Environment and Development, established in 1988 serves as a nodal agency for research and development and was established here by Government of India.",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },



    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },

    {
      name :"",
      district:"",
      img : Massourie,
      firstPara:"",
      secondPara:""
    },
  ])
  return (
    <div>
        <districtContext.Provider value={{tuoristPlaces,setTuoristPlaces}}>{props.children}</districtContext.Provider>
    </div>
  )
}

export default DistrictState

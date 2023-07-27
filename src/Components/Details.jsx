import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Tourism from './Tourism';

function Details() {
    const params = useParams()
    const navigate = useNavigate()
    const [districtDetails, setDistrictDetails]=useState([
      {
        name:"almora",
        imageSource :"../images/Almora.png",
        about:"Almora (Kumaoni: Almāḍ) is a municipal board and a cantonment town in the state of Uttarakhand, India. It is the administrative headquarters of Almora district.[4] Almora is located on a ridge at the southern edge of the Kumaon Hills of the Himalaya range. The Koshi (Kaushiki) and Suyal (Salmale) rivers flow along the city and snow-capped Himalayas can be seen in the background.Almora was founded in 1568.[5] by King Kalyan Chand;[6][7][8] however, there are accounts of human settlements in the hills and surrounding region in the Hindu epic Mahabharata[9] (8th and 9th century BCE[10]). Almora was the seat of Chand kings that ruled over the Kumaon Kingdom. It is considered the cultural heart of the Kumaon region of Uttarakhand.According to the provisional results of the 2019 national census of India, Almora had a population of about 179,000.[citation needed] Nestled within higher peaks of the Himalaya, Almora enjoys a year-round mild temperate climate. The town is visited by thousands of tourists annually from all over the world.[citation needed] There are 11 blocks (i.e. VikashKhand) in Almora district.[citation needed]EtymologyAlmora got its name from Bhilmora, a kind of sorrel (although some have tried to derive it from Berberis \"kilmora\"[11][12]), a short plant commonly found there[13] which was used for washing the utensils of the sun temple at Katarmal. The people bringing the Bhilmora/kilmora were called Bhilmori/Kilmori and later \"Almori\" and the place came to be known as \"Almora\".When king Bhishm Chand laid the foundation of the town, he had initially named it Alamnagar. Prior to that, Almora was known as 'Rajapur' during the early phase of Chand rule.[16][17][18] The name 'Rajpur' is also mentioned over a number of ancient copper plates.[18] There is still a place called Rajpur in Almora."
      },
      {
        name:"champawat",
        imageSource :"../images/Champawat.jpg",
        about:"Champawat (Kumaoni: Almāḍ) is a municipal board and a cantonment town in the state of Uttarakhand, India. It is the administrative headquarters of Almora district.[4] Almora is located on a ridge at the southern edge of the Kumaon Hills of the Himalaya range. The Koshi (Kaushiki) and Suyal (Salmale) rivers flow along the city and snow-capped Himalayas can be seen in the background.Almora was founded in 1568.[5] by King Kalyan Chand;[6][7][8] however, there are accounts of human settlements in the hills and surrounding region in the Hindu epic Mahabharata[9] (8th and 9th century BCE[10]). Almora was the seat of Chand kings that ruled over the Kumaon Kingdom. It is considered the cultural heart of the Kumaon region of Uttarakhand.According to the provisional results of the 2019 national census of India, Almora had a population of about 179,000.[citation needed] Nestled within higher peaks of the Himalaya, Almora enjoys a year-round mild temperate climate. The town is visited by thousands of tourists annually from all over the world.[citation needed] There are 11 blocks (i.e. VikashKhand) in Almora district.[citation needed]EtymologyAlmora got its name from Bhilmora, a kind of sorrel (although some have tried to derive it from Berberis \"kilmora\"[11][12]), a short plant commonly found there[13] which was used for washing the utensils of the sun temple at Katarmal. The people bringing the Bhilmora/kilmora were called Bhilmori/Kilmori and later \"Almori\" and the place came to be known as \"Almora\".When king Bhishm Chand laid the foundation of the town, he had initially named it Alamnagar. Prior to that, Almora was known as 'Rajapur' during the early phase of Chand rule.[16][17][18] The name 'Rajpur' is also mentioned over a number of ancient copper plates.[18] There is still a place called Rajpur in Almora."
      },
      {
        name:"bageshwar",
        imageSource :"../images/Bageshwar.jpg",
        about:"Bageshwar (Kumaoni: Almāḍ) is a municipal board and a cantonment town in the state of Uttarakhand, India. It is the administrative headquarters of Almora district.[4] Almora is located on a ridge at the southern edge of the Kumaon Hills of the Himalaya range. The Koshi (Kaushiki) and Suyal (Salmale) rivers flow along the city and snow-capped Himalayas can be seen in the background.Almora was founded in 1568.[5] by King Kalyan Chand;[6][7][8] however, there are accounts of human settlements in the hills and surrounding region in the Hindu epic Mahabharata[9] (8th and 9th century BCE[10]). Almora was the seat of Chand kings that ruled over the Kumaon Kingdom. It is considered the cultural heart of the Kumaon region of Uttarakhand.According to the provisional results of the 2019 national census of India, Almora had a population of about 179,000.[citation needed] Nestled within higher peaks of the Himalaya, Almora enjoys a year-round mild temperate climate. The town is visited by thousands of tourists annually from all over the world.[citation needed] There are 11 blocks (i.e. VikashKhand) in Almora district.[citation needed]EtymologyAlmora got its name from Bhilmora, a kind of sorrel (although some have tried to derive it from Berberis \"kilmora\"[11][12]), a short plant commonly found there[13] which was used for washing the utensils of the sun temple at Katarmal. The people bringing the Bhilmora/kilmora were called Bhilmori/Kilmori and later \"Almori\" and the place came to be known as \"Almora\".When king Bhishm Chand laid the foundation of the town, he had initially named it Alamnagar. Prior to that, Almora was known as 'Rajapur' during the early phase of Chand rule.[16][17][18] The name 'Rajpur' is also mentioned over a number of ancient copper plates.[18] There is still a place called Rajpur in Almora."
      },
      {
        name:"nainital",
        imageSource :"../images/Nainital.jpg",
        about:"Bageshwar (Kumaoni: Almāḍ) is a municipal board and a cantonment town in the state of Uttarakhand, India. It is the administrative headquarters of Almora district.[4] Almora is located on a ridge at the southern edge of the Kumaon Hills of the Himalaya range. The Koshi (Kaushiki) and Suyal (Salmale) rivers flow along the city and snow-capped Himalayas can be seen in the background.Almora was founded in 1568.[5] by King Kalyan Chand;[6][7][8] however, there are accounts of human settlements in the hills and surrounding region in the Hindu epic Mahabharata[9] (8th and 9th century BCE[10]). Almora was the seat of Chand kings that ruled over the Kumaon Kingdom. It is considered the cultural heart of the Kumaon region of Uttarakhand.According to the provisional results of the 2019 national census of India, Almora had a population of about 179,000.[citation needed] Nestled within higher peaks of the Himalaya, Almora enjoys a year-round mild temperate climate. The town is visited by thousands of tourists annually from all over the world.[citation needed] There are 11 blocks (i.e. VikashKhand) in Almora district.[citation needed]EtymologyAlmora got its name from Bhilmora, a kind of sorrel (although some have tried to derive it from Berberis \"kilmora\"[11][12]), a short plant commonly found there[13] which was used for washing the utensils of the sun temple at Katarmal. The people bringing the Bhilmora/kilmora were called Bhilmori/Kilmori and later \"Almori\" and the place came to be known as \"Almora\".When king Bhishm Chand laid the foundation of the town, he had initially named it Alamnagar. Prior to that, Almora was known as 'Rajapur' during the early phase of Chand rule.[16][17][18] The name 'Rajpur' is also mentioned over a number of ancient copper plates.[18] There is still a place called Rajpur in Almora."
      },
      {
        name:"chamoli",
        imageSource :"../images/Chamoli.jpg",
        about:"Bageshwar (Kumaoni: Almāḍ) is a municipal board and a cantonment town in the state of Uttarakhand, India. It is the administrative headquarters of Almora district.[4] Almora is located on a ridge at the southern edge of the Kumaon Hills of the Himalaya range. The Koshi (Kaushiki) and Suyal (Salmale) rivers flow along the city and snow-capped Himalayas can be seen in the background.Almora was founded in 1568.[5] by King Kalyan Chand;[6][7][8] however, there are accounts of human settlements in the hills and surrounding region in the Hindu epic Mahabharata[9] (8th and 9th century BCE[10]). Almora was the seat of Chand kings that ruled over the Kumaon Kingdom. It is considered the cultural heart of the Kumaon region of Uttarakhand.According to the provisional results of the 2019 national census of India, Almora had a population of about 179,000.[citation needed] Nestled within higher peaks of the Himalaya, Almora enjoys a year-round mild temperate climate. The town is visited by thousands of tourists annually from all over the world.[citation needed] There are 11 blocks (i.e. VikashKhand) in Almora district.[citation needed]EtymologyAlmora got its name from Bhilmora, a kind of sorrel (although some have tried to derive it from Berberis \"kilmora\"[11][12]), a short plant commonly found there[13] which was used for washing the utensils of the sun temple at Katarmal. The people bringing the Bhilmora/kilmora were called Bhilmori/Kilmori and later \"Almori\" and the place came to be known as \"Almora\".When king Bhishm Chand laid the foundation of the town, he had initially named it Alamnagar. Prior to that, Almora was known as 'Rajapur' during the early phase of Chand rule.[16][17][18] The name 'Rajpur' is also mentioned over a number of ancient copper plates.[18] There is still a place called Rajpur in Almora."
      },
    ])

    const district =(cityName)=>{
      setDistrictDetails(districtDetails.filter(function(arr){
        return arr.name === cityName
    }))
  }
  
  useEffect(()=>{
    district(params.name)
  },[])
  
  return (
    <>
    <div className= 'w-full pt-20'>
        <h1 className="text-6xl capitalize font-signature text-center text-blue-700">{params.name}</h1>
        <img src={districtDetails[0].imageSource} className='h-80 my-4 mx-auto' alt="" />
      <p>{districtDetails[0].about}</p>
    <button className="text-center px-5 py-2 rounded-lg font-signature text-2xl  bg-gradient-to-r from-cyan-800 to-green-800 text-white" onClick={()=>{navigate(-1)}}>Back</button>
    <Tourism/>
      
    </div>
    </>
  )
}

export default Details

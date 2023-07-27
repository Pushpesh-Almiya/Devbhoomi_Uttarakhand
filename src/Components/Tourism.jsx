import React,{useEffect, useState}  from "react";
import { useParams } from "react-router-dom";

function Tourism() {
  const [tuoristPlaces , setTuoristPlaces] = useState([
    {
      RTO :"UK01",
      name :"Kasar Devi",
      district:"almora",
      img : "../images/Tourism/kasarDevi.jpg",
      firstPara:"Kasar devi is a village near Almora, Uttarakhand. It is known forthe Kasar Devi temple, a Devi temple, dedicated to Kasar Devi, afterwhom the place is also named. The temple structure dates to the 2ndcentury CE. Swami Vivekananda visited Kasar Devi in 1890s, andnumerous western seeker, Sunyata Baba Alfred Sorensen and LamaAnagarika Govinda.",
      secondPara:"It's believed that this temple is positioned onthe earth's Van Allen Belt. The region surrounding the Kasar DeviTemple has an enormous geomagnetic field, thanks to gaps in bands ofradiation. As a result, Kasar Devi is endowed with a cosmic energysimilar to that of Stonehenge in UK and Machu Pichu in Peru Alsoknown as Hippie Hill or Crank's Ridge, Kasar Devi Temple complex hasalways been a melting pot of art, spiritualism and poetry. SingerBob Dylan and actor Uma Thurman, have made this popular and todayKasar Devi continues to attract folks looking for answers to life'schallenging questions. The temple hosts the annual Kasar Devi Fairon Kartik Poornima (NovemberDecember)."
    },
    {
      RTO :"UK01",
      name :"Nanda Devi",
      district:"almora",
      img : "../images/Tourism/NandaDevi.jpg",
      firstPara:"Nanda Devi is the second-highest mountain in India, after Kangchenjunga, and the highest located entirely within the country. (Kangchenjunga is on the border of India and Nepal.[5]) Nanda Devi is the 23rd-highest peak in the world.",
      secondPara:"Nanda Devi was considered the highest mountain in the world before computations in 1808 proved Dhaulagiri to be higher. It was also the highest mountain in India until 1975, when Sikkim, an independent kingdom until 1948 and a protectorate of India thereafter, became a part of the Republic of India. It is located in Chamoli district of Uttarakhand, between the Rishiganga valley on the west and the Goriganga valley on the east.The peak, whose name means 'Bliss-Giving Goddess', is regarded as the patron goddess of the Garhwal and Kumaon Himalayas. In acknowledgment of its religious significance and for the protection of its fragile ecosystem, the Government of India declared the peak as well as the circle of high mountains surrounding it—the Nanda Devi sanctuary—off-limits to both locals and climbers in 1983. The surrounding Nanda Devi National Park was declared a UNESCO World Heritage Site in 1988."
    },
    {
      RTO :"UK01",
      name :"Chitai Golu Devta temple",
      district:"almora",
      img : "../images/Tourism/Chitai.jpg",
      firstPara:"Golu Devata (Kumaoni: गोलज्यू) is a deity of the Kumaoni community of India.The Chitai Golu devta temple is the most celebrated temple dedicated to the deity and is about 4 km (2.5 mi) from the main gate of Binsar wildlife sanctuary & about 10 km (6.2 mi) from Almora.",
      secondPara:"Golu Devata used to travel far distances on his horse and used to meet people of his kingdom, in a practice called Golu Darbar: Golu Devata used to hear the problems of the people and help them in any way possible. He had a special place for people in his heart and he was always ready to help them. Due to his complete dedication to people, he led a very simple life, following the principles of brahmacharya.Golu Devata still meets with his people and in many villages the practice of Golu darbar is still prevalent, where Golu Devata appears in front of people, listens to their problems and helps people in every way possible. In present times, the most common form of Golu Devata Darbar is Jagar.[2] Golu Devata always had a special place in his heart for his white horse, and it is believed that he still rides his white horse to travel around.He is worshipped as the god of justice and he serves it well. HIs mantra is the following: 'Jai Nyay Devta Goljyu Tumar Jai ho. Sabuk lije dain haije' (Translation: 'Hail the God of justice: Goljyu! Blessings for everyone').!"
    },
    {
      RTO :"UK01",
      name :"Jageshwar",
      district:"almora",
      img : "../images/Tourism/Jageshwar.jpg",
      firstPara:"Jageshwar is a Hindu pilgrimage town near Almora in Almora district of the Himalayan Indian state of Uttarakhand. It is one of the Dhams (pilgrimage region) in the Shaivism tradition. The site is protected under Indian laws, and managed by the Archaeological Survey of India (ASI). It includes Dandeshwar Temple, Chandi-ka-Temple, Jageshwar Temple, Kuber Temple, Mritunjaya Temple, Nanda Devi or Nau Durga, Nava-grah temple, a Pyramidal shrine, and Surya Temple. The site celebrates the Jageshwar Monsoon Festival during the Hindu calendar month of Shravan (overlaps with July–August) and the annual Maha Shivratri Mela (Shivratri festival), which takes place in early spring.",
      secondPara:"Jageshwar Temples, also referred to as Jageswar Temples or Jageshwar Valley Temples, are a group of 125 ancient Hindu temples dated between 7th and 14th century, [1] The valley has a number of temple clusters such as the Dandeshwar and Jageshwar sites. Some locations have attracted construction of new temples through the 20th-century. Together these clusters over the valley consist of over 200 structural temples built from cut stone. Many are small, while a few are substantial. They predominantly illustrate North Indian Nagara style of architecture with a few exceptions that show South and Central Indian style designs, many are dedicated to god Shiva, while others in immediate vicinity are dedicated to god Vishnu, Shakti goddesses and Surya traditions of Hinduism.There are other Hindu temples in the Himalayan region that are called Jageshwar Temple such as one in Dalash, Himachal Pradesh.[3]"
    },
    {
      RTO :"UK01",
      name :"Dunagiri",
      district:"almora",
      img : "../images/Tourism/Dunagiri.jpg",
      firstPara:"Dunagiri is a historic area in Almora district in the state of Uttarakhand in India. Dunagiri is known as the birthplace of modern-day Kriya Yoga due to the fact that Lahiri Mahasaya was initiated into Kriya Yoga by Mahavatar Babaji at this site.",
      secondPara:"Approximately 400 km (250 mi) from Delhi, a cluster of six small villages forms the place that is variously known as Dunagiri, Drongiri and Doonagiri. 116 such villages combine to form the Development Block of Dwarahat, which falls under the District of Almora. Located at a height of 8,000 feet (2,400 meters) above sea level, Dunagiri is famous within Kumaon for its temple of Shakti - known here as Dunagiri Devi."
    },
    {
      RTO :"UK01",
      name :"Ranikhet",
      district:"almora",
      img : "../images/Tourism/Ranikhet.jpg",
      firstPara:"Ranikhet (Kumaoni: Rānikhèt) is a hill station and cantonment town, near Almora Town in Almora district[1] in the Indian state of Uttarakhand. It is the home of the Military Hospital, Kumaon Regiment[2] (KRC) and Naga Regiment[2] and is maintained by the Indian Army.",
      secondPara:"Ranikhet is at an altitude of 1,869 metres (6,132 ft) above sea level, within sight of the western peaks of the Himalayas. Ranikhet is a Class IV town with a civic status of a Cantonment board."
    },
    {
      RTO :"UK01",
      name :"katarmal sun temple",
      district:"almora",
      img : "../images/Tourism/katarmal.jpg",
      firstPara:"Katarmal is a remote village located in Kumaon Division, in Almora District, Uttarakhand, India.Katarmal is located at a distance of 1.5 km from Kosi village and 12 km from the district centre, Almora[1] and 70 km from Nainital.[2] Located at a height of 2116 meters above sea level, it is well connected by road, 30 km away from Khairna, Garampani (Nainital, Haldwani, Coordinates: 29°29'39'N 79°28'46'E) & 33 km from Ranikhet and Kausani the nearest connecting point being near Kosi village.[1] The G.B. Pant Institute of Himalayan Environment and Development, established in 1988 serves as a nodal agency for research and development and was established here by Government of India.",
      secondPara:""
    },
    {
      RTO :"UK02",
      name :"Pindari Glacier",
      district:"bageshwar",
      img : "../images/Tourism/Pindari.jpg",
      firstPara:"The Pindari Glacier is a glacier found in the upper reaches of the Kumaon Himalayas, to the southeast of Nanda Devi and Nanda Kot.",
      secondPara:"The glacier is about 9 kilometers long [1] and gives rise to the Pindar River which meets the Alakananda at Karnaprayag in the Garhwal district.The trail to reach the glacier crosses the villages of Saung, Loharkhet, crosses over the Dhakuri Pass, continues onto Khati village (the last inhabited village on the trail), Dwali, Phurkia and finally Zero Point, Pindar, the end of the trail. Though most of the trail is along the banks of the Pindari River, the river is mostly hidden until after Khati.The Pindari Glacier trail provides for a 90 km (56 mi) round-trip trek that most people find comfortable to complete in 6 days. The Pindari Glacier is also famous for other adventure sports like Ice climbing and Mountain biking.["
    },
    {
      RTO :"UK02",
      name :"Bagnath Temple",
      district:"bageshwar",
      img : "../images/Tourism/Bagnath.jpg",
      firstPara:"Bagnath Temple (Kumaoni: बागनाथ थान) is an ancient shrine dedicated to Shiva, situated in the Bageshwar city at the confluence of Sarayu and Gomati rivers.[1][2] Bagnath Temple is festooned with bells of all sizes and features impressive carvings.[3] It is the most famous Temple in Bageshwar District.[4] It is flooded with devotees on the occasion of Shivratri.[5] The city of Bageshwar gets its name from this Temple",
      secondPara:"According to Hindu Legend, Sage Markandeya worshipped Shiva here.[12][11] Lord Shiva blessed sage Markandeya by visiting here in the form of a Tiger.Though some sources state The existence of Bagnath temple since 7th Century,[7] the present building in nagara style was built in 1450 by Chand ruler, Laxmi Chand.[6][13][14] The various statues in the temple date back from 7th century AD to 16th century AD.[15] In 1996, the Archeology department of Uttarakhand state took over the temple, following which, several inscriptions and idols from the eighth to the tenth century were sealed inside the temples. These include idols of Shiva, Ganesha, Vishnu, Chaturmukhi Shiva, Teen Mukhi Shiva, Panch Mukhi Shiva, Mahishasura Mardini, Sahasra Shivalinga, Ganesh, Karthikeya, Panchdevapath, Navagraha etc.The significance of the temple finds mention in the Skanda Purana.[15] Hindu Pilgrims file in throughout the year to worship here.[3] A water police post was opened in the premises of the temple on 19 September 2016 for patrolling and prevention of water crimes in the city."
    },
    {
      RTO :"UK02",
      name :"Kausani ",
      district:"bageshwar",
      img : "../images/Tourism/Kausani.jpg",
      firstPara:"Kausani (Kumaoni: Kôsānī) is a hill station and Village situated in Bageshwar district in the state of Uttarakhand, India. It is famous for its scenic splendour and its spectacular 300 km-wide panoramic view of Himalayan peaks like Trisul, Nanda Devi and Panchchuli. Mahatma Gandhi called this place the 'Switzerland of India',[4][5] due to similarity in landscapes.",
      secondPara:"During Independence of India in 1947, Kausani was situated in the Almora District[6] till 15 September 1997 after which Bageshwar district was carved out of Almora district.[7] On 9 November 2000, the State of Uttarakhand was created from the Himalayan and adjoining northwestern districts of Uttar Pradesh."
    },
    {
      RTO :"UK05",
      name :"Patal Bhuvaneshwar",
      district:"pithoragarh",
      img : "../images/Tourism/patalBhuvneshwar.jpg",
      firstPara:"Patal Bhuvaneshwar (Hindi पाताल भुवनेश्वर) is a limestone cave temple 14 km from Gangolihat in the Pithoragarh district of Uttarakhand state in India. It is located in the village of Bhubneshwar. Legend and folklore have it that this cave enshrines Lord Shiva and thirty three koti demigods [33 types and not crore]. The cave is 160 m long and 90 feet deep from the point of entrance. Limestone rock formations have created various spectacular stalactite and stalagmite figures of various hues and forms. This cave has a narrow tunnel-like opening which leads to a number of caves. The cave is fully electrically illuminated. Built by the flow of water, Patal Bhuvaneshwar is not just one cave, rather a series of caves within caves.",
      secondPara:"\"He who wants to feel the presence of eternal power should come to the sacred Bhuvneshwar situated near the confluence of Ramganga, Sarayu and Gupt-Ganga.\" -Manaskhanda, Skanda Purana, whose 800 verses refer to Patal Bhuvaneshwar"
    },
    {
      RTO :"UK02",
      name :"Kafni Glacier",
      district:"bageshwar",
      img : "../images/Tourism/kafni.jpg",
      firstPara:"The Kafni Glacier is located in the upper reaches of the Kumaon Himalayas, to the southeast of Nanda Devi. The glacier gives rise to the Kafni River, which is a tributary of the Pindar River. The Pindar River is a tributary to Alaknanda River, which eventually is one of the two headstreams of the Ganges. This is relatively small glacier but a popular trekking destination along with Pindari Glacier.",
      secondPara:"The glacier is located in Bageshwar district. From Bageshwar town it can be approached via route of Bharadi, Saung, Loharkhet, Dhakuri Pass, Khati, Dwali and Khatiya. The route until Loharkhet is motorable, after which it is approximately a 90 km (56 mi) round trip. Khati is the last village on the route. Though Pindari is more popular tourist destination, some people find route to this glacier more beautiful. Unlike Pindari, tourists can trek up to the glacier. In case of Pindari, the trek beyond zero point becomes very tough and cannot be done without proper equipment."
    },
    {
      RTO :"UK07",
      name :"Mussoorie",
      district:"dehradun",
      img : "../images/Tourism/Massourie.jpg",
      firstPara:"Mussoorie is a hill station and a municipal board, near Dehradun city in the Dehradun district of the Indian state Uttarakhand. It is about 35 kilometres (22 mi) from the state capital of Dehradun and 290 km (180 mi) north of the national capital of New Delhi. The hill station is in the foothills of the Garhwal Himalayan range. The adjoining town of Landour, which includes a military cantonment, is considered part of greater Mussoorie, as are the townships Barlowganj and Jharipani.",
      secondPara:"Mussoorie is at an average altitude of 2,005 metres (6,578 ft). To the northeast are the Himalayan snow ranges, and to the south, the Doon Valley and Shiwalik ranges. The second highest point is the original Lal Tibba in Landour, with a height of over 2,275 m (7,464 ft). Mussoorie is popularly known as The Queen of the Hills. In the recent years, Mussoorie has again gained popularity as an upcoming travel destination with many attractions such as Camel's back road, Dhanaulti, Lal Tibba, etc. Uttarakhand Government reported 3.02 million (30.23 Lacs) travelers to Mussoorie in 2019."
    },
    {
      RTO:"UK04",
      name :"nainital",
      district:"nainital",
      img : "../images/Tourism/Nainital.jpg",
      firstPara:"Nainital (Kumaoni: Naintāl; pronounced is a town and headquarters of Nainital district of Kumaon division, Uttarakhand, India. It is the judicial capital of Uttarakhand, the High Court of the state being located there and is the headquarters of an eponymous district. It also houses the Governor of Uttarakhand,who resides in the Raj Bhavan. Nainital was the summer capital[8] of the United Provinces.",
      secondPara:"Nainital is located in the Kumaon foothills of the outer Himalayas at a distance of 285 km (177 mi) from the state capital Dehradun and 345 km (214 mi) from New Delhi, the capital of India. Situated at an altitude of 1,938 metres (6,358 ft) above sea level, the town is set in a valley containing an eye-shaped lake, approximately two miles in circumference, and surrounded by mountains, of which the highest are Naina Peak (2,615 m (8,579 ft)) on the north, Deopatha (2,438 m (7,999 ft)) on the west, and Ayarpatha (2,278 m (7,474 ft)) on the south. From the tops of the higher peaks, \"magnificent views can be obtained of the vast plain to the south, or of the mass of tangled ridges lying north, bound by the great snowy range which forms the central axis of the Himalayas.\"The hill station attracts tourists round the year."
    },
    {
      RTO :"UK04",
      name :"Kainchi Dham",
      district:"nainital",
      img : "../images/Tourism/Kainchi.jpg",
      firstPara:"A famous Hanuman temple located in the womb of Kumaon mountains is the Kainchi Dham. The place offers a perfect combination of beauty and spirituality. Surrounded by mountains and forests with a river flowing alongside, Kainchi Dham is a heaven for people who seek peace and calm.",
      secondPara:"The temple was established by a local and very profound saint, Neem Karoli Baba in 1960s. It is also an ashram of Neem Karoli Baba who is believed to be an incarnation of Lord Hanuman. Devotees claim to feel the divine presence of Lord Hanuman and Neem Karoli Baba at the ashram.\nThe  ashram gets its name corresponding to its location which makes a scissor-like (Kainchi in Hindi language) shape as the two hills, between which the ashram is located, cut and cross each other. Neem Karoli Baba took samadhi in the year 1973, and since then is considered as the incarnation of Lord Hanuman."
    },
    {
      RTO :"UK04",
      name :"Mukteshwar",
      district:"nainital",
      img : "../images/Tourism/Mukteshwar.jpg",
      firstPara:"Mukteshwar is a village and tourist destination in the Nainital district of Uttarakhand, India. It sits high in the Kumaon Hills at an altitude of 2171[1] meters (7500 feet), 51 km from Nainital, 72 km from Haldwani, and 343 km from Delhi.",
      secondPara:"Mukteshwar gets its name from a 350-year-old temple of Shiva, known as Mukteshwar Dham,[2] situated atop the highest point in the town, on the veterinary institute's campus. Close to it lie the overhanging cliffs, locally known as Chauli-ki-Jali,[3] used for rock climbing and rappelling, with an excellent view of the valleys below. Mukteshwar is famous for its breezy waterfalls such as The Bhalu Ghaad, Tarikhet waterfalls, Rudradhari waterfall and Dhokaney waterfall. The sunrise point is at the government-run PWD guest house. Another tourist attraction is the small Satoli Village, situated just 21 km from Mukteshwar. One can also visit the Indian Veterinary Research Institute (IVRI). Mukteshwar is the abode of a saint — Shri Mukteshwar Maharaj ji — who lived at the Top Cottage Temple where his samadhi is. One of his disciples, Swami Sanshudhanand Ji, now stays there."
    },
    {
      RTO :"UK05",
      name :"Munsiari",
      district:"pithoragarh",
      img : "../images/Tourism/Munsiari.jpg",
      firstPara:"Munsiyari (Kumaoni: Munsyār) is the name of the sub-division headquarters, a conglomeration of revenue villages and it also refers to the entire region as Munsiyari Tehsil and Sub Division in the Pithoragarh District in the hill-state of Uttarakhand, India.It is a hill station and lies at the base of the great Himalayan mountain range, at an elevation of about 2,200 m (7,200 ft)[1] and is a starting point of various treks into the interior of the range.",
      secondPara:"During a summer festival organized in Munsiyari market in 2013, a proposal for granting Munsiyari the status of Nagar Panchayat (lower level Municipality) was passed by the locals.[2] Gram Panchayats attached to the Munsiyari market had also given their consent for this.[2] On 28 February 2014, the Uttarakhand Cabinet decided to grant Nagar Panchayat status to the towns of Munsiyari, Chaukhutia and Naugaon.[3] Shortly afterwards, the then Chief Minister Harish Rawat made an announcement confirming this move while on a visit to the town.[4] The municipal area was to be created by incorporating 5 Gram Panchayats: Mallaghorpatta, Tallaghorpatta, Bunga, Sarmoli and Jainti.[4] An official notification was issued on 7 October 2014, but due to major opposition by the Gram Sabhas, the Nagar Panchayat could not come into existence.[5] In June 2015, several government officials visited the area and tried to initiate talks with local villagers.[6] After all the talks failed, the notification that allowed the formation of Nagar Panchayat was revoked on 22 August 2016."
    },
    {
      RTO :"UK05",
      name :"Gangolihat",
      district:"pithoragarh",
      img : "../images/Tourism/Gangolihat.jpg",
      firstPara:"Gangolihat is a town in the Pithoragarh district of Uttarakhand, India. It is the headquarters of an eponymous tehsil ~ one of the 12 revenue subdivisions of the Pithorarh district.It is said that here Adi Shankaracharya did penance to please Adi Shakti. Gangolihat is known for its Shakti Peeth of Haat Kalika Temple - Adi Shakti and Destroyer of Demon's.",
      secondPara:"Being situated between the Saryu Ganga and Ram Ganga rivers, the region where Gangolihat is situated was earlier called Gangavali, which got corrupted to Gangoli over the course of time.[3] Gangolihat was the primary market and main trading center of this Gangoli region. Before the thirteenth century, this region was under the rule of the Katyuri kings.Around the thirteenth century, Gangolihat came under the rule of the Mankoti kings, who had their capital at Mankot.[4][5][6][7] In Janhavi naula at Gangolihat belonging to 1264 A.D. there is a piece of stone with the names of the Gangoli kings and also records an inscription about a possible invasion of Mankot by the Delhi Sultan Nasiruddin Mahmud Shah.[8] On the piece of stone of 1352, found in the temple of Baijnath, is written that the kings of Gangoli (Hamirdeo, Lingarajdeo, Dharaldeo) built the kalash of the temple. The kingdom of Gangoli was invaded by the Chand king, Balo Kalyan Chand, in the 16th century.[3] Following its defeat, Mankot was merged into the Kumaon Kingdom. In the nineteenth century, Gangoli was made a pargana of Almora district, and the pargana headquarters were established in Gangolihat town itself."
    },
    {
      RTO :"UK05",
      name :"Dharchula",
      district:"pithoragarh",
      img : "../images/Tourism/Dharchula.jpg",
      firstPara:"Dharchula is a town in Pithoragarh district in the northern state of Uttarakhand, India, situated at an elevation of 940 m above sea level, surrounded by peaks from all sides and Kali river cutting through the middle, dividing the area into two towns on either bank of the river - one in India and the other in Nepal. River Kali originates from Kalapani and forms the border between India and Nepal. People of the two towns have similar traditions, culture, and lifestyle, and can move across the border without a passport or visa. The area has a mixture of Kumaouni and Rung language, traditions and culture. They move freely across the river as Indians and Nepalis do not need passport or visa to cross the soft border. Dharchula lies about 92 km (57 mi) north of Pithoragarh town, along the route of the Kailash-Mansarovar pilgrimage tour. It lies on the Pithoragagh-Lipulekh Pass Highway (PLPH).",
      secondPara:"Dharchula gets its name from 'Darchyo' and 'la'; Darchyo is a white coloured traditional holy flag and la is an honorific term in Runglwo.It is situated in a valley, on the banks of the Kali River. The name of the town originates from the Runglwo words for Darchyo (White colored Holy Flag erected outside every house of local community traditionally) and la (an honorific term in local language) because earlier only the darchyo / white flags were visible when seen from far away."
    },
  ])
  
  const params = useParams()
  const clicked =(cityName)=>{
    setTuoristPlaces(tuoristPlaces.filter(function(arr){
          return arr.district === cityName
    }))
  }
  useEffect(()=>{
    clicked(params.name)
    // eslint-disable-next-line
  },[])
  return (
    <>
    <div className="w-full pt-20">
    <h1 className="text-4xl capitalize font-signature text-center">Tourism Places of <span className="text-blue-800 font-bold">{params.name}</span></h1>
      {tuoristPlaces.map(({name,img,firstPara,secondPara})=>{
        return <div className="border-b-2 border-black mt-5" >
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
      })}
      
    </div>
    </>
  );
}

export default Tourism;

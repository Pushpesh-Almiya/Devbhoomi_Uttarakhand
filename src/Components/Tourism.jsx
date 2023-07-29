import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Tourism() {
  const [tuoristPlaces, setTuoristPlaces] = useState([
    {
      id: 1,
      name: "Kasar Devi",
      district: "almora",
      img: "../images/Tourism/kasarDevi.jpg",
      firstPara:
        "Kasar devi is a village near Almora, Uttarakhand. It is known forthe Kasar Devi temple, a Devi temple, dedicated to Kasar Devi, afterwhom the place is also named. The temple structure dates to the 2ndcentury CE. Swami Vivekananda visited Kasar Devi in 1890s, andnumerous western seeker, Sunyata Baba Alfred Sorensen and LamaAnagarika Govinda.",
      secondPara:
        "It's believed that this temple is positioned onthe earth's Van Allen Belt. The region surrounding the Kasar DeviTemple has an enormous geomagnetic field, thanks to gaps in bands ofradiation. As a result, Kasar Devi is endowed with a cosmic energysimilar to that of Stonehenge in UK and Machu Pichu in Peru Alsoknown as Hippie Hill or Crank's Ridge, Kasar Devi Temple complex hasalways been a melting pot of art, spiritualism and poetry. SingerBob Dylan and actor Uma Thurman, have made this popular and todayKasar Devi continues to attract folks looking for answers to life'schallenging questions. The temple hosts the annual Kasar Devi Fairon Kartik Poornima (NovemberDecember).",
    },
    {
      id: 2,
      name: "Nanda Devi",
      district: "almora",
      img: "../images/Tourism/NandaDevi.jpg",
      firstPara:
        "Nanda Devi is the second-highest mountain in India, after Kangchenjunga, and the highest located entirely within the country. (Kangchenjunga is on the border of India and Nepal.[5]) Nanda Devi is the 23rd-highest peak in the world.",
      secondPara:
        "Nanda Devi was considered the highest mountain in the world before computations in 1808 proved Dhaulagiri to be higher. It was also the highest mountain in India until 1975, when Sikkim, an independent kingdom until 1948 and a protectorate of India thereafter, became a part of the Republic of India. It is located in Chamoli district of Uttarakhand, between the Rishiganga valley on the west and the Goriganga valley on the east.The peak, whose name means 'Bliss-Giving Goddess', is regarded as the patron goddess of the Garhwal and Kumaon Himalayas. In acknowledgment of its religious significance and for the protection of its fragile ecosystem, the Government of India declared the peak as well as the circle of high mountains surrounding it—the Nanda Devi sanctuary—off-limits to both locals and climbers in 1983. The surrounding Nanda Devi National Park was declared a UNESCO World Heritage Site in 1988.",
    },
    {
      id: 3,
      name: "Chitai Golu Devta temple",
      district: "almora",
      img: "../images/Tourism/Chitai.jpg",
      firstPara:
        "Golu Devata (Kumaoni: गोलज्यू) is a deity of the Kumaoni community of India.The Chitai Golu devta temple is the most celebrated temple dedicated to the deity and is about 4 km (2.5 mi) from the main gate of Binsar wildlife sanctuary & about 10 km (6.2 mi) from Almora.",
      secondPara:
        "Golu Devata used to travel far distances on his horse and used to meet people of his kingdom, in a practice called Golu Darbar: Golu Devata used to hear the problems of the people and help them in any way possible. He had a special place for people in his heart and he was always ready to help them. Due to his complete dedication to people, he led a very simple life, following the principles of brahmacharya.Golu Devata still meets with his people and in many villages the practice of Golu darbar is still prevalent, where Golu Devata appears in front of people, listens to their problems and helps people in every way possible. In present times, the most common form of Golu Devata Darbar is Jagar.[2] Golu Devata always had a special place in his heart for his white horse, and it is believed that he still rides his white horse to travel around.He is worshipped as the god of justice and he serves it well. HIs mantra is the following: 'Jai Nyay Devta Goljyu Tumar Jai ho. Sabuk lije dain haije' (Translation: 'Hail the God of justice: Goljyu! Blessings for everyone').!",
    },
    {
      id: 4,
      name: "Jageshwar",
      district: "almora",
      img: "../images/Tourism/Jageshwar.jpg",
      firstPara:
        "Jageshwar is a Hindu pilgrimage town near Almora in Almora district of the Himalayan Indian state of Uttarakhand. It is one of the Dhams (pilgrimage region) in the Shaivism tradition. The site is protected under Indian laws, and managed by the Archaeological Survey of India (ASI). It includes Dandeshwar Temple, Chandi-ka-Temple, Jageshwar Temple, Kuber Temple, Mritunjaya Temple, Nanda Devi or Nau Durga, Nava-grah temple, a Pyramidal shrine, and Surya Temple. The site celebrates the Jageshwar Monsoon Festival during the Hindu calendar month of Shravan (overlaps with July–August) and the annual Maha Shivratri Mela (Shivratri festival), which takes place in early spring.",
      secondPara:
        "Jageshwar Temples, also referred to as Jageswar Temples or Jageshwar Valley Temples, are a group of 125 ancient Hindu temples dated between 7th and 14th century, [1] The valley has a number of temple clusters such as the Dandeshwar and Jageshwar sites. Some locations have attracted construction of new temples through the 20th-century. Together these clusters over the valley consist of over 200 structural temples built from cut stone. Many are small, while a few are substantial. They predominantly illustrate North Indian Nagara style of architecture with a few exceptions that show South and Central Indian style designs, many are dedicated to god Shiva, while others in immediate vicinity are dedicated to god Vishnu, Shakti goddesses and Surya traditions of Hinduism.There are other Hindu temples in the Himalayan region that are called Jageshwar Temple such as one in Dalash, Himachal Pradesh.[3]",
    },
    {
      id: 5,
      name: "Dunagiri",
      district: "almora",
      img: "../images/Tourism/Dunagiri.jpg",
      firstPara:
        "Dunagiri is a historic area in Almora district in the state of Uttarakhand in India. Dunagiri is known as the birthplace of modern-day Kriya Yoga due to the fact that Lahiri Mahasaya was initiated into Kriya Yoga by Mahavatar Babaji at this site.",
      secondPara:
        "Approximately 400 km (250 mi) from Delhi, a cluster of six small villages forms the place that is variously known as Dunagiri, Drongiri and Doonagiri. 116 such villages combine to form the Development Block of Dwarahat, which falls under the District of Almora. Located at a height of 8,000 feet (2,400 meters) above sea level, Dunagiri is famous within Kumaon for its temple of Shakti - known here as Dunagiri Devi.",
    },
    {
      id: 6,
      name: "Ranikhet",
      district: "almora",
      img: "../images/Tourism/Ranikhet.jpg",
      firstPara:
        "Ranikhet (Kumaoni: Rānikhèt) is a hill station and cantonment town, near Almora Town in Almora district[1] in the Indian state of Uttarakhand. It is the home of the Military Hospital, Kumaon Regiment[2] (KRC) and Naga Regiment[2] and is maintained by the Indian Army.",
      secondPara:
        "Ranikhet is at an altitude of 1,869 metres (6,132 ft) above sea level, within sight of the western peaks of the Himalayas. Ranikhet is a Class IV town with a civic status of a Cantonment board.",
    },
    {
      id: 7,
      name: "katarmal sun temple",
      district: "almora",
      img: "../images/Tourism/katarmal.jpg",
      firstPara:
        "Katarmal is a remote village located in Kumaon Division, in Almora District, Uttarakhand, India.Katarmal is located at a distance of 1.5 km from Kosi village and 12 km from the district centre, Almora[1] and 70 km from Nainital.[2] Located at a height of 2116 meters above sea level, it is well connected by road, 30 km away from Khairna, Garampani (Nainital, Haldwani, Coordinates: 29°29'39'N 79°28'46'E) & 33 km from Ranikhet and Kausani the nearest connecting point being near Kosi village.[1] The G.B. Pant Institute of Himalayan Environment and Development, established in 1988 serves as a nodal agency for research and development and was established here by Government of India.",
      secondPara: "",
    },
    {
      id: 8,
      name: "Pindari Glacier",
      district: "bageshwar",
      img: "../images/Tourism/Pindari.jpg",
      firstPara:
        "The Pindari Glacier is a glacier found in the upper reaches of the Kumaon Himalayas, to the southeast of Nanda Devi and Nanda Kot.",
      secondPara:
        "The glacier is about 9 kilometers long [1] and gives rise to the Pindar River which meets the Alakananda at Karnaprayag in the Garhwal district.The trail to reach the glacier crosses the villages of Saung, Loharkhet, crosses over the Dhakuri Pass, continues onto Khati village (the last inhabited village on the trail), Dwali, Phurkia and finally Zero Point, Pindar, the end of the trail. Though most of the trail is along the banks of the Pindari River, the river is mostly hidden until after Khati.The Pindari Glacier trail provides for a 90 km (56 mi) round-trip trek that most people find comfortable to complete in 6 days. The Pindari Glacier is also famous for other adventure sports like Ice climbing and Mountain biking.[",
    },
    {
      id: 9,
      name: "Bagnath Temple",
      district: "bageshwar",
      img: "../images/Tourism/Bagnath.jpg",
      firstPara:
        "Bagnath Temple (Kumaoni: बागनाथ थान) is an ancient shrine dedicated to Shiva, situated in the Bageshwar city at the confluence of Sarayu and Gomati rivers.[1][2] Bagnath Temple is festooned with bells of all sizes and features impressive carvings.[3] It is the most famous Temple in Bageshwar District.[4] It is flooded with devotees on the occasion of Shivratri.[5] The city of Bageshwar gets its name from this Temple",
      secondPara:
        "According to Hindu Legend, Sage Markandeya worshipped Shiva here.[12][11] Lord Shiva blessed sage Markandeya by visiting here in the form of a Tiger.Though some sources state The existence of Bagnath temple since 7th Century,[7] the present building in nagara style was built in 1450 by Chand ruler, Laxmi Chand.[6][13][14] The various statues in the temple date back from 7th century AD to 16th century AD.[15] In 1996, the Archeology department of Uttarakhand state took over the temple, following which, several inscriptions and idols from the eighth to the tenth century were sealed inside the temples. These include idols of Shiva, Ganesha, Vishnu, Chaturmukhi Shiva, Teen Mukhi Shiva, Panch Mukhi Shiva, Mahishasura Mardini, Sahasra Shivalinga, Ganesh, Karthikeya, Panchdevapath, Navagraha etc.The significance of the temple finds mention in the Skanda Purana.[15] Hindu Pilgrims file in throughout the year to worship here.[3] A water police post was opened in the premises of the temple on 19 September 2016 for patrolling and prevention of water crimes in the city.",
    },
    {
      id: 10,
      name: "Kausani ",
      district: "bageshwar",
      img: "../images/Tourism/Kausani.jpg",
      firstPara:
        "Kausani (Kumaoni: Kôsānī) is a hill station and Village situated in Bageshwar district in the state of Uttarakhand, India. It is famous for its scenic splendour and its spectacular 300 km-wide panoramic view of Himalayan peaks like Trisul, Nanda Devi and Panchchuli. Mahatma Gandhi called this place the 'Switzerland of India',[4][5] due to similarity in landscapes.",
      secondPara:
        "During Independence of India in 1947, Kausani was situated in the Almora District[6] till 15 September 1997 after which Bageshwar district was carved out of Almora district.[7] On 9 November 2000, the State of Uttarakhand was created from the Himalayan and adjoining northwestern districts of Uttar Pradesh.",
    },
    {
      id: 11,
      name: "Patal Bhuvaneshwar",
      district: "pithoragarh",
      img: "../images/Tourism/patalBhuvneshwar.jpg",
      firstPara:
        "Patal Bhuvaneshwar (Hindi पाताल भुवनेश्वर) is a limestone cave temple 14 km from Gangolihat in the Pithoragarh district of Uttarakhand state in India. It is located in the village of Bhubneshwar. Legend and folklore have it that this cave enshrines Lord Shiva and thirty three koti demigods [33 types and not crore]. The cave is 160 m long and 90 feet deep from the point of entrance. Limestone rock formations have created various spectacular stalactite and stalagmite figures of various hues and forms. This cave has a narrow tunnel-like opening which leads to a number of caves. The cave is fully electrically illuminated. Built by the flow of water, Patal Bhuvaneshwar is not just one cave, rather a series of caves within caves.",
      secondPara:
        '"He who wants to feel the presence of eternal power should come to the sacred Bhuvneshwar situated near the confluence of Ramganga, Sarayu and Gupt-Ganga." -Manaskhanda, Skanda Purana, whose 800 verses refer to Patal Bhuvaneshwar',
    },
    {
      id: 12,
      name: "Kafni Glacier",
      district: "bageshwar",
      img: "../images/Tourism/kafni.jpg",
      firstPara:
        "The Kafni Glacier is located in the upper reaches of the Kumaon Himalayas, to the southeast of Nanda Devi. The glacier gives rise to the Kafni River, which is a tributary of the Pindar River. The Pindar River is a tributary to Alaknanda River, which eventually is one of the two headstreams of the Ganges. This is relatively small glacier but a popular trekking destination along with Pindari Glacier.",
      secondPara:
        "The glacier is located in Bageshwar district. From Bageshwar town it can be approached via route of Bharadi, Saung, Loharkhet, Dhakuri Pass, Khati, Dwali and Khatiya. The route until Loharkhet is motorable, after which it is approximately a 90 km (56 mi) round trip. Khati is the last village on the route. Though Pindari is more popular tourist destination, some people find route to this glacier more beautiful. Unlike Pindari, tourists can trek up to the glacier. In case of Pindari, the trek beyond zero point becomes very tough and cannot be done without proper equipment.",
    },
    {
      id: 13,
      name: "Mussoorie",
      district: "dehradun",
      img: "../images/Tourism/Massourie.jpg",
      firstPara:
        "Mussoorie is a hill station and a municipal board, near Dehradun city in the Dehradun district of the Indian state Uttarakhand. It is about 35 kilometres (22 mi) from the state capital of Dehradun and 290 km (180 mi) north of the national capital of New Delhi. The hill station is in the foothills of the Garhwal Himalayan range. The adjoining town of Landour, which includes a military cantonment, is considered part of greater Mussoorie, as are the townships Barlowganj and Jharipani.",
      secondPara:
        "Mussoorie is at an average altitude of 2,005 metres (6,578 ft). To the northeast are the Himalayan snow ranges, and to the south, the Doon Valley and Shiwalik ranges. The second highest point is the original Lal Tibba in Landour, with a height of over 2,275 m (7,464 ft). Mussoorie is popularly known as The Queen of the Hills. In the recent years, Mussoorie has again gained popularity as an upcoming travel destination with many attractions such as Camel's back road, Dhanaulti, Lal Tibba, etc. Uttarakhand Government reported 3.02 million (30.23 Lacs) travelers to Mussoorie in 2019.",
    },
    {
      id: 14,
      name: "nainital",
      district: "nainital",
      img: "../images/Districts/Nainital.jpg",
      firstPara:
        "Nainital (Kumaoni: Naintāl; pronounced is a town and headquarters of Nainital district of Kumaon division, Uttarakhand, India. It is the judicial capital of Uttarakhand, the High Court of the state being located there and is the headquarters of an eponymous district. It also houses the Governor of Uttarakhand,who resides in the Raj Bhavan. Nainital was the summer capital[8] of the United Provinces.",
      secondPara:
        'Nainital is located in the Kumaon foothills of the outer Himalayas at a distance of 285 km (177 mi) from the state capital Dehradun and 345 km (214 mi) from New Delhi, the capital of India. Situated at an altitude of 1,938 metres (6,358 ft) above sea level, the town is set in a valley containing an eye-shaped lake, approximately two miles in circumference, and surrounded by mountains, of which the highest are Naina Peak (2,615 m (8,579 ft)) on the north, Deopatha (2,438 m (7,999 ft)) on the west, and Ayarpatha (2,278 m (7,474 ft)) on the south. From the tops of the higher peaks, "magnificent views can be obtained of the vast plain to the south, or of the mass of tangled ridges lying north, bound by the great snowy range which forms the central axis of the Himalayas."The hill station attracts tourists round the year.',
    },
    {
      id: 15,
      name: "Kainchi Dham",
      district: "nainital",
      img: "../images/Tourism/kainchi.jpg",
      firstPara:
        "A famous Hanuman temple located in the womb of Kumaon mountains is the Kainchi Dham. The place offers a perfect combination of beauty and spirituality. Surrounded by mountains and forests with a river flowing alongside, Kainchi Dham is a heaven for people who seek peace and calm.",
      secondPara:
        "The temple was established by a local and very profound saint, Neem Karoli Baba in 1960s. It is also an ashram of Neem Karoli Baba who is believed to be an incarnation of Lord Hanuman. Devotees claim to feel the divine presence of Lord Hanuman and Neem Karoli Baba at the ashram.\nThe  ashram gets its name corresponding to its location which makes a scissor-like (Kainchi in Hindi language) shape as the two hills, between which the ashram is located, cut and cross each other. Neem Karoli Baba took samadhi in the year 1973, and since then is considered as the incarnation of Lord Hanuman.",
    },
    {
      id: 16,
      name: "Mukteshwar",
      district: "nainital",
      img: "../images/Tourism/Mukteshwar.jpg",
      firstPara:
        "Mukteshwar is a village and tourist destination in the Nainital district of Uttarakhand, India. It sits high in the Kumaon Hills at an altitude of 2171[1] meters (7500 feet), 51 km from Nainital, 72 km from Haldwani, and 343 km from Delhi.",
      secondPara:
        "Mukteshwar gets its name from a 350-year-old temple of Shiva, known as Mukteshwar Dham,[2] situated atop the highest point in the town, on the veterinary institute's campus. Close to it lie the overhanging cliffs, locally known as Chauli-ki-Jali,[3] used for rock climbing and rappelling, with an excellent view of the valleys below. Mukteshwar is famous for its breezy waterfalls such as The Bhalu Ghaad, Tarikhet waterfalls, Rudradhari waterfall and Dhokaney waterfall. The sunrise point is at the government-run PWD guest house. Another tourist attraction is the small Satoli Village, situated just 21 km from Mukteshwar. One can also visit the Indian Veterinary Research Institute (IVRI). Mukteshwar is the abode of a saint — Shri Mukteshwar Maharaj ji — who lived at the Top Cottage Temple where his samadhi is. One of his disciples, Swami Sanshudhanand Ji, now stays there.",
    },
    {
      id: 17,
      name: "Munsiari",
      district: "pithoragarh",
      img: "../images/Tourism/Munsyari.jpg",
      firstPara:
        "Munsiyari (Kumaoni: Munsyār) is the name of the sub-division headquarters, a conglomeration of revenue villages and it also refers to the entire region as Munsiyari Tehsil and Sub Division in the Pithoragarh District in the hill-state of Uttarakhand, India.It is a hill station and lies at the base of the great Himalayan mountain range, at an elevation of about 2,200 m (7,200 ft)[1] and is a starting point of various treks into the interior of the range.",
      secondPara:
        "During a summer festival organized in Munsiyari market in 2013, a proposal for granting Munsiyari the status of Nagar Panchayat (lower level Municipality) was passed by the locals.[2] Gram Panchayats attached to the Munsiyari market had also given their consent for this.[2] On 28 February 2014, the Uttarakhand Cabinet decided to grant Nagar Panchayat status to the towns of Munsiyari, Chaukhutia and Naugaon.[3] Shortly afterwards, the then Chief Minister Harish Rawat made an announcement confirming this move while on a visit to the town.[4] The municipal area was to be created by incorporating 5 Gram Panchayats: Mallaghorpatta, Tallaghorpatta, Bunga, Sarmoli and Jainti.[4] An official notification was issued on 7 October 2014, but due to major opposition by the Gram Sabhas, the Nagar Panchayat could not come into existence.[5] In June 2015, several government officials visited the area and tried to initiate talks with local villagers.[6] After all the talks failed, the notification that allowed the formation of Nagar Panchayat was revoked on 22 August 2016.",
    },
    {
      id: 18,
      name: "Gangolihat",
      district: "pithoragarh",
      img: "../images/Tourism/Gangolihat.jpg",
      firstPara:
        "Gangolihat is a town in the Pithoragarh district of Uttarakhand, India. It is the headquarters of an eponymous tehsil ~ one of the 12 revenue subdivisions of the Pithorarh district.It is said that here Adi Shankaracharya did penance to please Adi Shakti. Gangolihat is known for its Shakti Peeth of Haat Kalika Temple - Adi Shakti and Destroyer of Demon's.",
      secondPara:
        "Being situated between the Saryu Ganga and Ram Ganga rivers, the region where Gangolihat is situated was earlier called Gangavali, which got corrupted to Gangoli over the course of time.[3] Gangolihat was the primary market and main trading center of this Gangoli region. Before the thirteenth century, this region was under the rule of the Katyuri kings.Around the thirteenth century, Gangolihat came under the rule of the Mankoti kings, who had their capital at Mankot.[4][5][6][7] In Janhavi naula at Gangolihat belonging to 1264 A.D. there is a piece of stone with the names of the Gangoli kings and also records an inscription about a possible invasion of Mankot by the Delhi Sultan Nasiruddin Mahmud Shah.[8] On the piece of stone of 1352, found in the temple of Baijnath, is written that the kings of Gangoli (Hamirdeo, Lingarajdeo, Dharaldeo) built the kalash of the temple. The kingdom of Gangoli was invaded by the Chand king, Balo Kalyan Chand, in the 16th century.[3] Following its defeat, Mankot was merged into the Kumaon Kingdom. In the nineteenth century, Gangoli was made a pargana of Almora district, and the pargana headquarters were established in Gangolihat town itself.",
    },
    {
      id: 19,
      name: "Dharchula",
      district: "pithoragarh",
      img: "../images/Tourism/Dharchula.jpg",
      firstPara:
        "Dharchula is a town in Pithoragarh district in the northern state of Uttarakhand, India, situated at an elevation of 940 m above sea level, surrounded by peaks from all sides and Kali river cutting through the middle, dividing the area into two towns on either bank of the river - one in India and the other in Nepal. River Kali originates from Kalapani and forms the border between India and Nepal. People of the two towns have similar traditions, culture, and lifestyle, and can move across the border without a passport or visa. The area has a mixture of Kumaouni and Rung language, traditions and culture. They move freely across the river as Indians and Nepalis do not need passport or visa to cross the soft border. Dharchula lies about 92 km (57 mi) north of Pithoragarh town, along the route of the Kailash-Mansarovar pilgrimage tour. It lies on the Pithoragagh-Lipulekh Pass Highway (PLPH).",
      secondPara:
        "Dharchula gets its name from 'Darchyo' and 'la'; Darchyo is a white coloured traditional holy flag and la is an honorific term in Runglwo.It is situated in a valley, on the banks of the Kali River. The name of the town originates from the Runglwo words for Darchyo (White colored Holy Flag erected outside every house of local community traditionally) and la (an honorific term in local language) because earlier only the darchyo / white flags were visible when seen from far away.",
    },
    {
      id: 20,
      name: "Reetha Sahib",
      district: "champawat",
      img: "../images/Tourism/Dharchula.jpg",
      firstPara:
        "Gurudwara Reetha Sahib is situated in Champawat district, Uttarakhand, India. It is 16 hours journey away from Chandigarh (581 km) approx. This gurudwara holds a very sacred place in Sikh Religion as Guru Nanak Dev himself had visited this place with Bhai Mardana.",
      secondPara:
        "Gurdwara Meetha Reetha Sahib was constructed around year 1960 and is situated near the village Deyuri in Uttrakhand. Guru Nanak Dev Ji visited this place with Bhai Mardana Ji. There were Jogis sitting under the reetha (soapnut) trees. Guru Nanak Dev ji sat under a reetha tree and asked Bhai Mardana Ji to eat a reetha. Reethas are usually bitter in taste but the reetha which Guru Nanak Dev Ji plucked for Bhai Mardana Ji was sweet. Jogis were surprised by all this and later they come to know that on which side Guru Nanak Dev Ji was sitting all the reethas has become sweet. These trees are still there in the Gurudwara and the reethas are still said to be sweet in taste. This is the reason why this place is called Meetha Reetha Sahib. Even today the people who visits the Gurudwara gets sweet reethas (soapnuts) as prashad. Due to its religious background this place is considered as a holy place for Sikhs. The temple of Devnath is also located beside the Gurudwara. On Baisakhi purnima, Sikh fair is held in this Gurudwara as this place is very sacred. Gurudwara's first caretaker was Lala Baisakhi Ram from Haldwani.",
    },
    {
      id: 21,
      name: "Golu devta temple",
      district: "champawat",
      img: "../images/Tourism/Dharchula.jpg",
      firstPara:
        "Gwal Devta Temple  or  Golu Devta is a dedicated Golu Devta (also known Gorilor Gollas) who is considered the most revered local deity in the Kumaon region. Golu Devta is revered by the devotees the God of Justice. The temple is located in the Champawat town in the name sake district of Uttarakhand. Large numbers of devotees’ visit the temple to seek the deity’s blessing in their life.",
      secondPara:
        "Golu Devata is considered to be an incarnation of Gaur Bhairav (Shiva), and is worshipped all over the region. He is regarded as the dispenser of justice by the devotees with extreme faith.Historically, he is considered as the brave son of king Jhal Rai and his wife Kalinka, and a general of Katyuri king. His grandfather was Hal Rai and great-grandfather was Hal Rai. Historically Champawat is considered as the origin of Golu Devata. His mother Kalinka is believed to be the sister of two other local deities: Harishchand Devjyun (the divine spirit of Raja Harish of the Chands) and Sem Devjyun. Both deities are also regarded as Lord Golu's uncles.Tales about his birth differ from place to place, the most popular story about Golu talks of a local king who, while hunting, sent his servants to look for water. The servants disturbed a woman who was praying. The woman, in a fit of anger, taunted the king that he could not separate two fighting bulls and proceeded to do so herself. The king was very impressed by this deed and he married the lady. When this queen gave birth to a son, the other queens, who were jealous of her, replaced the boy for a stone, put him in a cage and cast it into the river. The child was brought up by a fisherman. When the boy grew up he took a wooden horse to the river and on being questioned by the queens, he replied that if women can give birth to stone, then wooden horses can drink water. When the king heard about this, he punished the guilty queens and crowned the boy, who went on to be known as Golu devta.",
    },
    {
      id: 22,
      name: "Gurudwara Nanakmatta Sahib",
      district: "udham singh nagar",
      img: "../images/Tourism/Dharchula.jpg",
      firstPara:
        "Nanakmatta is a historical town named after the Sikh pilgrimage site, Gurdwara Nanak Mata Sahib, in the state of Uttarakhand in India. Sikh tradition records that the site was once called Gorakhmata, a centre of Siddh-jogis named after the founder of their order, Gorakhnath, at the distance of 30 miles from Reetha sahib. In the Siddh-Gost in Guru Granth Sahib, the story of Guru Nanak on his first udasi is told, wherein he had a long discourse with siddhas on matters of religion and metaphysics. Tradition says that the place was renamed Nanakmatta to perpetuate the memory of Guru's visit.[1] The town is associated with Guru Nanak Dev and Guru Hargobind. It is situated on the bank of Deoha stream, which has since been dammed into a reservoir named Nanak Sagar. The Gurudwara is located 15 kilometres west of Khatima Railway Station on road to Tanakpur. The holy shrine is near the town of Sitarganj.[2] It is one of three Sikh Holy places in the state, with others being Gurdwara Hemkunt Sahib and Gurudwara Reetha Sahib.",
      secondPara:
        "",
    },
    {
      id: 23,
      name: "Nanak sagar dam",
      district: "udham singh nagar",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Nanak Sagar is an artificial lake created by a dam built on the Deoha river. It is located in Nanakmatta, one of the religious places of the Sikhs. Nanakmatta is the seat of one of the most important Sikh shrines, Gurudwara Sri Nanakmatta Sahib, which is closely associated with Guru Nanak. The vast Nanak Lake mirrors a plethora of hues of the changing sky. The lake is home to hundreds of avifauna, including the migratory kind. Birders can have an excellent time here.",
      secondPara:
        "",
    },
    {
      id: 24,
      name: "Pilibhit Tiger Reserve",
      district: "udham singh nagar",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Pilibhit Tiger Reserve is located in Pilibhit district of Uttar Pradesh and was notified as a tiger reserve in 2014. It forms part of the Terai Arc Landscape in the upper Gangetic Plain along the India-Nepal border. The habitat is characterized by sal forests, tall grasslands and swamp maintained by periodic flooding from rivers. The Sharda Sagar Dam extending up to a length of 22 km (14 mi) is on the boundary of the reserve.[2]",
      secondPara:
        "Pilibhit is one of the few well-forested districts in Uttar Pradesh. According to an estimate of the year 2018, Pilibhit district has over 800 km2 (310 sq mi) forests, constituting roughly 23% of the district’s total area. Forests in Pilibhit have at least 65 tiger and a prey including five species of deer. The tiger reserve got the first International award TX2 for doubling the tiger population in a stipulated time.",
    },
    {
      id: 25,
      name: "Baur dam",
      district: "udham singh nagar",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "The Baur Dam is an earthen embankment dam, built on Baur and Kakrala rivers in Udham Singh Nagar District of uttarakhand. River Ganga is the basin area of this dam. The dam has a maximum height of 17.98 metres and length of 9.50 Kilometres.This is an irrigation dam and water of this dam irrigates Tarai area of Uttarakhand & areas of Rampur District of U.P. The nearest cities from this dam are Nainital, Haldwani, Rudrapur and Kashipur",
      secondPara:
        "",
    },
    {
      id: 26,
      name: "Purnagiri",
      district: "udham singh nagar",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Purnagiri Temple is located at an altitude of 5500 feet on Annapurna peak in Tanakpur city of Uttarakhand province of India . It is one of the 108 Siddha Peethas. This place is considered to be the back of Mahakali. It is said that the part of the navel of Sati, the daughter of Daksha Prajapati and the better half of Shiva, fell from the Vishnu Chakra here. Every year faithful devotees come here to visit this Shakti Peeth even after suffering.",
      secondPara:
        "Legend has it that Parvati ( Sati ), the daughter of Daksha Prajapati , sacrificed herself by jumping into the Yagya Kund organized by Daksha Prajapati in protest against the insult of her husband Mahadev. Lord Vishnu cut Sati Parvati's body into 51 pieces (according to Shiva Purana) to pacify Mahadev's anger with his chakra. A Shakti Peeth was established there. In this sequence, the navel of Sati Parvati had fallen at the place of Purnagiri Shakti Peeth .This place is situated at a distance of 95 km from Champawat and only 25 km from Tanakpur. This Devi Darbar is counted among the 51 Shaktipeeths of India.is done in According to Rudra Samhita in Shivpuran, Dasa Prajapati's daughter Sati was married to Lord Shiva. Once upon a time, a Yagya was organized by Daksha Prajapati in which all the deities were invited but they were not invited with a view to insult Shiv Shankar. Due to Sati not tolerating the insult of her husband Lord Shiva Shankar, her body was sacrificed in the Yagya Mandap. Lord Shiva Shankar started roaming in the sky with the burnt body of Sati. Lord Vishnu, seeing Shiva Shankar's Tandav dance, separated the body parts of Sati with a view to pacify him. Wherever the parts of Sati fell, Shanti Peeths were established. Mahakali in Kolkata due to falling of hair, Brijeshwari due to fall of breast in Nagarkot, Himachal, Jwala Devi due to falling of tongue in Jwalamukhi in Himachal. Mansa Devi due to fall of front part of brain near Panchkula in Haryana, Bhadrakali due to fall of ankle in Kurukshetra, Shakambhari Devi due to fall of head on Shivalik mountain near Saharanpur, Mata Hinglaj Bhavani due to fall of Brahmarandhra near Karachi, steps in Himachal itself. Chintpurni due to falling of a part of it, Kamakhya Devi due to falling of Kokh in Assam, Naina Devi in ​​Himachal due to falling of eyes etc. became Shaktipeeths. Sati's navel part fell in Purnagiri, where the navel of the goddess is worshiped and worshipped. Due to falling of eyes in Naina Devi of Himachal, Naina Devi etc. became Shaktipeeths. Sati's navel part fell in Purnagiri, where the navel of the goddess is worshiped and worshipped. Due to falling of eyes in Naina Devi of Himachal, Naina Devi etc. became Shaktipeeths. Sati's navel part fell in Purnagiri, where the navel of the goddess is worshiped and worshipped.",
    },
    {
      id: 27,
      name: "Tiffin top",
      district: "nainital",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "A romantic Gem in the crown on Nainital city is the Tiffin Top, also known as Dorothy's Seat. This famous attraction is a hilltop which offers the most splendid 360-degree view of Nainital city and surrounding Kumaon mountains.Located 2290 m above sea level, this hilltop is a photographer's heaven and a perfect spot for a family picnic. As a matter of fact, the name Tiffin Top was kept after people started taking their tiffin and lunch boxes to this hilltop to enjoy a family picnic.One of the most sought after places to visit in Nainital, the Tiffin top is located on the Ayarpatta hills surrounding Nainital city. It is a terraced hilltop that welcomes a lot of tourists. You can find professional photographers capturing the beauty that this hilltop offers.",
      secondPara:
        "The Tiffin Top is alternately called Dorothy’s seat. Mrs. Dorothy Kellet was the wife of a British Army Officer, Col J.P. Kellet. Col Kellet built this stone bench in memory of his wife who was killed in a plane crash when she had gone to see their children. This hilltop resembles the love and dedication of a husband towards his wife.Hiking and trekking are two activities that Tiffin top is famous for. Since it is only 4 km away from the Nainital city, the easy trek uphill is a big attraction amongst trek enthusiasts. People come in groups to enjoy the trek and live the beauty this place offers.",
    },
    {
      id: 28,
      name: "Naina Devi Temple",
      district: "nainital",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "In Nainital , the Naina Devi Temple is situated on the northern bank of Naini Lake . This temple was destroyed by a landslide in 1880. Later it was rebuilt. The Shakti form of Sati is worshiped here. The temple has two eyes which represent Naina Devi. It is believed about Naini Lake that when Shiva was going to Mount Kailash with the dead body of Sati, Shaktipeeths were established wherever his body parts fell. The eyes of Goddess Sati had fallen at the place of Naini Lake. Inspired by this, this temple has been established.",
      secondPara:
        "According to legend, Sati , the daughter of Daksha Prajapati, was married to Shiva . Daksh Prajapati did not like Shiva, but he could not avoid the request of the gods, so he married his daughter to Shiva even against her will. Once Daksha Prajapati invited all the deities to his place for a yagya, but did not even invite his son-in-law Shiva and daughter Uma. Uma stubbornly reached this yagya. when he went to HaridwarWhen she saw all the deities being respected and her husband and herself being disrespected in her father's yagya at Kankhal, she became very sad. She jumped into the sacrificial fire saying that 'I will make Shiva my husband in the next life also. As a result of the disrespect you have shown to me and my husband, I burn myself in the sacrificial fire of the yagya and make your yagya unsuccessful.' When Shiva came to know that Uma had become Sati, So there was no limit to his anger. He destroyed and corrupted the yagya of Daksh Prajapati through his ganas. Seeing this fierce form of Shiva, all the gods and goddesses started thinking that Shiva should not cause annihilation. That's why the deities prayed to Mahadev Shiva and pacified their anger. Daksh Prajapati also apologized. Shiva blessed him too. But seeing the burnt body of Sati, his disinterest was overflowing. He started traveling in the sky by putting the burnt body of Sati on his shoulder. In such a situation where - where the body parts are cut, there - thereShakti Peeth has become. Where Sati's eyes fell; At the same time, Uma i.e. Nanda Devi became a grand place in the form of Naina Devi . Today's Nainital is the same place where the eyes of that goddess fell. The tears of the eyes took the form of a rhythm here. Since then, Shiv's wife Nanda (Parvati) is continuously worshiped here in the form of Nainadevi.",
    },
    {
      id: 29,
      name: "bhimtal",
      district: "nainital",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Bhimtal (Kumaoni: Bhīmtāl) is a town and a nagar panchayat, near Nainital city in Nainital district in the state of Uttarakhand, India. It is situated at an altitude of 1370 meters above sea level and is about 22 kilometers from Nainital. The major attraction in Bhimtal is the Bhimtal Lake, which has an island at its centre. Besides tourism, Bhimtal has also now become a mini district headquarters since most of the district administration offices have shifted to the newly constructed Vikas Bhawan, the building complex for district administrative offices.",
      secondPara:
        "Bhimtal is an ancient place named after Bhima of Mahabharata. Bhimeshwara Mahadev Temple, an old Shiva temple on the bank of Bhimtal lake, is believed to have been built when Bhima visited the place during the banishment (vanvas) period of Pandavas. The present temple was built in the 17th century, by Baz Bahadur (1638-78 AD), a King of the Chand dynasty, and the Raja of Kumaon.Archived 2008-06-18 at the Wayback Machine British Library.6).Bhimtal is older than nearby Nainital as the city of Nainital is just 150-160 years old. Bhimtal was a stoppage onroute on the old pedestrian road, which connects nearby Kathgodam to all Kumaon region and even to Nepal and Tibet. It might have been the part of the famous ancient silk route.",
    },
    {
      id: 30,
      name: "Chaukori",
      district: "pithoragarh",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Chaukori is a hill station in the Pithoragarh district set among the lofty peaks of the western Himalayan Range in the Kumaon Division of Uttarakhand, India. To its north is Tibet and to its south is Terai. The Mahakali River, running along its eastern boundary, forms the Indo-Nepal international border. This place has become a prominent tourist place and from here a wide and picturesque view of Himalayan range can be viewed. The golden yellow colour of sun rays falling on the Himalayan range in the morning time is really worth seeing. There are cottages available here where one can stay and enjoy the serene surroundings. Tourists coming to this place generally also visit the nearby tourist places like Patal Bhuvaneshwar, Kausani, Bageshwar and Almora.",
      secondPara:
        "Chaukori is located in Berinag Tehsil of Pithoragarh district in Uttarakhand, India.[3] It is situated 10km away from sub-district headquarter Berinag[4] and 86km away from district headquarter Pithoragarh.[1] Chaukori's elevation is 2010 m with spectacular panoramic views of the snowy peaks of Nanda Devi, Nanda Kot and the Panchchuli group.",
    },
    {
      id: 31,
      name: "Jauljibi",
      district: "pithoragarh",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Jauljibi is a small township and market place in Pithoragarh district in Kumaon division of Uttarakhand state , India . Here there is a confluence of Kali and Gori rivers. It is situated on the border of Nepal and its Mahakali region also has some part of Jauljibi. The markets on both sides are connected by a suspension bridge",
      secondPara:
        "Jauljibi is the small bazaar of Indo-Nepal border (Mahakali Zone) situated at the confluences of Kali and Gori Rivers. The name refers to bazaars on both sides of the river, with the Nepal-side bazaar being rather small compared to that on the Indian side. A suspension bridge on the Kali has joined the bazaars and the people of both countries for many years. The town is famous for its annual trade fair, popularly known as Jauljibi Mela. Thousands of people throng to Mela from the neighboring villages and districts.",
    },
    {
      id: 32,
      name: "Om Parvat",
      district: "pithoragarh",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Om Parvat a mountain located in Pithoragarh district, Uttarakhand, India[2][3] Om Parvat peak elevation is 5,590 m (18,340 ft) above sea level.[4] It is reached by the paved motorable Pithoragagh-Lipulekh Pass Highway (PLPH) NH-9 along Kali River (Sharda River), via a spur along glaciated rivulet to Om Parvat from Nabhidhang. Route to Adi Kailash, from the forks at Gunji, goes northwest via Kuthi Valley along the Kuthi Yankti river. Mount Kailash in Tibet can be viewed from India from the Old Lipulekh Pass which lies northeast of Gunji (via NH-9 motorable till the pass) and the Limpiyadhura Pass (via Kuthi Valley) which lies northwest of Gunji.",
      secondPara:
        "The Om Parvat and the Adi Kailash and are not one and the same,[5] although there may be confusion in some sources. NH-9 extension from Pithoragarh goes to Gunji (Dame La). Gunji is the confluence of NW-S flowing Kuthi Yankti river and NE-S flowing Kali River. Kuthi Yankti river arises from the Limpiyadhura Pass northwest of Gunji and flows through Kuthi Valley to Gunji in south. The Kali River arises from the Lipulekh Pass northeast of Gunji and flows by the KMVN Huts (Kumaon Mandal Vikas Nigam resort) at Nabhidhang (a fork route from Nabhidhang goes southeast along the glaciated rivulet to Om Parvat), ITBP Base Camp, Indian Forest Police Checkpost to Gunji.",
    },
    {
      id: 33,
      name: "Berinag",
      district: "pithoragarh",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Berinag is a hill station, located 124 km from Pithoragarh city in the Pithoragarh district, which is the easternmost Himalayan district in the state of Uttarakhand, India. It is one of the six Administrative Subdivisions (tehsil) of Pithoragarh district.[1] National Highway 309A passes through Berinag. Closest prominent villages include Garawon, Dhanoli, Bana, Bhattigaon, Banoli, Quarali, Tripuradevi and Sangarh.",
      secondPara:
        "Berinag gets its name from the Berinag Temple[2] (called as ‘Bedinag’ locally), which is a Nāg Devta Temple situated at the top of Berinag Hill. Berinag is among the many temples devoted to Nāgas namely Dhaulinag (Dhavalnag), Kalinag (Kaliyanag), Feninag (Faninag), Bashukinag (Vasukinag), Pinglenag and Harinag. Berinag offers a panoramic view of the Greater Himalayas, from Garhwal Himalayas to the Nepal ranges, especially lofty peaks like Panchachuli and Nanda Devi. The region is famous for tea estates developed during the British rule. The Berinag tea grown here was a highly sought-after tea in London tea.",
    },
    {
      id: 34,
      name: "Dol Ashram ",
      district: "almora",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Shri Kalyanika Himalaya Devasthanam, popularly known as the Dol Ashram is a peaceful ashram in the quaint village of Kanara (Dol), located in the Almora district of Uttarakhand. Dol Ashram is surrounded by dense forests and rests calmly at its center.",
      secondPara:
        "Dol Ashram is built for yoga and meditation purposes and the atmosphere of the ashram makes it an ideal location for practicing the elements of a spiritual life. At Dol Ashram, you can learn Vedic methodology which is an integral aspect for living a balanced and healthy life. Dol Ashram welcomes everyone who want to learn about spirituality, yoga, and meditation.",
    },
    {
      id: 35,
      name: "Dhakuri Pass ",
      district: "bageshwar",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Dhakuri is one of the most popular destinations for the snow and mountain lovers, the place is covered with the snow in the peak. A short trek from the campsite to Dhakuri-Khal offers even better views of the mountains, especially at sunrise. ",
      secondPara:
        "Dhakuri hill station is nestled in Bageshwar district, Uttarakhand. Dhakuri is encircled by mesmerizing vistas of nature. It is the portal to the Kumaon region’s majestic valleys, namely Pindari and Sunderdhunga. The verdant grass, stunning meadows, the dense forests of horse-chestnut and oak trees, the mountains blanketed with snow, the chilling wind, everything in Dhakuri is a surreal experience of nature.",
    },
    {
      id: 36,
      name: "Maiktoli",
      district: "bageshwar",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Maiktoli is a mountain of Kumaun Himalayas located in the Bageshwar district of Uttarakhand state in India. It stands at 6,803 metres (22,320 ft). It is jointly the 32nd highest located entirely within the uttrakhand India. Nanda Devi is the highest mountain in this category. Maiktoli is 479th highest peak in the world.[3] It is located at the southern rim of Nanda Devi Sanctuary. Maiktoli is located just south east of Devtoli (6,788 metres (22,270 ft)) and south east of Trisul (7,120 metres (23,360 ft)). On the north east side lies Nanda Devi (7,816 metres (25,643 ft)) and Panwali Dwar (6,663 metres (21,860 ft)). On the south west side lies Tharkot (6,099 metres (20,010 ft))",
      secondPara:
        "It is surrounded by glaciers with Dakshini Rishi Glacier on the northern side and Sundardunga Glacier on the southern side. Pindari River emerges from southern side of Maiktoli while on the northern side is Rishi Ganga. Rishi Ganga met with Dhauli Ganga near lata. Later Dhauli ganga met with Alaknanda at Vishnu Pryag. Pindari river also met with Alaknanda at Karan Pryag. Alaknanda river is one of the main tributaries of Ganga.",
    },
    {
      id: 37,
      name: "Namik Glacier",
      district: "bageshwar",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "The glacier is situated on the Kumaon Himalayas at an altitude of 3,600 m (11,800 ft).[1] This glacier is the source of the Ramganga River.[2] The glacier is surrounded by the following peaks: Nanda Devi 7,848 metres (25,748 ft), Nanda Kot 6,861 metres (22,510 ft), and Trishuli 7,120 metres (23,360 ft). The glacier falls on ancient Indo-Tibet trade route. It is 23 km (14 mi) trekking from Liti and situated at the villages of Gogina and Namik.[3] There are a number of waterfalls and sulphur springs originating around this glacier. The glacier can be reached by trekking from gogina on the sama liti Road near. It is 63 kilometres (39 mi) from Bageshwar. Jeeps can be hired from Bageshwar or Kapkot up to Gogina.[3] 'Namik' means a place where saline water springs are present.",
      secondPara:
        "",
    },
    {
      id: 38,
      name: "Mount Abbott",
      district: "champawat",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Mount Abbott is a mountain in India . [2] It is located in the Champawat district and state of the State of Uttarakhand , in the northern part of the country, 290 km east of New Delhi , the capital of the country. Abbott Mount is 2,111 meters above sea level, [say 2] or 406 meters above the surrounding terrain [say 3] . Its foothills are about 14.5 kilometers wide.",
      secondPara:
        "The land around Abbott Mount is mountainous in the north, but in the south it is hilly. [narrative 5] The highest area in the area has a height of 2,468 meters and is 13.8 km northeast of Abbott Mount. [narrative 6] There are about 134 people per square kilometer around Abbott Mount, quite densely populated. [3] The nearest larger town is Lohaghāt , 3.1 km south of Abbott Mount. Abbott Mount is almost covered in mixed forest .",
    },
    {
      id: 39,
      name: "Baleshwar Temple",
      district: "champawat",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Baleshwar Temple is an ancient temple dedicated to Shiva, situated within city of Champawat in Uttarakhand, India.Built by the rulers of the Chand dynasty, Baleshwar Temple is a marvelous symbol of stone carving. It is believed to have been built in 13th century AD (1390 AD) by Garud Gyan Chand. Uday Chand started reconstruction work for this temple between 1420 and 1421 AD. Hari Chand, who reigned from 1423 AD to 1427 AD, completed the reconstruction work on the temple as per a copperplate inscription (dated 1423 AD) at the temple.",
      secondPara:
        "The main Baleshwar temple is dedicated to Shiva (who is also known as Baleshwar). There are two other temples in the compound of Baleshwar, one dedicated to Ratneshwar and other to Champawati Durga. Close to the Baleshwar Temple is a \"Naula\" (freshwater resource). On the day of Mahashivratri, a very crowded fair is held in the Baleshwar Temple compound. The exteriors of Ratneshwar and Champawati Durga temples are carved with the different posters of the local deities.",
    },
    {
      id: 40,
      name: "Banasur Ka Kila",
      district: "champawat",
      img: "../images/Districts/US-Nagar.jpg",
      firstPara:
        "Built by the rulers of the Chand dynasty, Baleshwar Temple is a marvelous symbol of stone carving. It is believed to have been built in 13th century AD (1390 AD) by Garud Gyan Chand. Uday Chand started reconstruction work for this temple between 1420 and 1421 AD. Hari Chand, who reigned from 1423 AD to 1427 AD, completed the reconstruction work on the temple as per a copperplate inscription (dated 1423 AD) at the temple.",
      secondPara:
        "Upon reaching, the travelers are required to do an easy gradient of 2 km will lead to Banasur Ka Kila. The lovers of ancient Indian architecture must visit this spectacular fort, which has been standing tall since ages.",
    },
  ]);

  const params = useParams();
  const clicked = (cityName) => {
    setTuoristPlaces(
      tuoristPlaces.filter(function (arr) {
        return arr.district === cityName;
      })
    );
  };
  useEffect(() => {
    clicked(params.name);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="w-full pt-20">
        <h1 className="text-4xl capitalize font-signature text-center">
          Tourism Places of{" "}
          <span className="text-blue-800 font-bold">{params.name}</span>
        </h1>
        {tuoristPlaces.map(({ name, img, firstPara, secondPara }) => {
          return (
            <div className="border-b-2 border-black mt-5">
              <h1 className="text-center text-4xl capitalize font-arial">
                {name}
              </h1>
              <div className="w-full md:flex">
                <div className=" flex flex-col justify-center items-center w-full md:w-1/3">
                  <img
                    src={img}
                    alt=""
                    className="rounded p-5 mx-auto w-full"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center w-full md:w-3/4">
                  <p className="px-1 py-2">{firstPara}</p>
                  <p className="px-1 py-2">{secondPara}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tourism;

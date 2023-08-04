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
        "At a distance of 500 m from Almora Bus Stand, Nanda Devi Temple is situated above the Mall Road in Almora. It is one of the most famous and sacred temples in the Kumaon region of Uttarakhand. The temple is dedicated to Goddess Nanda Devi, the patron goddess of the Chand Dynasty. She is believed to be the destroyer of evil. Nanda Devi temple dates back to 11th century and is built in Kumaoni-style architecture within the premises of a Shiva temple. The idol of the goddess Nanda is a huge monument with a stone crown encircled by a wooden roof. The surrounding walls are graced by intricate stone carvings of several life size statues.",
      secondPara:
        "Nanda Devi temple is quite famous not just in Kumauni people but whole of Uttarakhand. There are numerous temples of Nanda Devi in Kumaon hills and the hills of far-western Nepal dedicated to goddess Parvati as the daughter of Himalayas. The temple is most famous for the Nanda Devi Fair that is hosted every year in the month of September. Tourists from different parts of the country travel to Almora to participate in this 5 day festival, which is accompanied with drum beats and energetic dances. Two images of Nanda and Sunanda are made with banana trunk. The fair starts on Nag Panchami according to Hindu Calendar, on Sasthi the priests mark Kadli trees and then a red and white cloth is tied around it, on the Saptami midst the sound of different instruments they are cut, prior to which a goat is slaughtered for the Bali. On Ashtami the two idols are revered and the Bali is performed before them, on Navami a procession is taken out in and around Almora. The day is marked with several cultural activities taking place.",
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
      img: "../images/Tourism/ReethaSahib.jpg",
      firstPara:
        "Gurudwara Reetha Sahib is situated in Champawat district, Uttarakhand, India. It is 16 hours journey away from Chandigarh (581 km) approx. This gurudwara holds a very sacred place in Sikh Religion as Guru Nanak Dev himself had visited this place with Bhai Mardana.",
      secondPara:
        "Gurdwara Meetha Reetha Sahib was constructed around year 1960 and is situated near the village Deyuri in Uttrakhand. Guru Nanak Dev Ji visited this place with Bhai Mardana Ji. There were Jogis sitting under the reetha (soapnut) trees. Guru Nanak Dev ji sat under a reetha tree and asked Bhai Mardana Ji to eat a reetha. Reethas are usually bitter in taste but the reetha which Guru Nanak Dev Ji plucked for Bhai Mardana Ji was sweet. Jogis were surprised by all this and later they come to know that on which side Guru Nanak Dev Ji was sitting all the reethas has become sweet. These trees are still there in the Gurudwara and the reethas are still said to be sweet in taste. This is the reason why this place is called Meetha Reetha Sahib. Even today the people who visits the Gurudwara gets sweet reethas (soapnuts) as prashad. Due to its religious background this place is considered as a holy place for Sikhs. The temple of Devnath is also located beside the Gurudwara. On Baisakhi purnima, Sikh fair is held in this Gurudwara as this place is very sacred. Gurudwara's first caretaker was Lala Baisakhi Ram from Haldwani.",
    },
    {
      id: 21,
      name: "Golu devta temple",
      district: "champawat",
      img: "../images/Tourism/GoluDevta.jpg",
      firstPara:
        "Gwal Devta Temple  or  Golu Devta is a dedicated Golu Devta (also known Gorilor Gollas) who is considered the most revered local deity in the Kumaon region. Golu Devta is revered by the devotees the God of Justice. The temple is located in the Champawat town in the name sake district of Uttarakhand. Large numbers of devotees’ visit the temple to seek the deity’s blessing in their life.",
      secondPara:
        "Golu Devata is considered to be an incarnation of Gaur Bhairav (Shiva), and is worshipped all over the region. He is regarded as the dispenser of justice by the devotees with extreme faith.Historically, he is considered as the brave son of king Jhal Rai and his wife Kalinka, and a general of Katyuri king. His grandfather was Hal Rai and great-grandfather was Hal Rai. Historically Champawat is considered as the origin of Golu Devata. His mother Kalinka is believed to be the sister of two other local deities: Harishchand Devjyun (the divine spirit of Raja Harish of the Chands) and Sem Devjyun. Both deities are also regarded as Lord Golu's uncles.Tales about his birth differ from place to place, the most popular story about Golu talks of a local king who, while hunting, sent his servants to look for water. The servants disturbed a woman who was praying. The woman, in a fit of anger, taunted the king that he could not separate two fighting bulls and proceeded to do so herself. The king was very impressed by this deed and he married the lady. When this queen gave birth to a son, the other queens, who were jealous of her, replaced the boy for a stone, put him in a cage and cast it into the river. The child was brought up by a fisherman. When the boy grew up he took a wooden horse to the river and on being questioned by the queens, he replied that if women can give birth to stone, then wooden horses can drink water. When the king heard about this, he punished the guilty queens and crowned the boy, who went on to be known as Golu devta.",
    },
    {
      id: 22,
      name: "Gurudwara Nanakmatta Sahib",
      district: "udham singh nagar",
      img: "../images/Tourism/NanakMatta.jpg",
      firstPara:
        "Nanakmatta is a historical town named after the Sikh pilgrimage site, Gurdwara Nanak Mata Sahib, in the state of Uttarakhand in India. Sikh tradition records that the site was once called Gorakhmata, a centre of Siddh-jogis named after the founder of their order, Gorakhnath, at the distance of 30 miles from Reetha sahib. In the Siddh-Gost in Guru Granth Sahib, the story of Guru Nanak on his first udasi is told, wherein he had a long discourse with siddhas on matters of religion and metaphysics. Tradition says that the place was renamed Nanakmatta to perpetuate the memory of Guru's visit.[1] The town is associated with Guru Nanak Dev and Guru Hargobind. It is situated on the bank of Deoha stream, which has since been dammed into a reservoir named Nanak Sagar. The Gurudwara is located 15 kilometres west of Khatima Railway Station on road to Tanakpur. The holy shrine is near the town of Sitarganj.[2] It is one of three Sikh Holy places in the state, with others being Gurdwara Hemkunt Sahib and Gurudwara Reetha Sahib.",
      secondPara:
        "",
    },
    {
      id: 23,
      name: "Nanak sagar dam",
      district: "udham singh nagar",
      img: "../images/Tourism/NanakSagar.jpg",
      firstPara:
        "Nanak Sagar is an artificial lake created by a dam built on the Deoha river. It is located in Nanakmatta, one of the religious places of the Sikhs. Nanakmatta is the seat of one of the most important Sikh shrines, Gurudwara Sri Nanakmatta Sahib, which is closely associated with Guru Nanak. The vast Nanak Lake mirrors a plethora of hues of the changing sky. The lake is home to hundreds of avifauna, including the migratory kind. Birders can have an excellent time here.",
      secondPara:
        "",
    },
    {
      id: 24,
      name: "Pilibhit Tiger Reserve",
      district: "udham singh nagar",
      img: "../images/Tourism/PilibhitTiger.jpg",
      firstPara:
        "Pilibhit Tiger Reserve is located in Pilibhit district of Uttar Pradesh and was notified as a tiger reserve in 2014. It forms part of the Terai Arc Landscape in the upper Gangetic Plain along the India-Nepal border. The habitat is characterized by sal forests, tall grasslands and swamp maintained by periodic flooding from rivers. The Sharda Sagar Dam extending up to a length of 22 km (14 mi) is on the boundary of the reserve.[2]",
      secondPara:
        "Pilibhit is one of the few well-forested districts in Uttar Pradesh. According to an estimate of the year 2018, Pilibhit district has over 800 km2 (310 sq mi) forests, constituting roughly 23% of the district’s total area. Forests in Pilibhit have at least 65 tiger and a prey including five species of deer. The tiger reserve got the first International award TX2 for doubling the tiger population in a stipulated time.",
    },
    {
      id: 25,
      name: "Baur dam",
      district: "udham singh nagar",
      img: "../images/Tourism/BaurDam.jpg",
      firstPara:
        "The Baur Dam is an earthen embankment dam, built on Baur and Kakrala rivers in Udham Singh Nagar District of uttarakhand. River Ganga is the basin area of this dam. The dam has a maximum height of 17.98 metres and length of 9.50 Kilometres.This is an irrigation dam and water of this dam irrigates Tarai area of Uttarakhand & areas of Rampur District of U.P. The nearest cities from this dam are Nainital, Haldwani, Rudrapur and Kashipur",
      secondPara:
        "",
    },
    {
      id: 26,
      name: "Purnagiri",
      district: "udham singh nagar",
      img: "../images/Tourism/Purnagiri.jpg",
      firstPara:
        "Purnagiri Temple is located at an altitude of 5500 feet on Annapurna peak in Tanakpur city of Uttarakhand province of India . It is one of the 108 Siddha Peethas. This place is considered to be the back of Mahakali. It is said that the part of the navel of Sati, the daughter of Daksha Prajapati and the better half of Shiva, fell from the Vishnu Chakra here. Every year faithful devotees come here to visit this Shakti Peeth even after suffering.",
      secondPara:
        "Legend has it that Parvati ( Sati ), the daughter of Daksha Prajapati , sacrificed herself by jumping into the Yagya Kund organized by Daksha Prajapati in protest against the insult of her husband Mahadev. Lord Vishnu cut Sati Parvati's body into 51 pieces (according to Shiva Purana) to pacify Mahadev's anger with his chakra. A Shakti Peeth was established there. In this sequence, the navel of Sati Parvati had fallen at the place of Purnagiri Shakti Peeth .This place is situated at a distance of 95 km from Champawat and only 25 km from Tanakpur. This Devi Darbar is counted among the 51 Shaktipeeths of India.is done in According to Rudra Samhita in Shivpuran, Dasa Prajapati's daughter Sati was married to Lord Shiva. Once upon a time, a Yagya was organized by Daksha Prajapati in which all the deities were invited but they were not invited with a view to insult Shiv Shankar. Due to Sati not tolerating the insult of her husband Lord Shiva Shankar, her body was sacrificed in the Yagya Mandap. Lord Shiva Shankar started roaming in the sky with the burnt body of Sati. Lord Vishnu, seeing Shiva Shankar's Tandav dance, separated the body parts of Sati with a view to pacify him. Wherever the parts of Sati fell, Shanti Peeths were established. Mahakali in Kolkata due to falling of hair, Brijeshwari due to fall of breast in Nagarkot, Himachal, Jwala Devi due to falling of tongue in Jwalamukhi in Himachal. Mansa Devi due to fall of front part of brain near Panchkula in Haryana, Bhadrakali due to fall of ankle in Kurukshetra, Shakambhari Devi due to fall of head on Shivalik mountain near Saharanpur, Mata Hinglaj Bhavani due to fall of Brahmarandhra near Karachi, steps in Himachal itself. Chintpurni due to falling of a part of it, Kamakhya Devi due to falling of Kokh in Assam, Naina Devi in ​​Himachal due to falling of eyes etc. became Shaktipeeths. Sati's navel part fell in Purnagiri, where the navel of the goddess is worshiped and worshipped. Due to falling of eyes in Naina Devi of Himachal, Naina Devi etc. became Shaktipeeths. Sati's navel part fell in Purnagiri, where the navel of the goddess is worshiped and worshipped. Due to falling of eyes in Naina Devi of Himachal, Naina Devi etc. became Shaktipeeths. Sati's navel part fell in Purnagiri, where the navel of the goddess is worshiped and worshipped.",
    },
    {
      id: 27,
      name: "Tiffin top",
      district: "nainital",
      img: "../images/Tourism/TiffinTop.jpg",
      firstPara:
        "A romantic Gem in the crown on Nainital city is the Tiffin Top, also known as Dorothy's Seat. This famous attraction is a hilltop which offers the most splendid 360-degree view of Nainital city and surrounding Kumaon mountains.Located 2290 m above sea level, this hilltop is a photographer's heaven and a perfect spot for a family picnic. As a matter of fact, the name Tiffin Top was kept after people started taking their tiffin and lunch boxes to this hilltop to enjoy a family picnic.One of the most sought after places to visit in Nainital, the Tiffin top is located on the Ayarpatta hills surrounding Nainital city. It is a terraced hilltop that welcomes a lot of tourists. You can find professional photographers capturing the beauty that this hilltop offers.",
      secondPara:
        "The Tiffin Top is alternately called Dorothy’s seat. Mrs. Dorothy Kellet was the wife of a British Army Officer, Col J.P. Kellet. Col Kellet built this stone bench in memory of his wife who was killed in a plane crash when she had gone to see their children. This hilltop resembles the love and dedication of a husband towards his wife.Hiking and trekking are two activities that Tiffin top is famous for. Since it is only 4 km away from the Nainital city, the easy trek uphill is a big attraction amongst trek enthusiasts. People come in groups to enjoy the trek and live the beauty this place offers.",
    },
    {
      id: 28,
      name: "Naina Devi Temple",
      district: "nainital",
      img: "../images/Tourism/NainaDevi.jpg",
      firstPara:
        "In Nainital , the Naina Devi Temple is situated on the northern bank of Naini Lake . This temple was destroyed by a landslide in 1880. Later it was rebuilt. The Shakti form of Sati is worshiped here. The temple has two eyes which represent Naina Devi. It is believed about Naini Lake that when Shiva was going to Mount Kailash with the dead body of Sati, Shaktipeeths were established wherever his body parts fell. The eyes of Goddess Sati had fallen at the place of Naini Lake. Inspired by this, this temple has been established.",
      secondPara:
        "According to legend, Sati , the daughter of Daksha Prajapati, was married to Shiva . Daksh Prajapati did not like Shiva, but he could not avoid the request of the gods, so he married his daughter to Shiva even against her will. Once Daksha Prajapati invited all the deities to his place for a yagya, but did not even invite his son-in-law Shiva and daughter Uma. Uma stubbornly reached this yagya. when he went to HaridwarWhen she saw all the deities being respected and her husband and herself being disrespected in her father's yagya at Kankhal, she became very sad. She jumped into the sacrificial fire saying that 'I will make Shiva my husband in the next life also. As a result of the disrespect you have shown to me and my husband, I burn myself in the sacrificial fire of the yagya and make your yagya unsuccessful.' When Shiva came to know that Uma had become Sati, So there was no limit to his anger. He destroyed and corrupted the yagya of Daksh Prajapati through his ganas. Seeing this fierce form of Shiva, all the gods and goddesses started thinking that Shiva should not cause annihilation. That's why the deities prayed to Mahadev Shiva and pacified their anger. Daksh Prajapati also apologized. Shiva blessed him too. But seeing the burnt body of Sati, his disinterest was overflowing. He started traveling in the sky by putting the burnt body of Sati on his shoulder. In such a situation where - where the body parts are cut, there - thereShakti Peeth has become. Where Sati's eyes fell; At the same time, Uma i.e. Nanda Devi became a grand place in the form of Naina Devi . Today's Nainital is the same place where the eyes of that goddess fell. The tears of the eyes took the form of a rhythm here. Since then, Shiv's wife Nanda (Parvati) is continuously worshiped here in the form of Nainadevi.",
    },
    {
      id: 29,
      name: "bhimtal",
      district: "nainital",
      img: "../images/Tourism/Bhimtal.jpg",
      firstPara:
        "Bhimtal (Kumaoni: Bhīmtāl) is a town and a nagar panchayat, near Nainital city in Nainital district in the state of Uttarakhand, India. It is situated at an altitude of 1370 meters above sea level and is about 22 kilometers from Nainital. The major attraction in Bhimtal is the Bhimtal Lake, which has an island at its centre. Besides tourism, Bhimtal has also now become a mini district headquarters since most of the district administration offices have shifted to the newly constructed Vikas Bhawan, the building complex for district administrative offices.",
      secondPara:
        "Bhimtal is an ancient place named after Bhima of Mahabharata. Bhimeshwara Mahadev Temple, an old Shiva temple on the bank of Bhimtal lake, is believed to have been built when Bhima visited the place during the banishment (vanvas) period of Pandavas. The present temple was built in the 17th century, by Baz Bahadur (1638-78 AD), a King of the Chand dynasty, and the Raja of Kumaon.Archived 2008-06-18 at the Wayback Machine British Library.6).Bhimtal is older than nearby Nainital as the city of Nainital is just 150-160 years old. Bhimtal was a stoppage onroute on the old pedestrian road, which connects nearby Kathgodam to all Kumaon region and even to Nepal and Tibet. It might have been the part of the famous ancient silk route.",
    },
    {
      id: 30,
      name: "Chaukori",
      district: "pithoragarh",
      img: "../images/Tourism/Chaukri.jpg",
      firstPara:
        "Chaukori is a hill station in the Pithoragarh district set among the lofty peaks of the western Himalayan Range in the Kumaon Division of Uttarakhand, India. To its north is Tibet and to its south is Terai. The Mahakali River, running along its eastern boundary, forms the Indo-Nepal international border. This place has become a prominent tourist place and from here a wide and picturesque view of Himalayan range can be viewed. The golden yellow colour of sun rays falling on the Himalayan range in the morning time is really worth seeing. There are cottages available here where one can stay and enjoy the serene surroundings. Tourists coming to this place generally also visit the nearby tourist places like Patal Bhuvaneshwar, Kausani, Bageshwar and Almora.",
      secondPara:
        "Chaukori is located in Berinag Tehsil of Pithoragarh district in Uttarakhand, India.[3] It is situated 10km away from sub-district headquarter Berinag[4] and 86km away from district headquarter Pithoragarh.[1] Chaukori's elevation is 2010 m with spectacular panoramic views of the snowy peaks of Nanda Devi, Nanda Kot and the Panchchuli group.",
    },
    {
      id: 31,
      name: "Jauljibi",
      district: "pithoragarh",
      img: "../images/Tourism/Jauljibi.jpg",
      firstPara:
        "Jauljibi is a small township and market place in Pithoragarh district in Kumaon division of Uttarakhand state , India . Here there is a confluence of Kali and Gori rivers. It is situated on the border of Nepal and its Mahakali region also has some part of Jauljibi. The markets on both sides are connected by a suspension bridge",
      secondPara:
        "Jauljibi is the small bazaar of Indo-Nepal border (Mahakali Zone) situated at the confluences of Kali and Gori Rivers. The name refers to bazaars on both sides of the river, with the Nepal-side bazaar being rather small compared to that on the Indian side. A suspension bridge on the Kali has joined the bazaars and the people of both countries for many years. The town is famous for its annual trade fair, popularly known as Jauljibi Mela. Thousands of people throng to Mela from the neighboring villages and districts.",
    },
    {
      id: 32,
      name: "Om Parvat",
      district: "pithoragarh",
      img: "../images/Tourism/OmParvat.jpeg",
      firstPara:
        "Om Parvat a mountain located in Pithoragarh district, Uttarakhand, India[2][3] Om Parvat peak elevation is 5,590 m (18,340 ft) above sea level.[4] It is reached by the paved motorable Pithoragagh-Lipulekh Pass Highway (PLPH) NH-9 along Kali River (Sharda River), via a spur along glaciated rivulet to Om Parvat from Nabhidhang. Route to Adi Kailash, from the forks at Gunji, goes northwest via Kuthi Valley along the Kuthi Yankti river. Mount Kailash in Tibet can be viewed from India from the Old Lipulekh Pass which lies northeast of Gunji (via NH-9 motorable till the pass) and the Limpiyadhura Pass (via Kuthi Valley) which lies northwest of Gunji.",
      secondPara:
        "The Om Parvat and the Adi Kailash and are not one and the same,[5] although there may be confusion in some sources. NH-9 extension from Pithoragarh goes to Gunji (Dame La). Gunji is the confluence of NW-S flowing Kuthi Yankti river and NE-S flowing Kali River. Kuthi Yankti river arises from the Limpiyadhura Pass northwest of Gunji and flows through Kuthi Valley to Gunji in south. The Kali River arises from the Lipulekh Pass northeast of Gunji and flows by the KMVN Huts (Kumaon Mandal Vikas Nigam resort) at Nabhidhang (a fork route from Nabhidhang goes southeast along the glaciated rivulet to Om Parvat), ITBP Base Camp, Indian Forest Police Checkpost to Gunji.",
    },
    {
      id: 33,
      name: "Berinag",
      district: "pithoragarh",
      img: "../images/Tourism/Berinag.jpg",
      firstPara:
        "Berinag is a hill station, located 124 km from Pithoragarh city in the Pithoragarh district, which is the easternmost Himalayan district in the state of Uttarakhand, India. It is one of the six Administrative Subdivisions (tehsil) of Pithoragarh district.[1] National Highway 309A passes through Berinag. Closest prominent villages include Garawon, Dhanoli, Bana, Bhattigaon, Banoli, Quarali, Tripuradevi and Sangarh.",
      secondPara:
        "Berinag gets its name from the Berinag Temple[2] (called as ‘Bedinag’ locally), which is a Nāg Devta Temple situated at the top of Berinag Hill. Berinag is among the many temples devoted to Nāgas namely Dhaulinag (Dhavalnag), Kalinag (Kaliyanag), Feninag (Faninag), Bashukinag (Vasukinag), Pinglenag and Harinag. Berinag offers a panoramic view of the Greater Himalayas, from Garhwal Himalayas to the Nepal ranges, especially lofty peaks like Panchachuli and Nanda Devi. The region is famous for tea estates developed during the British rule. The Berinag tea grown here was a highly sought-after tea in London tea.",
    },
    {
      id: 34,
      name: "Dol Ashram ",
      district: "almora",
      img: "../images/Tourism/DolAshram.jpeg",
      firstPara:
        "Shri Kalyanika Himalaya Devasthanam, popularly known as the Dol Ashram is a peaceful ashram in the quaint village of Kanara (Dol), located in the Almora district of Uttarakhand. Dol Ashram is surrounded by dense forests and rests calmly at its center.",
      secondPara:
        "Dol Ashram is built for yoga and meditation purposes and the atmosphere of the ashram makes it an ideal location for practicing the elements of a spiritual life. At Dol Ashram, you can learn Vedic methodology which is an integral aspect for living a balanced and healthy life. Dol Ashram welcomes everyone who want to learn about spirituality, yoga, and meditation.",
    },
    {
      id: 35,
      name: "Dhakuri Pass ",
      district: "bageshwar",
      img: "../images/Tourism/Dhakuri.jpg",
      firstPara:
        "Dhakuri is one of the most popular destinations for the snow and mountain lovers, the place is covered with the snow in the peak. A short trek from the campsite to Dhakuri-Khal offers even better views of the mountains, especially at sunrise. ",
      secondPara:
        "Dhakuri hill station is nestled in Bageshwar district, Uttarakhand. Dhakuri is encircled by mesmerizing vistas of nature. It is the portal to the Kumaon region’s majestic valleys, namely Pindari and Sunderdhunga. The verdant grass, stunning meadows, the dense forests of horse-chestnut and oak trees, the mountains blanketed with snow, the chilling wind, everything in Dhakuri is a surreal experience of nature.",
    },
    {
      id: 36,
      name: "Maiktoli",
      district: "bageshwar",
      img: "../images/Tourism/Maiktoli.jpg",
      firstPara:
        "Maiktoli is a mountain of Kumaun Himalayas located in the Bageshwar district of Uttarakhand state in India. It stands at 6,803 metres (22,320 ft). It is jointly the 32nd highest located entirely within the uttrakhand India. Nanda Devi is the highest mountain in this category. Maiktoli is 479th highest peak in the world.[3] It is located at the southern rim of Nanda Devi Sanctuary. Maiktoli is located just south east of Devtoli (6,788 metres (22,270 ft)) and south east of Trisul (7,120 metres (23,360 ft)). On the north east side lies Nanda Devi (7,816 metres (25,643 ft)) and Panwali Dwar (6,663 metres (21,860 ft)). On the south west side lies Tharkot (6,099 metres (20,010 ft))",
      secondPara:
        "It is surrounded by glaciers with Dakshini Rishi Glacier on the northern side and Sundardunga Glacier on the southern side. Pindari River emerges from southern side of Maiktoli while on the northern side is Rishi Ganga. Rishi Ganga met with Dhauli Ganga near lata. Later Dhauli ganga met with Alaknanda at Vishnu Pryag. Pindari river also met with Alaknanda at Karan Pryag. Alaknanda river is one of the main tributaries of Ganga.",
    },
    {
      id: 37,
      name: "Namik Glacier",
      district: "bageshwar",
      img: "../images/Tourism/Namik.jpg",
      firstPara:
        "The glacier is situated on the Kumaon Himalayas at an altitude of 3,600 m (11,800 ft).[1] This glacier is the source of the Ramganga River.[2] The glacier is surrounded by the following peaks: Nanda Devi 7,848 metres (25,748 ft), Nanda Kot 6,861 metres (22,510 ft), and Trishuli 7,120 metres (23,360 ft). The glacier falls on ancient Indo-Tibet trade route. It is 23 km (14 mi) trekking from Liti and situated at the villages of Gogina and Namik.[3] There are a number of waterfalls and sulphur springs originating around this glacier. The glacier can be reached by trekking from gogina on the sama liti Road near. It is 63 kilometres (39 mi) from Bageshwar. Jeeps can be hired from Bageshwar or Kapkot up to Gogina.[3] 'Namik' means a place where saline water springs are present.",
      secondPara:
        "",
    },
    {
      id: 38,
      name: "Mount Abbott",
      district: "champawat",
      img: "../images/Tourism/MountAbbott.jpg",
      firstPara:
        "Mount Abbott is a mountain in India . [2] It is located in the Champawat district and state of the State of Uttarakhand , in the northern part of the country, 290 km east of New Delhi , the capital of the country. Abbott Mount is 2,111 meters above sea level, [say 2] or 406 meters above the surrounding terrain [say 3] . Its foothills are about 14.5 kilometers wide.",
      secondPara:
        "The land around Abbott Mount is mountainous in the north, but in the south it is hilly. [narrative 5] The highest area in the area has a height of 2,468 meters and is 13.8 km northeast of Abbott Mount. [narrative 6] There are about 134 people per square kilometer around Abbott Mount, quite densely populated. [3] The nearest larger town is Lohaghāt , 3.1 km south of Abbott Mount. Abbott Mount is almost covered in mixed forest .",
    },
    {
      id: 39,
      name: "Baleshwar Temple",
      district: "champawat",
      img: "../images/Tourism/Baleshwar.jpg",
      firstPara:
        "Baleshwar Temple is an ancient temple dedicated to Shiva, situated within city of Champawat in Uttarakhand, India.Built by the rulers of the Chand dynasty, Baleshwar Temple is a marvelous symbol of stone carving. It is believed to have been built in 13th century AD (1390 AD) by Garud Gyan Chand. Uday Chand started reconstruction work for this temple between 1420 and 1421 AD. Hari Chand, who reigned from 1423 AD to 1427 AD, completed the reconstruction work on the temple as per a copperplate inscription (dated 1423 AD) at the temple.",
      secondPara:
        "The main Baleshwar temple is dedicated to Shiva (who is also known as Baleshwar). There are two other temples in the compound of Baleshwar, one dedicated to Ratneshwar and other to Champawati Durga. Close to the Baleshwar Temple is a \"Naula\" (freshwater resource). On the day of Mahashivratri, a very crowded fair is held in the Baleshwar Temple compound. The exteriors of Ratneshwar and Champawati Durga temples are carved with the different posters of the local deities.",
    },
    {
      id: 40,
      name: "Banasur Ka Kila",
      district: "champawat",
      img: "../images/Tourism/Banasur.jpg",
      firstPara:
        "Built by the rulers of the Chand dynasty, Baleshwar Temple is a marvelous symbol of stone carving. It is believed to have been built in 13th century AD (1390 AD) by Garud Gyan Chand. Uday Chand started reconstruction work for this temple between 1420 and 1421 AD. Hari Chand, who reigned from 1423 AD to 1427 AD, completed the reconstruction work on the temple as per a copperplate inscription (dated 1423 AD) at the temple.",
      secondPara:
        "Upon reaching, the travelers are required to do an easy gradient of 2 km will lead to Banasur Ka Kila. The lovers of ancient Indian architecture must visit this spectacular fort, which has been standing tall since ages.",
    },
    {
      id: 41,
      name: "Regional Science Center",
      district: "dehradun",
      img: "../images/Tourism/RSC.jpeg",
      firstPara:
        "Regional Science Centre in Dehradun is a newly created science park that educates as well as entertains visitors especially children. It is a perfect outing destination for school children to expand their scope of knowledge. The science park includes Dinosaurs Park, a Himalayan gallery, a 3D theatre, a library, a 200-seater auditorium and an exhibition hall.",
      secondPara:
        "However, the highlight of the Regional Science Centre is the interactive exhibits that educate and entertain the visitors. Some the popular science exhibits at the Centre are 'Gravity Chair, Whispering Garder Musical Bar, Sympathetic Swing, Birding Cage', 'Eco Tube' and 'Perspective House'.It also showcases important concepts like nuclear power generation, cloud computing, robotics, carbon-nano tubes and graphene to name a few. A planetarium known as Taramandal is also set to be operational where visitors could observe the night sky.",
    },
    {
      id: 42,
      name: "Tapovana",
      district: "dehradun",
      img: "../images/Tourism/Tapovan.jpg",
      firstPara:
        "Tapovana (Sanskrit) comes from the two root words tapas, meaning 'penance' and by extension 'religious mortification' and 'austerity', and more generally 'spiritual practice', and vana, meaning 'forest' or 'thicket'. Tapovana then translates as 'forest of austerities or spiritual practice'. Though pronounced the same in Hindi, tapovana should not be confused with tapovan (from tapovat), which means a person engaged in austerity.",
      secondPara:
        "Traditionally in India, any place where someone has engaged in serious spiritual retreat may become known as a tapovana, even if there is no forest. As well as particular caves and other hermitages where sages and sadhus have dwelt, there are some places, such as the western bank of the northern Ganges river around Rishikesh, that have been so used by hermits that the whole area has become known as a tapovana.",
    },
    {
      id: 43,
      name: "Malsi Deer Park",
      district: "dehradun",
      img: "../images/Tourism/MalsiDeerPark.jpg",
      firstPara:
        "At a distance of 10 km from Dehradun , on the way to Mussoorie , it is a beautiful tourist spot situated at the foothills of the Shivalik range. Malsi Deer Park is a small zoo where a park surrounded by natural beauty has also been developed for children. Due to the beautiful environment, there is a feeling of freshness, due to which it has become an ideal sightseeing place and picnic spot.",
      secondPara:
        "Malsi Deer Park is located in Dehradun, which is also known as \"Dehradun Zoo\". Earlier, this park was famous only for deer in the whole of Uttarakhand, but at present, some animals and birds are also being kept in this park, which you can see when you go to Malsi Deer Park located in Dehradun.Malsi Deer Park has got the status of \"Mini Zoo\" by the Central Government, because it may take some time for this zoo to take full shape, but if the Central Government pays attention to Malsi Deer Park, then this zoo will become a full-fledged zoo. It will not take long to imbibe. mother",
    },
    {
      id: 44,
      name: "Sahasradhara",
      district: "dehradun",
      img: "../images/Tourism/Sahasradhara.jpg",
      firstPara:
        "Sahasradhara, -- popularly but incorrectly spelled Sahastradhara -- meaning thousandfold spring, is one of the most popular tourist destinations located in Dehradun in Uttarakhand state of India. It lies on 30.387231 latitude and 78.131606 longitude.[1] This place is situated on the banks of the small river, Kali Gad which a tributary of Song River. The place has magnificent beauty of nature where water drips from the limestone stalactites, making the water abundant in sulpur and thus the place is known for its sulphur springs.[2] It is sulphur water spring of relatively lower temperature than its surroundings.[2] It is a warehouse of excellent beauty of caves, waterfalls and terrace farming on steppe by the local people. Its magnificent nature attracts people from faraway places.[3] This place is at about 11 km from the city of Dehradun.",
      secondPara:
        "",
    },
    {
      id: 45,
      name: "Rajaji National Park",
      district: "dehradun",
      img: "../images/Tourism/Rajaji.jpg",
      firstPara:
        "Rajaji National Park is an Indian national park and tiger reserve[1] that encompasses the Shivaliks, near the foothills of the Himalayas. It is spread over 820 km2[2] and includes three districts of Uttarakhand: Haridwar, Dehradun and Pauri Garhwal. In 1983, three wildlife sanctuaries in the area namely, Chilla, Motichur and Rajaji were merged into one.",
      secondPara:
        "Rajaji National Park has been named after C. Rajagopalachari (Rajaji), a prominent leader of the Freedom Struggle, the second and last Governor-General of independent India and one of the first recipients of India's highest civilian award Bharat Ratna (in 1954).",
    },
    {
      id: 46,
      name: "Robber's Cave",
      district: "dehradun",
      img: "../images/Tourism/RobberCave.jpg",
      firstPara:
        "Robber's Cave (locally known as Guchhupani), located near Sahasradhara (thousand fold spring), is a river cave formation in Himalaya, located approximately 8 km from the centre of Dehradun City in Uttarakhand state of India.The cave is about 600 metres long, and divided into two main parts. The cave has a highest fall of about 10 metres. In the central part there is a fort wall structure which is now broken.[1] It consists of an extremely narrow gorge formed in a conglomerate limestone area on Doon Valley's Dehra plateau.It is a natural cave formation where rivers flow inside the cave. The place is a popular tourist spot and which is now being maintained by Uttarakhand State. Local bus services are available up to Anarwala Village, from where it is a kilometre's trek away.",
      secondPara:
        "Gachhu Pani is situated in a vast limestone area in the Dehra plateau in Dehradun. You can see similar caves in Sahastradhara of Dehradun. Gucchu pani (robber's Cave) is a narrow gorge also known as Nero Gauge Cave, the area is an example of chosen stone construction. The late 1800s Robber's Cave is used by robbers to hide from the British. Due to the natural and local condition of this cave, it was easiest for the robbers to hide here. Labyrinth caves were suitable for robbers to hide here, which is why it came to be known as robber's Cave.[4] It is believed by the locals that the place was used by the robbers for hiding their lootings.",
    },
    {
      id: 47,
      name: "Rishikesh",
      district: "dehradun",
      img: "../images/Tourism/RISHIKESH.jpg",
      firstPara:
        "Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher knowledge.[1][2] There are numerous temples and ashrams built along the banks of the river. It is known as the \"Gateway to the Garhwal Himalayas\" and \"Yoga Capital of the World\".[1][4][5][6] The city has hosted the annual \"International Yoga Festival\" on the first week of March since 1999.[7][8] Rishikesh is a vegetarian-only and alcohol-free city",
      secondPara:
        "The Tehri Dam is just 86 km (53 mi) away and Uttarkashi, a popular yoga destination, is 170 km (110 mi) uphill on the way to Gangotri. Rishikesh is the starting point for traveling to the four Chota Char Dham pilgrimage places: Badrinath, Kedarnath, Gangotri, and Yamunotri. It is a starting point for Himalayan tourist destinations such as Harsil, Chopta, Auli, and summer and winter trekking destinations like Dodital, Dayara Bugyal, Kedarkantha, Har Ki Dun for camping and panoramic Himalayan views.In September 2015, the Indian Minister of Tourism Mahesh Sharma announced that Rishikesh and Haridwar would be the first \"twin national heritage cities\".[10] As of 2021, Rishikesh has a total population of 322,825 with the tehsil including the city and its 93 surrounding villages.",
    },
    {
      id: 48,
      name: "Bara Bazaar",
      district: "haridwar",
      img: "../images/Tourism/BaraBazar.jpg",
      firstPara:
        "The bustling Bara Bazaar market of Haridwar is a shopper's stop for the local as well as foreign tourists. This lively market is famous for selling religious paraphernalia, decorative as well as ornamental items. Meander through the gullies (lanes) and you'll see different goods on display.",
      secondPara:
        "There are a plethora of options to choose from while shopping at Bara Bazaar, if you are a religious one then you can buy genuine Rudraksha seeds, the health conscious can buy churan or digestive powders, for those having a sweet tooth can relish mouth-watering milk sweets from here.'Peda' a type of sweet made from milk is quite popular among the locals and has made a special place in the heart of foreign tourists. There is also a huge demand for Ayurvedic medicines that are sold in the market. Medicines for all types of pain and aches are also available at the market",
    },
    {
      id: 49,
      name: "Har ki Pauri",
      district: "haridwar",
      img: "../images/Tourism/HariKiPauri.jpg",
      firstPara:
        "Har ki Pauri or Hari ki Pauri is a sacred and most important religious place in Haridwar , a religious city in the state of Uttarakhand , India . Its meaning is \"the feet of Hari i.e. Narayan\". According to Hindu religious beliefs, after the churning of the ocean , when Dhanvantari was taking nectar from the gods and demons who were fighting for nectar , a few drops of nectar fell on the earth and those places became places of religious importance. The drops of nectar also fell in Haridwar and the place where they fell was Har Ki Pauri. Taking a bath here is the most ardent desire of every devotee who comes to Haridwar because it is believed that taking a bath here leads to salvation . base on true events",
      secondPara:
        "Har ki Pauri or Brahmakund is the main ghat of the holy city of Haridwar. It is believed that this is the place from where the river Ganges leaves the mountains and takes the direction of the plains. The river at this place has the power to wash away sins and the footprint of Sri Hari in a stone here supports this. This ghat is on the west bank of the canal of the river Ganges from where the river turns towards the north. Every evening at sunset, hermit monks perform the Ganga Aarti, at which time the water flowing downstream is bathed in light and the priests engage in rituals. Apart from this main ghat, there are many small ghats on the banks of the canal. Orange and white colored life-saving towers are installed at regular intervals to keep a watch that no devotee gets swept away.",
    },
    {
      id: 50,
      name: "Shantikunj",
      district: "haridwar",
      img: "../images/Tourism/Shantikunj.jpeg",
      firstPara:
        "Shantikunj is a religious tourist attraction in Haridwar[1][2] and also the headquarters of All World Gaytri Pariwar.Shantikunj was established in 1971 by Shriram Sharma and Bhagwati Devi Sharma on a small piece of land.[4][5] It was expanded over Gayatri Nagar. Shantikunj and Dev Sanskriti Vishwavidyalaya functions under the Shri Vedmata Gayatri Trust, headed by Mrs. Shailbala Pandya.",
      secondPara:
        "Shantikunj is located 6 kilometers from Haridwar's railway station towards Rishikesh/Dehradun on NH58 in India. The nearest airports are Jolly Grant Airport, Dehradun and Indira Gandhi International Airport.",
    },
    {
      id: 51,
      name: "Chandi Devi Temple",
      district: "haridwar",
      img: "../images/Tourism/ChandiDevi.jpg",
      firstPara:
        "Chandi Devi Temple, Haridwar (Hindi: चण्डी देवी मंदिर, हरिद्वार) is a Hindu temple dedicated to Goddess Chandi Devi in the holy city of Haridwar in the Uttarakhand state of India. The temple is situated atop the Neel Parvat on the Eastern summit of the Sivalik Hills, the southernmost mountain chain of the Himalayas. Chandi Devi Temple was built in 1929 by Suchat Singh in his reign as the King of Kashmir. However, the main murti of Chandi Devi at the temple is said to have been installed in the 8th century by Adi Shankaracharya, one of the greatest priests of Hindu religion.[1][2] The temple also known as Neel Parvat Teerth is one of the Panch Tirth (Five Pilgrimages) located within Haridwar.",
      secondPara:
        "Chandi Devi Temple is highly revered by devotees as a Siddh Peetha which is a place of worship where desires get fulfilled. It is one of three such Peethas located in Haridwar, the other two being Mansa Devi Temple and Maya Devi Temple.",
    },
    {
      id: 52,
      name: "Mansa Devi Temple",
      district: "haridwar",
      img: "../images/Tourism/MansaDevi.jpg",
      firstPara:
        "Mansa Devi Temple, Haridwar (Hindi: मंसा देवी मंदिर, हरिद्वार) is a Hindu temple dedicated to goddess Mansa Devi in the holy city of Haridwar in the Uttarakhand state of India. The temple is located atop the Bilwa Parvat[1][2] on the Sivalik Hills, the southernmost mountain chain of the Himalayas. The temple, also known as Bilwa Tirth is one of the Panch Tirth (Five Pilgrimages) within Haridwar.",
      secondPara:
        "The temple is known for being the holy abode of Mansa Devi, a form of Shakti and is said to have emerged from the mind of the Lord Shiva. Mansa is regarded as the sister of the Nāga (serpent) Vasuki. She is also believed to be the daughter of Lord Shiva in his human incarnate. The term Mansa means wish and it is believed that the goddess fulfils all the wishes of a sincere devotee. There is a folk tale about this, once Mansa, a common girl who was unaware about her complete truth from her guardians decided to meet Lord Shiva and ask him about her truth. To meet Lord Shiva, she sat for Sadhana and after years of spiritual exercise, she got the fortune to meet Lord Shiva and clarify her truth from him. After learning her truth, she attained the powers of goddess of welfare for the world. Devotees who pray to Mansa Devi for fulfilling their wishes tie threads to the branches of a tree located in the temple. Once their wishes are fulfilled, people come back again to the temple to untie the thread from the tree. Goddess Mansa is also offered coconuts, fruits, garlands and incense sticks for prayer. Mansa Devi Temple is a Siddh Peeth (These are known to fulfill the desires of the worshippers). It is one of three such Peeths located in Haridwar, the other two being Chandi Devi Temple and Maya Devi Temple.[3] The inner shrine has two deities, one with eight arms and the other one with three heads and five arms.",
    },
    {
      id: 53,
      name: "Rajaji National Park",
      district: "haridwar",
      img: "../images/Tourism/Rajaji.jpg",
      firstPara:
        "Rajaji National Park is an Indian national park and tiger reserve[1] that encompasses the Shivaliks, near the foothills of the Himalayas. It is spread over 820 km2[2] and includes three districts of Uttarakhand: Haridwar, Dehradun and Pauri Garhwal. In 1983, three wildlife sanctuaries in the area namely, Chilla, Motichur and Rajaji were merged into one. Rajaji National Park has been named after C. Rajagopalachari (Rajaji), a prominent leader of the Freedom Struggle, the second and last Governor-General of independent India and one of the first recipients of India's highest civilian award Bharat Ratna (in 1954). ",
      secondPara:
        "Rajaji National Park is a national park located in the Indian state of Uttarakhand.[3] It was established in 1983 and covers an area of approximately 820 square kilometers. The park is named after C. Rajagopalachari, a freedom fighter and the last Governor-General of India.The park is home to a diverse range of flora and fauna, including over 300 species of birds, 50 species of mammals, and numerous species of reptiles, amphibians, and fish. Some of the more notable animals that can be found in the park include tigers, leopards, elephants, sloth bears, and Indian gaur (a type of bison).",
    },
    {
      id: 54,
      name: "Devprayag",
      district: "tehri garhwal",
      img: "../images/Tourism/Devprayag.jpg",
      firstPara:
        "Devprayag is the final one of the Panch Prayag (five confluences) of Alaknanda River where Alaknanda meets the Bhagirathi river and both rivers thereafter flow on as the Ganges river or Ganga. Traditionally, it is considered to be the place where sage Dev Sharma led his ascetic life, giving birth to its present name, Devprayag. It is one of the five sacred confluences in the hills and is an important place of pilgrimage for devout Hindus.",
      secondPara:
        "\"Devprayag\" means \"Godly Confluence\" in Sanskrit. According to Hindu scriptures, Devprayag is the sacred place of merging of two visible heavenly rivers, Alaknanda and Bhagirathi, to form the holy Ganges. On a terrace in the upper part of the village is the temple of Raghunathji, built of huge stones, pyramidal in form, and capped by a white cupola.[4] There are major four temples located on this Godly Confluence. These temples increase the spiritual importance of Devprayag.",
    },
    {
      id: 55,
      name: "Tehri Dam",
      district: "tehri garhwal",
      img: "../images/Tourism/TehriDam.jpg",
      firstPara:
        "With a height of 260.5 m (855 ft) Tehri Dam is the tallest dam in India[1] and 12th tallest dam in the world. It is a multi-purpose rock and earth-fill embankment dam on the Bhagirathi River in New Tehri, Tehri Garhwal district in Uttarakhand, India. It is the primary dam of the THDC India Ltd. and the Tehri hydroelectric complex. Phase 1 was completed in 2006. The Tehri Dam withholds a reservoir for irrigation, municipal water supply and the generation of 1,000 megawatts (1,300,000 hp) of hydroelectricity. The dam's 1,000 MW variable-speed pumped-storage scheme is currently under construction with expected commissioning of first two units in 2023.[",
      secondPara:
        "The nearby Tehri Lake is said to be one of the largest man-made lakes in Asia. Today, the lake is best known for adventure tourism. Visitors can enjoy jet skiing, hot air balloon rides, boating, zorbing, paragliding, hotdog ride, bandwagon boat ride, banana boat ride, etc.",
    },
    {
      id: 56,
      name: "Dhanaulti",
      district: "tehri garhwal",
      img: "../images/Tourism/Dhanaulti.jpeg",
      firstPara:
        "Dhanaulti is a quiet hill station at an elevation of 2286 meters above sea level, it offers panoramic views of the lofty Himalayas. Situated in the foothills of the Garhwal Himalayan range located 115 km (71 mi) from New Tehri, the district headquarter, 60 km from the hill station of Mussoorie. Dhanaulti is a tehsil in Tehri Garhwal district, Uttarakhand, India.",
      secondPara:
        "Dhanaulti is located on the important tourist circuit of Landour,Mussoorie,Kanatal,Chamba and New Tehri. The town is densely enveloped by the velvety rhododendrons, deodar, and tall oak forests. Heavy snowfall during winters, attracts many tourists here. Dhanaulti is still untouched by the maddening summer rush to hill stations, so it offers a holiday privacy that many seek. As Mussoorie has become overcrowded, many tourists prefer Dhanaulti. Dhanaulti is also an up and coming Honeymoon destination..",
    },
    {
      id: 57,
      name: "Surkanda Devi temple",
      district: "tehri garhwal",
      img: "../images/Tourism/SurkandaDevi.jpeg",
      firstPara:
        "Surkanda Devi is a Hindu temple near Kanatal, Uttarakhand, India. It is at an altitude of about 2756 metres lies close to nearby hill stations of Dhanaulti (8 kilometres [5.0 mi]) and Chamba (22 kilometres [14 mi]) walking distance of approx 3 kilometres [1.9 mi] from Kaddukhal, the place where vehicles are parked.",
      secondPara:
        "It is surrounded by dense forests and affords a scenic view of the surrounding region including the Himalayas to the north, and certain cities to the south (e.g., Dehradun, Rishikesh) The Ganga Dusshera festival is celebrated every year between May and June and attracts a lot of people. This is a temple which is situated among the trees of rounslii. It is covered with fog most of the time of the year.",
    },
    {
      id: 58,
      name: "Panwali Kantha Bugyal",
      district: "tehri garhwal",
      img: "../images/Tourism/PanwaliKantha.jpg",
      firstPara:
        "Panwali Kantha Bugyal is a Himalayan Alpine Meadow (commonly known as Bugyal) in the Tehri Garhwal district of Uttarakhand. Panwali Kantha Bugyal is a trekking and hiking Destination. The Bugyal has an average elevation of 3368m and is around 90 km from New Tehri. It is an alpine meadow which has expanse of grass land. It has a well maintained trek route. The trek to Panwali Kantha Bugyal passes through lush vegetation of rhododendrons, oak and deodar forests.",
      secondPara:
        "There is green grass all over the meadow during the monsoons. The trail is decked with red and pink rhododendron, during months of April and May. [2] During the winter season, the whole meadow is covered with snow. This place offers scenic views of the Char Dham ranges.[3] The trek starts from Uttarkashi at Gangotri's side and from Trijuginarayan at Kedarnath's side.[4] It is also accessible from Ghuttu Village which is about 30 km from Ghansali.",
    },
    {
      id: 59,
      name: "Kanatal",
      district: "tehri garhwal",
      img: "../images/Tourism/Kanatal.jpg",
      firstPara:
        "Kanatal is a small village that is a hill station in the state of Uttarakhand, India. Kanatal is 78 km from Dehradun (capital of the State Uttarakhand), 38 km from Mussoorie and 12 km from Chamba. It is on the Chamba-Mussoorie road and nearly 300 km from Delhi.",
      secondPara:
        "Kanatal's history dates back to some decades when a small lake also known as “taal” or pond had dried up. When it dried up, people began to refer to it as kaana taal. The name of the nearby area is Kanatal. In Hindi, the word kaana usually refers to a dry well or pond.Surkanda Devi is a temple in Kaddukhal, dedicated to Sati. Surkanda is where the head of Sati had fallen after Shiva carried her on his trishool after she set herself on fire. The temple is known for its architectural beauty and its location - perched at an altitude 2,700 meters that offers a 360 degree view of the surrounding region along with the Himalayan mountains. This temple is 8 km on the road to Mussoorie to Kaddukhal.",
    },
    {
      id: 60,
      name: "Nehru Institute of Mountaineering",
      district: "uttarkashi",
      img: "../images/Tourism/NIM.jpg",
      firstPara:
        "The Nehru Institute of Mountaineering (NIM India) in Uttarkashi in Uttarakhand is an institute that was established on November 14, 1965.[2] The institute was formed to honor the great desire of President Jawahar Lal Nehru, the first Prime Minister of India.",
      secondPara:
        "Nehru Institute of Mountaineering was first proposed by the Ministry of Defence, the Government of India, and the Government of Uttar Pradesh in 1964. The institute is built in Uttarkashi because it is close to the Gangotri region in Western Garhwali, which has good climbing and training potential in India.In August 2022, the institute hosted the national sports climbing championship.On Oct 4, 2022, a group of 29 trainee mountaineers from NIM were trapped in an avalanche at Draupadi Ka Danda peak in Uttarkashi district.",
    },
    {
      id: 61,
      name: "Gangotri",
      district: "uttarkashi",
      img: "../images/Tourism/Gangotri.jpeg",
      firstPara:
        "Gangotri is a town and a Nagar Panchayat (municipality) in Uttarkashi district in the state of Uttarakhand, India. It is 99 km from Uttarkashi, the main district headquarter. It is a Hindu pilgrim town on the banks of the river Bhagirathi – the origin of the river Ganges. The town is located on the Greater Himalayan Range, at a height of 3,100 metres (10,200 ft). According to popular Hindu legend, Goddess Ganga descended here when Lord Shiva released the mighty river from the locks of his hair.",
      secondPara:
        "Gangotri is one of the four sites in the Chota Char Dham pilgrimage circuit. It is also the origin of the Ganges river and seat of the goddess Ganga. The river is called Bhagirathi at the source and acquires the name Ganga (the Ganges) from Devprayag onwards where it meets the Alaknanda. The origin of the holy river is at Gaumukh, set in the Gangotri Glacier, and is a 19 km trek from Gangotri. The original Gangotri Temple was built by the Nepalese general Amar Singh Thapa. The temple is closed from Diwali day every year and is reopened on Akshaya Tritiya.[1] During this time, the idol of the goddess is kept at Mukhba village, near Harsil. Ritual duties of the temple are supervised by the Semwal family of pujaris. These pujaris hail from Mukhba village.",
    },
    {
      id: 62,
      name: "Yamunotri",
      district: "uttarkashi",
      img: "../images/Tourism/Yamunotri.jpg",
      firstPara:
        "Yamunotri, also Jamnotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas and located approximately 150 kilometers (93 mi) North of Uttarkashi, the headquarters of the Uttarkashi district in the Garhwal Division of Uttarakhand, India. It is one of the four sites in India's Chhota Char Dham pilgrimage. The sacred shrine of Yamunotri, source of the river Yamuna, is the westernmost shrine in the Garhwal Himalayas, perched atop a flank of Bandar Poonch Parvat. The chief attraction at Yamunotri is the temple devoted to the Goddess Yamuna and the holy thermal springs at Janki Chatti which is 7 km away.",
      secondPara:
        "The temple of Yamuna, on the left bank of the Yamuna, was constructed by Maharaja Pratap Shah of Tehri Garhwal. The deity is made of black marble. The Yamuna, like the Ganges, has been elevated to the status of a divine mother for the Hindus and has been held responsible for nurturing and developing the Indian civilization.There are hot water springs located close to the temple. Surya Kund is the most important kund. Near the Surya Kund there is a shila called Divya Shila, which is worshipped before puja is offered to the deity. Devotees prepare rice and potatoes, tied in muslin cloth, to offer at the shrine by dipping them in these hot water springs. The cooked rice is taken back home as prasadam. The pujaris of Yamunotri come from the village of Kharsali near Janki Chatti. They are the administrators of the sacred place and perform religious rites. They are well-versed in the Shastras.",
    },
    {
      id: 63,
      name: "Harshil",
      district: "uttarkashi",
      img: "../images/Tourism/Harshil.jpeg",
      firstPara:
        "Harshil, the Himalayan paradise,[1] is a village, tourist hill station and army area located on the banks of the Bhagirathi River, on the way to Gangotri, a Hindu pilgrimage site in Uttarkashi district of the Indian state of Uttarakhand. Situated at an altitude of 9,005 ft (2,745 metres.) from sea level, Harshil lies 78 km. from Uttarkashi, and 30 km away from the Gangotri National Park which is spread across 1,553 square km. The hill station is well- known for its natural environment and apple production.",
      secondPara:
        "According to the local legend, the Harsil got its name from the rivers Bhagirathi and the Jalandhari as once they had an argument over their significance. Lord Vishnu, also known as Hari, was asked to intervene. He turned himself into a great stone, a shila, and absorbed their anger. Even today, after Hari-shila (or Harsil), the waters of the two rivers have become a little less turbulent.",
    },
    {
      id: 64,
      name: "Dayara Bugyal",
      district: "uttarkashi",
      img: "../images/Tourism/DayaraBugyal.jpg",
      firstPara:
        "Dayara Bugyal is a Bugyal (Himalayan Alpine Meadow) in the Uttarkashi district of Uttarakhand. Dayara Bugyal is a popular Trekking and Camping Destination. The Bugyal has an average elevation of 3639m and is around 40 km from Uttarkashi. Dayara Bugyal is nestled between the Deodar and Rhododendron trees and is rich in flora and fauna.",
      secondPara:
        "Dayara Bugyal is also a destination for trekking as well as camping. In spring, there is contrast of greenery of the grasslands and red and pink rhododendrons.[2] In winters, the Bugyal turns into snow land with capability of skiing and snow activities. The trek is open throughout the year except the monsoon. Views of the Garhwal Himalayas, including Nanda Devi, Bandarpunch and Swargarohini, can be seen from Dayara Bugyal",
    },
    {
      id: 65,
      name: "Badrinath",
      district: "chamoli",
      img: "../images/Tourism/Badrinath.jpg",
      firstPara:
        "Badrinath is a Hindu holy place, and is one of the four sites in India's Char Dham pilgrimage. It is also part of India's Chota Char Dham pilgrimage circuit and gets its name from the Badrinath Temple. Badrinath was re-established as a major pilgrimage site by Adi Shankara in the 8th century.[7] In earlier days, pilgrims used to walk hundreds of miles to visit the Badrinath temple",
      secondPara:
        "The Badrinath temple is the main attraction in the town. According to legend, Adi Shankaracharya discovered a black stone image of Lord Badrinarayan made of Shaligram stone in the Alaknanda River. He originally enshrined it in a cave near the Tapt Kund hot springs.[11][12] In the sixteenth century, the King of Garhwal moved the murti to the present temple.[11] The temple is approximately 50 ft (15 m) tall with a small cupola on top, covered with a gold gilt roof.[11] The facade is built of stone, with arched windows. A broad stairway leads up to a tall arched gateway, which is the main entrance. The architecture resembles a Buddhist vihara (temple), with the brightly painted facade also more typical of Buddhist temples.[13] Just inside is the mandapa, a large pillared hall that leads to the garbha grha, or main shrine area. The walls and pillars of the mandapa are covered with intricate carving.",
    },
    {
      id: 66,
      name: "Auli",
      district: "chamoli",
      img: "../images/Tourism/Auli.jpg",
      firstPara:
        "Auli is in Chamoli district in the Himalayan mountains of Uttarakhand, India. Auli, also known as Auli Bugyal, in Garhwali, which means \"meadow\", is located at an elevation of 2,800 metres (9,200 ft) above sea level. Between June and October, the valley has one of highest numbers of flower species found anywhere in the world, with 520 species of high-altitude plants, 498 of which are flowering plants with significant populations of endangered species",
      secondPara:
        "Auli is a hiking and ski destination[4] and after the creation of the state of Uttarakhand, formerly part of Uttar Pradesh, Auli was marketed as a tourist destination. It is surrounded by coniferous and oak forests, with a panoramic view of the peaks of the Himalayas.[4] The slopes are intended for both professional skiers and novices. The Garhwal Mandal Vikas Nigam Limited (GMVNL) a state government agency which takes care of this resort, and Uttarakhand Tourism Department conduct winter sports competitions at Auli to encourage skiing in India.[5] It has a 4 kilometres (2.5 mi) cable car, a chairlift and a ski lift, along with a maintained trek route. There is a training facility of Indo-Tibetan Border Police. A small Hindu temple connected with the Hindu epic the Ramayana is also present.",
    },
    {
      id: 67,
      name: "Valley of Flowers",
      district: "chamoli",
      img: "../images/Tourism/ValleyofFlowers.jpg",
      firstPara:
        "Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli in the state of Uttarakhand and is known for its meadows of endemic alpine flowers and the variety of flora. This richly diverse area is also home to rare and endangered animals, including the Asiatic black bear,[1] snow leopard,[1] musk deer,[1] brown bear, red fox[1] and blue sheep. Birds found in the park include Himalayan monal pheasant and other high altitude birds.",
      secondPara:
        "At 3352 to 3658 meters above sea level, the gentle landscape of the Valley of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park to the east.[3] Together, they encompass a unique transition zone between the mountain ranges of the Zanskar and Great Himalayas. The park stretches over an expanse of 87.50 km2 and it is about 8 km long and 2 km wide.[2] The park lies completely in the temperate alpine zone. Both parks are encompassed in the Nanda Devi Biosphere Reserve (223,674 ha) which is further surrounded by a buffer zone (5,148.57 km2). Nanda Devi National Park Reserve is in the UNESCO World Network of Biosphere Reserves.The park is open only during summer from June to October and it is covered by heavy snow for the rest of the year.",
    },
    {
      id: 68,
      name: "Brahmatal Lake",
      district: "chamoli",
      img: "../images/Tourism/BrahmatalLake.jpeg",
      firstPara:
        "Soaked in mythologies, Brahmatal Lake is located in Chamoli district of Uttarakhand. According to Hindu belief, lord Brahma (the Creator) had meditated beside this lake and hence it got its name as Brahmatal Lake or Brahma's lake. It had become a good trekking spot because of its proximity to plains as well as breathtaking views of some of the famous peaks of Mt Trisul and Mt Nanda Gunti.",
      secondPara:
        "The lake is 3718 m above sea level. There is a big camping ground near the lake. The lake has religious significance and needs to be respected according to local traditions.",
    },
    {
      id: 69,
      name: "Gopinath Temple",
      district: "chamoli",
      img: "../images/Tourism/Gopinath.jpg",
      firstPara:
        "Gopinath Temple is an ancient Hindu temple dedicated to Shiva in Gopeshwar, Chamoli District, Uttarakhand, India.[1] It is situated in Gopeshwar village now part of Gopeshwar town. The temple stands out in its architectural proficiency; it is topped by a magnificent dome and the 30 sq ft (2.8 m2) sanctum sanctorum, which is aessible by 24 doors.",
      secondPara:
        "The remains of broken idols found around the temple testify the existence of several more temples in ancient times. There is a trident, in the courtyard of the temple, about 5 m high, made of eight different metals, which dates back to the 12th century. It boasts the inscriptions attributed to Ashokchalla, the king of Nepal who reigned in the 13th century. Four short inscriptions written in Devanagri, which dates back to a later period, are yet to be deciphered, barring one. Legend is that the trident got fixed in this spot, when Lord Shiva threw it at Lord Kama to kill him. The metal of the trident is not weathered by the elements and this is a wonder. The legend goes that the trident belonged to Shiva who threw it at Kamdeva (The God Of Love) to kill him and it got fixed in this spot. It is believed that while brute force can not move this Trident, the slightest touch by a true devotee can cause a tremor in it. The metal of the trident does not appear to have become weathered by the elements over the century.",
    },
    {
      id: 70,
      name: "Vasudhara waterfall",
      district: "chamoli",
      img: "../images/Tourism/Vasudhara.jpg",
      firstPara:
        "Uttarakhand is surrounded by waterfalls. Vasudhara waterfall is set in the background of a 145 m cliff. Nearby mountains are Chaukhamba, Nilkantha and Balakun.The falls flow into the river Alaknanda, flowing towards Badrinath Temple. The distance from Badrinath to Vasudhara is 9 km.",
      secondPara:
        "The height of this waterfall is 400 ft (120 m).Satopanth glacier sits near the bottom of Vasudhara.[1] Satopanth Tal is 25 km from Badrinath. Laxmi van (forest) is on the way to Satopanth glacier from Vasudhara. Mana Village and Vasudhara Fall are usually accessible to tourists from the second week of May to October or November when Badrinath temple is open to the general public. Badrinath is accessible by motor vehicles from Rishikesh, the nearest railway station.",
    },
    {
      id: 71,
      name: "Gurdwara Hemkund Sahib",
      district: "chamoli",
      img: "../images/Tourism/Hemkund.jpg",
      firstPara:
        "Hemkund Sahib (also spelled Hemkunt), formally known as Gurudwara Shri Hemkund Sahib Ji, is a Sikh place of worship and pilgrimage site in Chamoli district, Uttarakhand, India. It is devoted to Guru Gobind Singh (1666–1708), the tenth Sikh Guru, and finds mention in Dasam Granth. With its setting of a glacial lake surrounded by seven mountain peaks, each adorned by a Nishan Sahib on its cliff, it is according to the Survey of India located in the Garhwal Himalaya at an elevation of 4,160 metres (13,650 feet).[3] It is approached from Govindghat on the Rishikesh-Badrinath highway. The main town near Gobindghat is Joshimath. The elevation of the lake at Hemkund is approximately 13,650 feet.",
      secondPara:
        "Hemkund is a Sanskrit name derived from Hem (\"Snow\") and Kund (\"bowl\"). Dasam Granth says this is the place where Pandu Raja practised Yoga. In addition, the Dasam Granth says that in a former life, Guru Gobind Singh meditated intensely at Hemkund on Akaal.[4]",
    },
    {
      id: 72,
      name: "Lansdowne",
      district: "pauri garhwal",
      img: "../images/Tourism/Lansdowne.jpg",
      firstPara:
        "Lansdowne was founded and named after then Viceroy of India (1888-1894), Lord Lansdowne in 1887, and by 1901 it had a population of 3943. Lansdowne was developed by the British for catering for the Recruits Training center of the Garhwal Rifles. Lansdowne was a major place of the activities of freedom fighters from British Garhwal during British period. Nowadays, the famous Garhwal Rifles of the Indian Army has its regimental center here.[3] Lansdowne is one of the quietest hill stations of India and is popular since the British came to India. Lansdowne is unlike other hill stations as it is well connected with motorable roads but remote in its own way. It is situated at an altitude of 1,706 m above sea level surrounded with thick oak and blue pine forests in the Pauri Garhwal district of Uttarakhand state.",
      secondPara:
        "The War Memorial, at the Parade Ground of the Garhwal Rifles Center, is an attraction for the visitors. Prior permission from the military authority has to be obtained. Places of interest around the city include Tip n Top View Point, Kaleshwar Mahadev Temple, which is the most visited Temple in Lansdowne and attracts thousands of devotees during the month of Sawan (Indian Monsoon), Santoshi Mata Temple, Regimental Museum (also called the Darwan Singh Sanghralaya), Bhullatal Lake, St. Mary's Church, and Lover's lane. Excursions from the city can go to the Tarkeshwar Mahadev Temple, Bhairav Garhi Temple, Bhim Pakora. The Annual ‘Sharadotsava’ (Festival of Autumn) is also organized at this hill station during the autumn season. The old cemetery is in Kitchner Lines. Many war veterans have been laid to rest in the old cemetery and the graves date back to the mid-1850s.",
    },
    {
      id: 73,
      name: "Dhari Devi",
      district: "pauri garhwal",
      img: "../images/Tourism/DhariDevi.jpeg",
      firstPara:
        "Dhari Devi a Hindu temple located on the banks of the Alaknanda River between Srinagar and Rudraprayag in the Garhwal Region of Uttarakhand, India. The temple is home to the upper half of the idol of the goddess Dhari, while the lower half of the idol is located in Kalimath, where she is worshipped as a manifestation of the Goddess Kali.",
      secondPara:
        "She is considered to be the guardian deity of Uttarakhand and is revered as the protector of the Char Dham’s.[1][2] Her shrine is one of 108 Shakti Sthals in India, as numbered by Srimad Devi Bhagwat",
    },
    {
      id: 74,
      name: "Khirsu",
      district: "pauri garhwal",
      img: "../images/Tourism/Khirsu.jpg",
      firstPara:
        "Khirsu is a hill station in a Pauri Garhwal district of the state of Uttarakhand, India. Khirsu is a situated at an altitude of 1760 m. with 19 KM towards north from Pauri and 160 KM from Dehradun city towards west.Khirsu is famous for its scenic background. From this hill station one can see spectacular 300 km-wide panoramic view of the Himalayas, including snow-crested Trishul, Nanda Devi, Nandakot, Chaukhamba and Panchchuli peaks.",
      secondPara:
        "Perched at a height of 1,700 m, Khirsu is dotted with dense pine and deodar forests, which make for excellent venues for nature walks and hikes. The hamlet is endowed with lush orchards of apples and wildflowers of every kind. The village is also an agricultural hub and surrunding it are picturesque terrace farms.",
    },
    {
      id: 75,
      name: "Tip N Top",
      district: "pauri garhwal",
      img: "../images/Tourism/TipNTop.jpg",
      firstPara:
        "A small hill top viewpoint in Lansdowne, Tip N Top also known  as the name suggests is one of the highest places in Lansdowne. Located at just 1.5 km from main Lansdowne city centre, Tip in Top is best place in Lansdowne to watch complete skyline with magnificent Shivalik range. ",
      secondPara:
        "Tip and Top is a perfect place to view some of the panoramic Garhwal hills with majestic Himalayan range at the backdrop. At 1700 mtrs height, visitors experiences the unmatched beauty of the Lansdowne. Still an uncrowded place in Lansdowne, Tip N Top attracts visitors to take some salubrious Himalayan air with a peaceful mind. There is a beautiful hut house provided by GMVN for night stay.En-route to Tip N Top and surrounding area is full of pine and oak forest. One can also witness a uncounted number of hills top and long series of snow capped Himalayas from Tip N Top.",
    },
    {
      id: 76,
      name: "Chaukhamba",
      district: "pauri garhwal",
      img: "../images/Tourism/Chaukhamba.jpg",
      firstPara:
        "Chaukhamba is a mountain massif in the Gangotri Group of the Garhwal Himalaya. Its main summit, Chaukhamba I, is the highest peak in the group. It lies at the head of the Gangotri Glacier and forms the eastern anchor of the group.[5] It is located in the northern Indian state of Uttarakhand, west of the Hindu holy town of Badrinath. Chaukhamba has four summits, along a northeast-southwest trending ridge, and ranging in elevation from 7,138 metres (23,419 ft) to 6,854 m (22,487 ft) with an average elevation 7,014 m;[3] the main summit is at the northeast end. Chaukamba I	7,138 m (23,419 ft), Chaukamba II	7,070 m (23,196 ft), Chaukamba III	6,995 m (22,949 ft), Chaukamba IV	6,854 m (22,487 ft)",
      secondPara:
        "After unsuccessful attempts in 1938 and 1939, Chaukhamba I was first climbed on 13 June 1952, by Lucien George and Victor Russenberger (Swiss members of an otherwise French expedition). They ascended the northeast face, from the Bhagirathi-Kharak Glacier.[4] The other members of the expedition were the French alpinist and traveler Marie-Louise Plovier Chapelle and the renown French alpinist and climber Edouard Frendo. Chaukhamba I is an ultra-prominent peak, with a prominence of more than 1,500m. Mana Pass is the key col for Chaukhamba I.",
    },
    {
      id: 77,
      name: "Kedarnath",
      district: "rudraprayag",
      img: "../images/Districts/rudrapryag.jpg",
      firstPara:
        "Kedarnath is a town and Nagar Panchayat in Rudraprayag district of Uttarakhand, India, known primarily for the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites. It is located in the Himalayas, about 3,583 m (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the Mandakini river. The town is flanked by snow-capped peaks, most prominently the Kedarnath Mountain. The nearest road head is at Gaurikund about 16 km away. The town suffered extensive destruction during June 2013 from the Flash Floods caused by torrential rains in Uttarakhand state.",
      secondPara:
        "The name \"Kedarnath\" means \"the Lord of the Field\". It is derived from the Sanskrit words kedara (\"field\") and natha (\"lord\"). The text Kashi Kedara Mahatmya states that it is so-called because \"the crop of liberation\" grows here.",
    },
    {
      id: 78,
      name: "Guptakashi",
      district: "rudraprayag",
      img: "../images/Tourism/Guptkashi.jpg",
      firstPara:
        "Guptakashi, Gupta Kashi or Guptkashi is a fairly large town located at an elevation of 1,319 metres (4,327 ft) in the Kedar-khanda ('khanda' means \"sector\"), in Garhwal Himalayas of Rudraprayag district in Uttarakhand, India. It is known for its ancient Vishwanath Temple dedicated to the god Shiva, which is similar to the one in Varanasi (Kashi). The other well known temple here is dedicated to Ardhanareshvara, a half man half woman form of Shiva and Parvati. The name Guptakashi has legendary significance linked to the Pandavas, the heroes of the Hindu epic Mahabharata.[1][2][3] Its religious importance is considered next to that of Varanasi, believed to be the most pious of all Hindu pilgrimage sites.",
      secondPara:
        "The temple town is located on the way to the Kedarnath, one of the Chota Char Dhams and Panch Kedars. It has the scenic backdrop of the snow-covered peaks of Chaukhamba and enjoys a salubrious weather throughout the year.",
    },
    {
      id: 79,
      name: "Ukhimath",
      district: "rudraprayag",
      img: "../images/Tourism/ukhimath.jpg",
      firstPara:
        "Ukhimath (also spelled Okhimath) is a small town and a Hindu pilgrimage site in Rudraprayag district, Uttarakhand in India. It is situated at an elevation of 1,311 meters and at a distance of 41 km from Rudraprayag. During the winter, the Utsava Idols from the Kedarnath Temple, and Madhyamaheshwar Temple are brought to Ukhimath and worshipped here for six months. Ukhimath can be used as center destination for visiting different places located nearby, the Madhyamaheshwar Temple, Tungnath Temple and Deoria Tal (a natural fresh water lake) and many other picturesque places.[1] According to Hindu Mythology, the wedding of Usha (Daughter of Banasura) and Aniruddha (Grandson of Lord Krishna) was solemnized here. By name of Usha this place was named as Ushamath, now known as Ukhimath. King Mandhata had performed severe penances to Lord Shiva here. During the winter, the Kedarnath and Madhyamaheshwar Temples are closed due to heavy snowfall in the area. As a result, the Utsava Idols of Kedarnath and Madhyamaheshwar are brought from Kedarnath and Madhyamaheshwar to the Omkareshwar Temple in Ukhimath. The winter puja of Kedarnath and Omkareshwar (the presiding deity of Ukhimath) is performed here. The Omkareshwar Temple is located at Ukhimath, which is at a distance of 41 km from Rudraprayag.",
      secondPara:
        "",
    },
    {
      id: 80,
      name: "Kartik Swami Temple",
      district: "rudraprayag",
      img: "../images/Tourism/KartikSwami.jpg",
      firstPara:
        "Kartik Swami Temple is situated on top of a hill at an altitude of 3050 meters near Kanak Chauri village on Rudraprayag-Pokhari road in Rudraprayag district of Uttarakhand . Kartik Swami Temple is dedicated to Lord Shiva's elder son, Kartikeya, who offered his bones as a proof of his devotion to his father. The incident is believed to have happened here. Lord Karthik Swamy is also known as Karthik Murugan Swamy in the southern part of India.",
      secondPara:
        "The continuous sound of hundreds of bells hanging in the temple can be heard at a distance of about 800 meters from there. A flight of 80 steps from the main road takes you to the sanctum sanctorum of the temple or the place where the idol is kept. The sandhya aarti or evening prayer, the chanting of mantras and sometimes the maha-bhandara or grand banquet held at the temple is a special attraction for devotees and tourists.",
    },
    {
      id: 81,
      name: "Chopta",
      district: "rudraprayag",
      img: "../images/Tourism/Chopta.jpg",
      firstPara:
        "Chopta is a small region of meadows and evergreen forest area, a part of Kedarnath wildlife sanctuary located in Uttarakhand state, India and a base for trekking to Tungnath, the third temple of Panch Kedar which lies 3.5 kilometres (2.2 mi) away. Located at a distance of 1.5 kilometres (0.93 mi) from Tungnath is Chandrashila, a summit rising to over 4,000 metres (13,000 ft).",
      secondPara:
        "Chopta is an unspoiled natural destination lying in the lap of the Uttarakhand Himalayas and offers views of the imposing Himalayan range including Trishul, Nanda Devi and Chaukhamba. It is located at an elevation of 2,709 metres (8,888 ft) above sea level. Chopta village is surrounded by forests of pine, deodar and rhododendron and is rich in flora and fauna include rare species of birds and musk deer.",
    },
    {
      id: 82,
      name: "Tungnath",
      district: "rudraprayag",
      img: "../images/Tourism/Tungnath.png",
      firstPara:
        "Tungnath (IAST:tuņgnāth) is one of the highest Shiva temples in the world[1] and is the highest of the five Panch Kedar temples located in the Rudraprayag district, in the Indian state of Uttarakhand. The Tungnath (literal meaning: Lord of the peaks) mountains form the Mandakini and Alaknanda river valleys. It is located at an altitude of 3,690 m (12,106 ft), and just below the peak of Chandrashila.[2] It has a rich legend linked to the Pandavas, heroes of the Mahabharata epic.",
      secondPara:
        "",
    },
    {
      id: 83,
      name: "Vasuki Tal",
      district: "rudraprayag",
      img: "../images/Tourism/VasukiTal.jpg",
      firstPara:
        "Vasuki Tal is a pristine lake that lies at a height of 4,135 m, a short distance from Kedarnath. It is nourished by water from the snow-clad mountains, and glaciers like the Vasuki Glacier and the Chor Bamak Glacier. Many icebergs float in the lake, and the waters reflect the Kedarnath peaks. The Vasuki Ganga river also originates from this lake. From here, you can get stunning views of Chaukhamba Peak.",
      secondPara:
        "",
    },
    {
      id: 84,
      name: "Triyuginarayan Temple",
      district: "rudraprayag",
      img: "../images/Tourism/Triyuginarayan.jpg",
      firstPara:
        "Triyuginarayan Temple (Sanskrit: त्रियुगी-नारायण) is a Hindu temple located in the Triyuginarayan village in Rudraprayag district, Uttarakhand, India. The ancient temple is dedicated to god Vishnu. Its fame is credited to the legend of god Shiva's marriage to goddess Parvati witnessed by Vishnu at this venue and is thus a popular Hindu pilgrimage sites. A special feature of this temple is a perpetual fire, that burns in front of the temple. The flame is believed to burn from the times of the divine marriage.[3] Thus, the temple is also known as Akhand Dhuni temple. The temple courtyard is also the source of a water stream, which fills three sacred bathing ponds (kunds) nearby.",
      secondPara:
        "The word \"Triyugi Narayan\" is formed of three words \"tri\" means three, \"yugi\" denotes the period of time - Yuga and \"Narayan\" is another name of Vishnu. Pilgrims have been offering wood to the fire in the havana-kund (fireplace) since the three Yugas - hence the place is given the name \"Triyugi Narayan\".[1] Yuga in Hindu philosophy is the name of an epoch or era within a cycle of four ages. The four Yugas are Satya Yuga (1,728,000 human years), Treta Yuga (1,296,000 years), the Dvapara Yuga (864,000 years) and finally Kali Yuga (432,000 years), which is the present Yuga. The name \"Akhand Dhuni temple\" also originates from the eternal flame legend, \"Akhand\" means perpetual and \"Dhuni\" means flame.",
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
              <h1 className="text-center text-3xl md:text-4xl capitalize font-arial">
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
                <div className=" flex flex-col justify-center items-center p-1 w-full md:w-3/4">
                  <p className="px-1 pt-2">{firstPara}</p>
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

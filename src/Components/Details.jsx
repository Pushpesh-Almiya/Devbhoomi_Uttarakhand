import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tourism from './Tourism';
import SlideBar from './Carousel';

function Details() {
  const[backToTop, setBackToTop]=useState(false)
    const params = useParams()
    const [districtDetails, setDistrictDetails]=useState([
      {
        name:"almora",
        Img1 :"../images/Districts/Almora3.jpg",
        Img2 :"../images/Districts/Almora.png",
        Img3 :"../images/Districts/Almora1.jpg",
        Img4 :"../images/Districts/Almora2.jpg",
        Img5 :"../images/Districts/Almora4.jpg",
        about:"Almora (Kumaoni: Almāḍ) is a municipal board and a cantonment town in the state of Uttarakhand, India. It is the administrative headquarters of Almora district.[4] Almora is located on a ridge at the southern edge of the Kumaon Hills of the Himalaya range. The Koshi (Kaushiki) and Suyal (Salmale) rivers flow along the city and snow-capped Himalayas can be seen in the background.Almora was founded in 1568.[5] by King Kalyan Chand;[6][7][8] however, there are accounts of human settlements in the hills and surrounding region in the Hindu epic Mahabharata[9] (8th and 9th century BCE[10]). Almora was the seat of Chand kings that ruled over the Kumaon Kingdom. It is considered the cultural heart of the Kumaon region of Uttarakhand.According to the provisional results of the 2019 national census of India, Almora had a population of about 179,000.[citation needed] Nestled within higher peaks of the Himalaya, Almora enjoys a year-round mild temperate climate. The town is visited by thousands of tourists annually from all over the world.[citation needed] There are 11 blocks (i.e. VikashKhand) in Almora district.",
        history:"Almora got its name from Bhilmora, a kind of sorrel (although some have tried to derive it from Berberis \"kilmora\"[11][12]), a short plant commonly found there[13] which was used for washing the utensils of the sun temple at Katarmal. The people bringing the Bhilmora/kilmora were called Bhilmori/Kilmori and later \"Almori\" and the place came to be known as \"Almora\".When king Bhishm Chand laid the foundation of the town, he had initially named it Alamnagar. Prior to that, Almora was known as 'Rajapur' during the early phase of Chand rule.[16][17][18] The name 'Rajpur' is also mentioned over a number of ancient copper plates.[18] There is still a place called Rajpur in Almora."
      },
      {
        name:"bageshwar",
        Img1 :"../images/Districts/Bageshwar2.jpg",
        Img2 :"../images/Districts/Bageshwar1.jpg",
        Img3 :"../images/Districts/Bageshwar.jpg",
        Img4 :"../images/Districts/Bageshwar3.jpg",
        Img5 :"../images/Districts/Bageshwar4.jpeg",
        about:"Bageshwar is a district of Uttarakhand state in northern India. The town of Bageshwar is the district headquarters. Prior to its establishment as a district in 1997 it was part of Almora district. Bageshwar district is in Kumaon, and is bounded on the west and northwest by Chamoli District, on the northeast and east by Pithoragarh District, and on the south by Almora District.As of 2011 it is the third least populous district of Uttarakhand (out of 13), after Rudraprayag and Champawat.",
        history :"The area, that now forms Bageshwar district, was historically known as Danpur, and was ruled by Katyuris during the 7th century AD. After the disintegration of the Katyuri kingdom in the 13th century, the area remained under the rule of Baijnath Katyurs, direct descendants of Katyuri kings.[4] In 1565, king Balo Kalyan Chand annexed Danpur along with Pali, Barahmandal and Mankot to Kumaun.In 1791, Almora, the seat of the Kumaon, was invaded and annexed by the Gorkhas of Nepal.[6] The Gorkhas ruled the region for 24 years and were later defeated by the East India Company in 1814,[7][8][9] and were forced to cede Kumaon to the British as part of the Treaty of Sugauli in 1816.[10]: 594 [11] After its annexation by British, Bageshwar was a part of the Danpur pargana in Almora district of United Provinces. Bageshwar was made a separate tehsil in 1974, and in 1976 it was declared a pargana, after which, it formally came into being as a large administrative center. Since 1985, the demand for declaring it a separate district of different parties and regional people started, and finally, in September 1997, Bageshwar was made the new district of Uttar Pradesh by Chief Minister Mayawati"
      },{
        name:"champawat",
        Img1 :"../images/Districts/Champawat1.jpg",
        Img2 :"../images/Districts/Champawat.jpg",
        Img3 :"../images/Districts/Champawat2.jpg",
        Img4 :"../images/Tourism/MountAbbott.jpg",
        Img5 :"../images/Tourism/Baleshwar.jpg",
        about:"Champawat district is a district of Uttarakhand state in northern India. The town of Champawat is the administrative headquarters. The district of Champawat constituted in the year 1997. The district is divided into five tehsils: Barakot, Lohaghat, Pati, Purnagiri, and Champawat. There is 2 Sub Tehsil: Pulla and Munch.[2] The largest and the main city of the district is Tanakpur.Champawat district is part of the eastern Kumaon division of Uttarakhand. It is bounded on the north by Pithoragarh district, on the east by Nepal, on the south by Udham Singh Nagar district, on the west by Nainital district, and on the northwest by Almora district.As of 2011 it is the second least populous of the 13 districts of Uttarakhand, after Rudraprayag.",
        history:"Champawat district was formerly a part of almora district. In 1972, the part came under pithoragarh district. In 1997 september 15, champawat was declared an individual, independent district.Champawat is valued in uttarakhand as the place of origin of culture and religion in uttarakhand region. The champawat land is considered to be the home of naga and kinnar described in hindu mythology. The region was ruled by khash kings in past. Historical pillars, monuments, manuscripts, archeological collections and folklores of the region are the evidences to its historical importance.  The manuscripts make it clear that katyur dynasty ruled the region in the past.Champawat district is one among 13 districts of uttarakhand state, india. Champawat district administrative head quarter is champawat. It is is located 266 km west towards state capital dehradun . Champawat district population is 259648 approx. It is 12 th largest district in the state by population."
      },{
        name:"nainital",
        Img1 :"../images/Districts/nainital1.jpg",
        Img2 :"../images/Districts/Nainital.jpg",
        Img4 :"../images/Tourism/NainaDevi.jpg",
        Img3 :"../images/Tourism/kainchi.jpg",
        Img5 :"../images/Tourism/Bhimtal.jpg",
        about:"Nainital is a town and headquarters of Nainital district of Kumaon division, Uttarakhand, India. It is the judicial capital of Uttarakhand, the High Court of the state being located there and is the headquarters of an eponymous district. It also houses the Governor of Uttarakhand,[7] who resides in the Raj Bhavan. Nainital was the summer capital[8] of the United Provinces. Nainital is located in the Kumaon foothills of the outer Himalayas at a distance of 285 km (177 mi) from the state capital Dehradun and 345 km (214 mi) from New Delhi, the capital of India. Situated at an altitude of 1,938 metres (6,358 ft) above sea level, the town is set in a valley containing an eye-shaped lake, approximately two miles in circumference, and surrounded by mountains, of which the highest are Naina Peak (2,615 m (8,579 ft)) on the north, Deopatha (2,438 m (7,999 ft)) on the west, and Ayarpatha (2,278 m (7,474 ft)) on the south. From the tops of the higher peaks, \"magnificent views can be obtained of the vast plain to the south, or of the mass of tangled ridges lying north, bound by the great snowy range which forms the central axis of the Himalayas.\"[9] The hill station attracts tourists round the year.",
        history:"The Krol group of rocks, comprising slates, marls, sandstones, limestones and dolomites with a few small dykes intrusives, is the dominant geological formation of Nainital's surroundings, although, Nodules, laminae and stringers of phosphatic material, followed upward by the purple-green shales intercalated with muddy fine-grained sandstone and siltstone; recognised as the Tal Formation; are also prevalent. The region has a complex geological framework; the rocks are fragile and newly formed. The town is completely located in the catchment area of the Nainital lake, which has highly folded and faulted rocks due to polyphase deformation.Landslides are a frequent occurrence in the hill slopes surrounding the lake, which are steep. The slopes are highly vulnerable to landslides and mass movement due to various geological and human factors. The first known landslip occurred in Nainital in 1866 on Alma hill, and in 1879 there was a larger one at the same spot. The greatest landslide in Nainital occurred on 18 September 1880, on the slope which rising from the north of the flats ends at Alma peak, and resulted in 151 people being buried under the debris.[12] Another heavy landslip occurred on 17 August 1898 outside the Nainital valley."
      },{
        name:"udham singh nagar",
        Img1 :"../images/Districts/US-Nagar1.jpg",
        Img2 :"../images/Districts/US-nagar.jpg",
        Img3 :"../images/Districts/US-Nagar3.jpg",
        Img4 :"../images/Districts/US-Nagar2.jpg",
        Img5 :"../images/Tourism/NanakMatta.jpg",
        about:"Udham Singh Nagar District is a district of Uttarakhand state in northern India. Rudrapur is the district headquarters. This district consists of nine Tehsils named Bajpur, Gadarpur, Rudrapur, Jaspur, Kashipur, Kichha, Khatima, Sitarganj, Nanakmatta. The district is located in the Terai region, and is part of Kumaon Division. It is bounded on the north by Nainital District, on the northeast by Champawat District, on the east by Nepal, and on the south and west by Bareilly, Rampur, Moradabad, Pilibhit and Bijnor District of Uttar Pradesh state. The district was created on 29 September 1995,[7][8] by Mayawati government out of Nainital District. It is named for freedom fighter and Indian revolutionary Udham Singh.As of 2011, it is the third most populous district of Uttarakhand (out of 13), after Haridwar and Dehradun.[2]",
        history:"From nature lovers and spiritual seekers to those looking to escape the daily grind – the district of Udham Singh Nagar has something for every kind of traveller. Be it pilgrimages to one of the numerous revered sites of worship, enjoying a fun-filled picnic with family and friends at one of the lakes or just taking in the serene beauty of the surroundings – there is never a dull moment here. The uniqueness of this district lies in the fact that it is home to communities from several Indian states – Jammu & Kashmir, Kerala, Punjab, Haryana, Rajasthan and more – who live in harmony, reiterating the age-old saying 'unity in diversity'.The district headquarter is located in Rudrapur, which is said to have derived its name from king Rudra Chandra, a tribal chief. According to history, in 1588, Mughal emperor Akbar handed the land to king Rudra, who set up a military camp with the intention of ridding Terai of frequent invasions.A largely industrial and agricultural district, Udham Singh Nagar was a part of the Nainital district before it gained the identity of a separate district in October 1995. Known as the 'food bowl of Uttarakhand' and 'chawal ki nagari', the district was named in the memory of Late Shri Udham Singh, a great freedom fighter."
      },{
        name:"pithoragarh",
        Img2 :"../images/Districts/Pithoragarh1.jpg",
        Img1 :"../images/Districts/Pithoragarh.jpg",
        Img3 :"../images/Tourism/Munsyari.jpg",
        Img4 :"../images/Tourism/Dharchula.jpg",
        Img5 :"../images/Tourism/OmParvat.jpeg",
        about:"Pithoragarh (Kumaoni: Pithor'garh) is a Himalayan town with a Municipal Board in Pithoragarh district in the Indian state of Uttarakhand. It is the largest and unplanned town in Kumaon hills. It is an education hub of the hilly region as the town has Laxman Singh Mahar Govt.P.G.College, Seemant Institute of Technology, now known as Nanhi Pari Seemant Engineering Institute and a nursing college.",
        history:"Pithoragarh city and its surrounding areas were part of the Manaskhand region, which extended from the Kailash Mountain in the north to Bhabar & Terai in the south, as mentioned in the Skanda Purana.[4]: 12  The Asuras and Nagas appear to be the earliest inhabitants of the region, who were later superseded by the Kiratas, Khasas and the Kunindas.[4]: 13  The Kuninda Kings of the region may have become the feudatories of The Kushana Kings, who held their sway over the region in the last quarter of the 1st century AD.[4]: 16  The region subsequently came under the Kurmanchal kingdom, which had its capital first at Jyotirmath and then at Karikeyapura (Modern day Baijnath) in the Katyur Valley.Upon the disintegration of the Katyuris and fall of kingdom in 13th century, Pithoragarh came under the rule of Bam kings of Saur. The Bam kings were feudal to the Raikas of Doti and was a branch of katyuri kings, and had their capital at Udaipur near Pithoragarh, However, the Rajas used to come down to Rameshwar and Bailorkol during the winter months. In the fifteenth century, King Bharti Chand of Champawat amassed a huge army, and started plundering and killing in the regions ruled by the Doti Kings. This resulted in a war, which lasted for 12 years, and ended with a victory for the Chands.[6]: 213–214  After the death of Bharti Chand in 1462, Nagmalla, the king of Doti attacked his son, Ratna Chand who was successful in defending himself.[6]: 213–214  Nagmalla was killed in the war and the Bams became feudatories of the Chands.[6]: 215–216  The pargana of Saur came under direct control of the Kingdom of Kumaon in the sixteenth century during the rule of King Balo Kalyan Chand, when it was given to him by the Raika king of Doti as dowry for marrying his Daughter."
      },{
        name:"dehradun",
        Img1 :"../images/Districts/dehradun1.jpg",
        Img2 :"../images/Districts/dehradun.jpg",
        Img3 :"../images/Tourism/MalsiDeerPark.jpg",
        Img4 :"../images/Tourism/Massourie.jpg",
        Img5 :"../images/Tourism/Sahasradhara.jpg",
        about:"Dehradun (/ˌdɛrəˈduːn/), also known as Dehra Doon, is the capital and the most populous city of the Indian state of Uttarakhand. It is the administrative headquarters of the eponymous district and is governed by the Dehradun Municipal Corporation, with the Uttarakhand Legislative Assembly holding its winter sessions in the city as its winter capital.[13] Part of the Garhwal region, and housing the headquarters of its Divisional Commissioner. Dehradun is one of the \"Counter Magnets\" of the National Capital Region (NCR) being developed as an alternative center of growth to help ease the migration and population explosion in the Delhi metropolitan area and to establish a smart city in the Himalayas.[14][15] It is the third largest city in the Himalayas after Kathmandu and Srinagar. Dehradun is located in the Doon Valley on the foothills of the Himalayas nestled between Song river, a tributary of Ganga on the east and the Asan river, a tributary of Yamuna on the west. The city is noted for its picturesque landscape and slightly milder climate and provides a gateway to the surrounding region.",
        history:"Dehradun is a notable academic and research hub and is home to the Indian Military Academy, Forest Research Institute, Indira Gandhi National Forest Academy, The Doon School, Welham Boys School, Welham Girls School, Brightlands School, Rashtriya Indian Military College, Uttarakhand Ayurveda University, Wadia Institute of Himalayan Geology and the Indian Institute of Remote Sensing. It is the headquarters of the Surveyor-General of India. According to the combined survey based on health, infrastructure, economy, education, and crime, conducted by Dainik Jagran and KPMG, Dehradun is one of India's safest cities.[16][17] Dehradun is also known for its Basmati rice and bakery products.Also known as the Abode of Drona,[18] Dehradun has been an important center for Garhwal rulers and was captured by the British. For its strategic value, in addition to the location of its principal service academy, the Indian Armed Forces maintain a considerable presence in Dehradun, at the Garhi Cantonment and Naval Station. The Uttarakhand Police is the primary law enforcement agency in the city."
      },{
        name:"haridwar",
        Img1 :"../images/Districts/Haridwar1.jpg",
        Img2 :"../images/Districts/Haridwar.jpg",
        Img3 :"../images/Tourism/HariKiPauri.jpg",
        Img4 :"../images/Tourism/Rajaji.jpg",
        Img5 :"../images/Districts/Haridwar2.jpg",
        about:"Haridwar  (Old name Mayapuri) is a city and municipal corporation in the Haridwar district of Uttarakhand, India. With a population of 228,832 in 2011, it is the second-largest city in the state and the largest in the district.The city is situated on the right bank of the Ganges river, at the foothills of the Shivalik ranges.[5] Haridwar is regarded as a holy place for Hindus, hosting important religious events and serving as a gateway to several prominent places of worship. Most significant of the events is the Kumbha Mela, which is celebrated every 12 years in Haridwar. During the Haridwar Kumbh Mela, millions of pilgrims, devotees, and tourists congregate in Haridwar to perform ritualistic bathing on the banks of the Ganges to wash away their sins to attain moksha.",
        history:"According to Puranic legend, Haridwar, along with Ujjain, Nashik, and Prayag, is one of four sites where drops of amrita,[6] the elixir of immortality, accidentally spilled over from a kumbha (pitcher) while being carried by the celestial bird Garuda during the Samudra Manthana, or the churning of the ocean of milk.[7] Brahma Kund, the spot where the amrita fell, is believed to be located at Har ki Pauri (literally, \"footsteps of the Lord\") and is considered to be the most sacred ghat of Haridwar.[8] It is also the primary centre of the Kanwar pilgrimage, in which millions of participants gather sacred water from the Ganges and carry it across hundreds of miles to dispense as offerings in Shiva shrines.[9] Today, the city is developing beyond its religious importance with the fast-developing industrial estate of the State Industrial Development Corporation of Uttarakhand (SIDCUL), and the close by township of Bharat Heavy Electricals Limited (BHEL), as well as its affiliated ancillaries. Haridwar presents a kaleidoscope of Indian culture and development. In sacred writings, it has been differently specified as Kapilsthan, Gangadwar and Mayapuri. It is additionally a passage for the Chota Char Dham (the four principal pilgrim destinations in Uttarakhand). Subsequently, Shaivites (devotees of Shiva) and Vaishavites (devotees of Vishnu) call the city Hardwar and Haridwar, respectively, Har meaning Shiva and Hari, Vishnu."
      },{
        name:"tehri garhwal",
        Img1 :"../images/Districts/tehri1.jpg",
        Img2 :"../images/Districts/tehri.jpg",
        Img3 :"../images/Districts/Tehri2.jpg",
        Img4 :"../images/Tourism/TehriDam.jpg",
        Img5 :"../images/Tourism/Kanatal.jpg",
        about:"Tehri Garhwal is a district in the hill state of Uttarakhand, India. Its administrative headquarters is at New Tehri.[2] The district has a population of 618, 931 (2011 census), a 2.35% increase over the previous decade. It is surrounded by Rudraprayag District in the east, Dehradun District in the west, Uttarkashi District in the north, and Pauri Garhwal District in the south. Tehri Garhwal is a part of the Himalayas.",
        history:"Prior to 734 CE, the region was divided into 48 garh which were ruled by independent kings. These garh were brought into one province by Kanakpal, a prince of Malwa. Kanakpal, on his visit to Badrinath, had met the then mightiest king Bhanu Pratap who later married his only daughter to the prince and handed over his kingdom to him. Kanakpal Singh and his descendants gradually conquered all the garh and ruled the whole of Garhwal Kingdom for the next 915 years, up to 1803."
      },{
        name:"uttarkashi",
        Img1 :"../images/Districts/Uttarkashi1.jpg",
        Img2 :"../images/Districts/Uttarkashi.jpg",
        Img3 :"../images/Districts/Uttarkashi2.jpg",
        Img4 :"../images/Tourism/NIM.jpg",
        Img5 :"../images/Tourism/Harshil.jpeg",
        about:"Uttarkashi, meaning Kashi of the north, is a town located in Uttarkashi district in Uttarakhand, India. Uttarkashi town is headquarters of the district. Uttarkashi is also known as Somya Kashi. Uttarkashi is a Hindu religious place for spiritual and adventurous tourism. Uttarkashi town is also called as Shivnagri. The town has number of temples and ashrams. Uttarkashi is known for its religious people, weather, education.",
        history:"It is the district headquarters of Uttarkashi district. Uttarkashi is situated on the banks of river Bhagirathi at an altitude of 1158 m above sea level. Uttarkashi is generally known as a holy town close to Rishikesh. It is located in the state of Uttarakhand in India. Uttarkashi is home to a number of ashrams and temples and also to the Nehru Institute of Mountaineering. The name of the town reflects its similarity to and location (as north of) the city of Kashi (Varanasi). Similar to Varanasi, town of Uttarkashi is situated on the Ganges, lies next to a hill named Varunavat, on confluence of two rivers Varuna and Asi, has a ghat called Manikarnika Ghat and has a temple dedicated to Shiva similar to (Kashi Vishwanath Temple) in Varanasi, in the center of the town."
      },{
        name:"chamoli",
        Img1 :"../images/Districts/Chamoli1.jpg",
        Img2 :"../images/Districts/Chamoli.jpg",
        Img3 :"../images/Districts/Chamoli2.jpg",
        Img4 :"../images/Tourism/Vasudhara.jpg",
        Img5 :"../images/Tourism/Hemkund.jpg",
        about:"Chamoli district is a district of the Uttarakhand state of India.[4] It is bounded by the Tibet region to the north, and by the Uttarakhand districts of Pithoragarh and Bageshwar to the east, Almora to the south, Pauri Garhwal to the southwest, Rudraprayag to the west, and Uttarkashi to the northwest. The administrative headquarters of Chamoli district is in Gopeshwar.Chamoli hosts a variety of destinations of pilgrim and tourist interest including Badrinath, Hemkund Sahib and Valley of Flowers. Chipko movement was first started in Chamoli.",
        history:"The region covered by the district of Chamoli formed part of the Pauri Garhwal district till 1960. It occupies the northeastern corner of the Garhwal tract and lies in the central or mid-Himalayas in the very heart of the snowy range described in ancient books as Bahirgiri, one of the three divisions of the Himalayan mountains.Chamoli, the district of \"Garhwal\" the land of forts. Today's Garhwal was known as Kedar-khand in the past. In puranas Kedar-khand was said to be abode of Hindu God. It seems from the facts[citation needed] vedas puranas, Ramayna and Mahabharat that these Hindu scriptures are scripted in kedar-khand. It is believed that Hindu God Ganesha first script of vedas in Vayas gufa situated in the last village Mana only 4 km (2.5 mi) from Badrinath.According to Rigveda (1017–19) after Inundation (Jalprlya) Sapt-Rishis saved their lives in the same village Mana. Besides there the roots of vedic literature seems[citation needed] to be originated from Garhwal because the Garhwali language has a lot of words common with Sanskrit. The work place of vedic Rishis are the prominent pilgrim places in Garhwal specially in chamoli like Atrimuni Ashram in Anusuya about 25 km (16 mi) from chamoli town and work place of Kashyap Rishi at Gandhmadan parwat near Badrinath. According to Aadi-Puran, vedvyasa scripted the story of Mahabhrat in Vyas Gufa near Badrinath. Pandukeshwar, a small village situated on the Rishikesh Badrinath high-way from where Badrinath is just 25 km (16 mi) away is regarded as Tapsthali (place where one practices Hindu religious austerities) of King Pandu. In Kedar-khand Puran this land is regarded the land of lord Shiva.The authentic script about the history of Garhwal is found only 6th AD onward. Some of the oldest examples of these are the trishul in Gopeshwar, lalitsur in Pandukeshwar. The Narvaman rock script in siroli the chand pur Gari rock script by king Kankpal authenticates the history and culture of Garhwal."
      },{
        name:"pauri garhwal",
        Img1 :"../images/Districts/Pauri1.jpg",
        Img2 :"../images/Districts/Pauri.jpg",
        Img3 :"../images/Districts/Pauri2.jpg",
        Img4 :"../images/Tourism/DhariDevi.jpeg",
        Img5 :"../images/Tourism/Lansdowne.jpg",
        about:"Pauri Garhwal is a district in the Indian state of Uttarakhand. Its headquarters is in the town of Pauri. It is sometimes referred to simply as Garhwal district, though it should not be confused with the larger Garhwal region of which it is only a part of.",
        history:"Human civilization in the Garhwal Himalayas has progressed with the rest of the Indian sub-continent. The Katyuri kings comprised the first historical dynasty, which ruled over unified Uttarakhand from 800 to 1100 and left records in the form of inscriptions and temples. After the downfall of the Katyuris, the Garhwal region was fragmented in more than sixty-four principalities ruled by chieftains. In the mid 15th century, Chandpurgarh emerged as a powerful principality under the rule of Jagatpal (1455 to 1493), who was a descendant of Kanakpal. At the end of 15th century, Ajaypal ruled Chandpurgarh and succeeded in unifying and consolidating various principalities on the region. His kingdom came to known as Garhwal. Subsequently, he transferred his capital from Chandpur to Devalgarh, before 1506, and later to Srinagar, from 1506 to 1519.King Ajaypal and his successors ruled Garhwal for nearly three hundred years. During this period they faced a number of attacks from Kumaon, Mughals, Sikhs, and Rohillas. An important event in the history of Garhwal was the Gorkha invasion, which was marked by extreme brutality. The word Gorkhyani has become synonymous with massacre and marauding armies. After subjugating Doti and Kumaon, the Gorkhas attacked Garhwal and reached as far as Langoorgarh, despite stiff resistance of the Garhwali forces. Then, news came of a Chinese invasion at the rear of the Gorkhas, who were forced to lift the siege. In 1803, the Gorkhas again mounted an invasion. After capturing Kumaon, they attached Garhwal. After initial defeats, King Pradyumna Shah escaped to Dehradun to futilely reorganize his defenses. Garhwali soldiers suffered heavy casualties and the king himself was killed in the Battle of Khurbura. The Gorkhas became the masters of Garhwal in 1804 and ruled the territory for twelve years.["
      },{
        name:"rudraprayag",
        Img1 :"../images/Districts/rudrapryag1.jpg",
        Img2 :"../images/Districts/rudrapryag.jpg",
        Img3 :"../images/Tourism/ukhimath.jpg",
        Img4 :"../images/Tourism/Chopta.jpg",
        Img5 :"../images/Tourism/KartikSwami.jpg",
        about:"Rudraprayag is a city and a municipality in Rudraprayag district in the Indian state of Uttarakhand. Rudraprayag is one of the Panch Prayag (five confluences) of Alaknanda River, the point of confluence of rivers Alaknanda and Mandakini. Kedarnath, a Hindu holy city is located 86 km from Rudraprayag. The man-eating Leopard of Rudraprayag hunted and written about by Jim Corbett dwelled here.",
        history:"Rudraprayag district is located at 30.28°N 78.98°E.[1] It has an average elevation of 895 metres (2,936 feet).Many of the newer buildings and particularly the Sangam (confluence) area was severely damaged in the 2013 Uttarakhand floods. A footbridge over the Mandakini river, and also a road bridge 6 km downstream at Raitoli was washed away. The layout of the Sangam has altered significantly. The road along the Mandakini valley, leading to Kedarnath, was damaged at many points."
      },
    ])

    const district =(cityName)=>{
      setDistrictDetails(districtDetails.filter(function(arr){
        return arr.name === cityName
    }))
  }
  const scrollUp =()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  
  useEffect(()=>{
    district(params.name)
    scrollUp()
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setBackToTop(true)
      }else{
        setBackToTop(false)
      }
    })
    // eslint-disable-next-line
  },[])
  
  return (
    <>
    <div className= 'w-full pt-20'>
        <h1 className="text-6xl my-4 capitalize font-signature text-center text-blue-700">{params.name}</h1>
        <SlideBar districtDetails={districtDetails} />
      <p>{districtDetails[0].about}</p>
      <p>{districtDetails[0].history}</p>

    {/* <button className="text-center px-5 py-2 rounded-lg font-signature text-2xl  bg-gradient-to-r from-cyan-800 to-green-800 text-white" onClick={()=>{navigate(-1)}}>Back</button> */}
    <Tourism/>
      {backToTop && (
        <button className='fixed bottom-10 right-10 h-16 w-16 pt-2 rounded-full text-white text-3xl flex justify-center items-center shadow-lg border-2 bg-black opacity-60 ' onClick={scrollUp}>^</button>
      )}
    </div>
    </>
  )
}

export default Details

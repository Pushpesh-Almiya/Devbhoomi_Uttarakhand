import React from 'react'
import { useNavigate } from 'react-router-dom'


function Uttarakhand() {
  const navigate = useNavigate()
  return (
    <>
    <div className='pt-20 bg-green-100 flex flex-col'>
    <h1 className='font-signature text-4xl text-center my-2'> Devbhoomi Uttarakhand</h1>
      <p className='p-2'><span className='pl-8 text-green-950 font-bold'>Uttarakhand </span>also known as Uttaranchal is a state in northern India. It is often referred to as the "Devbhumi" due to its religious significance and numerous Hindu temples and pilgrimage centres found throughout the state. Uttarakhand is known for the natural environment of the Himalayas, the Bhabar and the Terai regions. It borders the Tibet Autonomous Region of China to the north; the Sudurpashchim Province of Nepal to the east; the Indian states of Uttar Pradesh to the south and Himachal Pradesh to the west and north-west. The state is divided into two divisions, Garhwal and Kumaon, with a total of 13 districts. The winter capital of Uttarakhand is Dehradun, the largest city of the state, which is a rail head. Gairsain, a town in Chamoli district, is the summer capital of Uttarakhand declared on 5 March 2020. The High Court of the state is located in Nainital, but is to be moved to Haldwani in future.</p>
      <br/>

<p className='p-2'>Archaeological evidence supports the existence of humans in the region since prehistoric times. The region formed a part of the Uttarakuru Kingdom during the Vedic age of Ancient India. Among the first major dynasties of Kumaon were the Kunindas in the second century BCE who practiced an early form of Shaivism. Ashokan edicts at Kalsi show the early presence of Buddhism in this region. During the medieval period, the region was consolidated under the Katyuri rulers of Kumaon also known as 'Kurmanchal Kingdom'. After the fall of Katyuris, the region was divided into the Kumaon Kingdom and the Garhwal Kingdom. In 1816, most of modern Uttarakhand was ceded to the British as part of the Treaty of Sugauli. Although the erstwhile hill kingdoms of Garhwal and Kumaon were traditional rivals, the proximity of different neighbouring ethnic groups and the inseparable and complementary nature of their geography, economy, culture, language, and traditions created strong bonds between the two regions, which further strengthened during the Uttarakhand movement for statehood in the 1990s.</p>
<br/>
<p className='p-2'>The natives of the state are generally called Uttarakhandi, or more specifically either Garhwali or Kumaoni by their region of origin. According to the 2011 Census of India, Uttarakhand has a population of 10,086,292, making it the 20th most populous state in India.</p>
<button className="text-center px-5 py-2 rounded-lg font-signature text-2xl  bg-gradient-to-r from-cyan-800 to-green-800 text-white" onClick={()=>{navigate('/districts')}}>Uttarakhand Visit</button>
<iframe className='mx-auto w-full  my-3 h-80 md:h-screen md:my-5 border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414247.38421972!2d77.93417296220248!3d30.027832418901816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909dcc202279c09%3A0x7c43b63689cc005!2sUttarakhand!5e0!3m2!1sen!2sin!4v1690441601017!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default Uttarakhand

import React, { useContext, useEffect } from "react";
import districtContext from "../Context/DistrictsContexts";

function About() {
  const context = useContext(districtContext)
  const {scrollUp}= context
  useEffect(()=>{
    scrollUp()
    // eslint-disable-next-line
  },[])
  return (
    <div className="pt-8">
      <div
        style={{ backgroundImage: "url('../images/Photos/Travel.jpg')" }}
        className="pt-20 bg-no-repeat bg-cover bg-center w-full h-80 flex justify-center items-center"
      >
        <h1 className="font-signature text-6xl text-white">About</h1>
      </div>
      <div className="p-4 bg-green-100">
        <p className="py-2 md:text-xl">
          Namaste! I am Pushpesh Almiya, and I invite you to join me on a
          personal journey through the captivating landscapes and hidden gems of
          Uttarakhand. I have created this platform to share the most visitable tourism places of Uttarakhand where you can spend your precious time with peace.
        </p>
        <h1 className="inline-block border-b-2 border-gray-500 text-2xl">About Me:</h1>
        <p className="py-2 md:text-xl">
          I am a full stack developer and freelancer. My love for
          exploration and curiosity about the world led me to embark on
          countless adventures. With every trip, I've found solace,
          inspiration, and a deeper connection with nature and myself.
        </p>

        <h1 className="inline-block border-b-2 border-gray-500 text-2xl">My Vision:</h1>
        <p className="py-2 md:text-xl">
          Through "Exploring Uttarakhand," my vision is to inspire and encourage
          fellow solo travelers to venture into the uncharted territories of
          this beautiful state. I believe that solo travel provides a unique
          opportunity for self-discovery, introspection, and a chance to create
          unforgettable memories.
        </p>

        <h1 className="inline-block border-b-2 border-gray-500 text-2xl">Join My Adventure:</h1>
        <p className="py-2 md:text-xl">
          If you are a traveler or someone considering embarking on
          a solo journey, "Exploring Uttarakhand" is the place for you. Let me
          be your virtual guide, accompanying you on a one-of-a-kind expedition
          through the untamed beauty of Uttarakhand.
        </p>

        <p className="py-2 md:text-xl">
          Get ready to unlock the adventurer within, discover the untold stories
          of this land, and immerse yourself in the soulful embrace of
          Uttarakhand.
        </p>

        <p className="font-bold text-xl py-2">Happy Journey</p>
        <p className="font-signature text-4xl">Pushpwsh Almiya</p>
      </div>
    </div>
  );
}

export default About;

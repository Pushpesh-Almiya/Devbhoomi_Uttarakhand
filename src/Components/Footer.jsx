import React from "react";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="w-full  bg-green-700 flex flex-col md:flex-row justify-center h-40 md:h-16 md:justify-evenly items-center text-white">
        <Link to="/" className="font-signature text-4xl ">Devbhumi</Link>
        <div className="flex-col text-center">
          <p className="">Created with ❤️ by Pushpesh Almiya</p>
          <p>All rights reserved © 2023</p>
        </div>
        <div className="text-center">
        <Link to="https://instagram.com/the_northern__land?igshid=MzRlODBiNWFlZA==" target="_blank"><i class="fa-brands fa-instagram text-2xl mx-2 cursor-pointer"></i></Link>
        <Link to="https://www.facebook.com/profile.php?id=100089332735778" target="_blank"><i class="fa-brands fa-facebook text-2xl mx-2 cursor-pointer"></i></Link>
        <Link to="https://www.linkedin.com/in/pushpesh-almiya-786414218" target="_blank"><i class="fa-brands fa-linkedin text-2xl mx-2 cursor-pointer"></i></Link>
        <Link to="mailto:almiyapushpesh55@gmail.com"><i class="fa-solid fa-envelope text-2xl mx-2 cursor-pointer"></i></Link>
        </div>
      </div>
    </>
  );
}

export default Footer;

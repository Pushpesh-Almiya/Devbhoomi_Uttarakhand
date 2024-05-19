import React from "react";
import Navbar from "./Components/Navbar";
import Uttarakhand from "./Components/Uttarakhand";
import District from "./Components/District";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tourism from "./Components/Tourism";
import DistrictState from "./Context/districtState"
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Protected from "./Components/Protected";



function App() {
  return (
    <>
    <DistrictState>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Uttarakhand/>}></Route>
          <Route exact path="/districts" element={<District/>} ></Route>
          <Route exact path="/districts/:name" element={<Protected Component ={Details}/>} ></Route>
          <Route exact path="/districts/:name/tourism" element={<Tourism/>}></Route>
          <Route exact path="/about" element={<About/>} ></Route>
          <Route exact path="/contact" element={<Contact/>} ></Route>
          <Route exact path="/login" element={<Login/>} ></Route>
          <Route exact path="/register" element={<SignUp/>} ></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </DistrictState>
    </>
  );
}

export default App;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function SlideBar( {districtDetails}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="z-0" >
      <Carousel   responsive={responsive}  showDots={true} keyBoardControl={true} ssr={true} >
        <img className="px-3 w-full h-60" src={districtDetails[0].Img1} alt={districtDetails[0].name} />
        <img className="px-3 w-full h-60" src={districtDetails[0].Img2} alt={districtDetails[0].name} />
        <img className="px-3 w-full h-60" src={districtDetails[0].Img3} alt={districtDetails[0].name} />
        <img className="px-3 w-full h-60" src={districtDetails[0].Img4} alt={districtDetails[0].name} />
        <img className="px-3 w-full h-60" src={districtDetails[0].Img5} alt={districtDetails[0].name} />
      </Carousel>
    </div>
  );
}

export default SlideBar;

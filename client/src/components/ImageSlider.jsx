import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaDollarSign, FaCoins } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";


const ImageSlider = () => {
  const data = [
    {
      id:5,
      eventName: `Tribal Welfare`,
      img: "",
      requiredFund : 100000,
      gatheredFund: 50000,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    },
    {
      id:1,
      eventName: `Education &  Literacy`,
      img: "",
      requiredFund : 100000,
      gatheredFund: 50000,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    },
    {
      id:2,
      eventName: `Food & Agriculture`,
      img: "",
      requiredFund : 100000,
      gatheredFund: 50000,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    },
    {
      id:3,
      eventName: `Oldage Home`,
      img: "",
      requiredFund : 100000,
      gatheredFund: 50000,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    },
    {
      id:4,
      eventName: `Health & Nutrition`,
      img: "",
      requiredFund : 100000,
      gatheredFund: 50000,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto ">
      {/* see more detail */}
      <Link to={`events`} className="flex justify-end "> 
      <button className="bg-transparent text-black px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-600 hover:text-white">See More</button>
     </Link>
     
      <div className="mt-6 mb-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[550px] my-3 text-black rounded-xl shadow-lg border border-gray-300 border-solid"
            >

              <div className="h-56 bg-indigo-100 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="w-full h-full rounded-xl hover:shadow-2xl" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 py-4 px-2">
                <p className="text-2xl font-semibold">{d.eventName}</p>
                <p className="text-start px-4">{d.review}</p>
                <div className="flex flex-row sm:ml-4 ml-6">
        
                  <label className="font-bold sm:mx-1">Raised: </label>
                   <FaDollarSign style={{marginTop: "4px" , marginRight:"-18px"}} />
                  <p className="font-medium px-4 sm:mr-8 mr-1">{d.gatheredFund}</p>

                    <label className="sm:mx-1 font-bold ">Goal: </label>
                    <FaDollarSign style={{marginTop: "4px" , marginRight:"-18px"}} />
                    <p className="font-medium px-4 sm:mr-8 mr-1">{d.requiredFund}</p>
                  </div>
                 </div>
              
                  {/* progressBar */}
                 <ProgressBar/>

                <Link to={`event-detail/${d.id}`}><button className="ml-6 bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white text-lg   px-3 py-1 rounded-md">
                  Read More
                </button>
                </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;

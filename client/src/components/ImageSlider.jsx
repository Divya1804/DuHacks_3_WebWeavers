import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaDollarSign, FaCoins } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";



const ImageSlider = (props) => {
  const data = props.data;

  console.log("data , data :   ", data[0])

  let p = data.length;

  const slidesToShow = p <= 3 ? p : 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
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
  const sliderItemStyle = {
    width: "80%",
    height: "500px",
    margin: "0px  auto 20px 30px", // Adjust margin as needed
  };
  if(localStorage.getItem("mode")==="ngo"){
    return (
      <div className="w-3/4 m-auto">
        {data.length > 0 && (
          <>
            <Link to={`../ngo-events`} className="flex justify-end">
              <button className="bg-transparent text-black px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-600 hover:text-white">See More</button>
            </Link>
            {p > 1 && (
             <div className="mt-6 mb-20">
                    <Slider {...settings}>
                      {data.map((d) => (
                        <div
                          key={d.eventId}
                          className="bg-white h-[550px] my-3 text-black rounded-xl shadow-lg border border-gray-300 border-solid"
                        >
                          <div className="h-56 bg-indigo-100 flex justify-center items-center rounded-t-xl">
                            <img src={d.photoLink} alt="" className="w-full h-full rounded-xl hover:shadow-2xl" />
                          </div>
           
                          <div className="flex flex-col items-center justify-center gap-4 py-4 px-2">
                            <p className="text-2xl font-semibold">{d.eventName}</p>
                           
                            <ProgressBar raised={d.raisedFund} goal={d.requiredFund} />
                            <div className="flex flex-row sm:ml-4 ml-6">
           
                              <label className="font-bold sm:mx-1">Raised: </label>
                              <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                              <p className="font-medium px-4 sm:mr-8 mr-1">{d.raisedFund}</p>
           
                              <label className="sm:mx-1 font-bold ">Goal: </label>
                              <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                              <p className="font-medium px-4 sm:mr-8 mr-1">{d.requiredFund}</p>
                            </div>
                          </div>
           
                          <Link to={`../ngo-event-detail/${d.eventId}`}><button className="ml-6 bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white text-lg   px-3 py-1 rounded-md">
                            Read More
                          </button>
                          </Link>
                       </div>
                      ))}
                    </Slider>
                  </div>
            )}
            {p === 1 && (
              <div
                className="bg-white h-[500px]  text-black rounded-xl shadow-lg border border-gray-300 border-solid"
                style={{ ...sliderItemStyle, width: "40%", margin: "auto" }} 
              >
                <div className="h-56 bg-indigo-100 flex justify-center items-center rounded-t-xl">
                  <img src={data[0].photoLink} alt="" className="w-full h-full rounded-xl hover:shadow-2xl" />
                </div>
  
                <div className="flex flex-col items-center justify-center gap-4 py-4 px-2">
                  <p className="text-2xl font-semibold">{data[0].eventName}</p>
                  <ProgressBar raised={data[0].raisedFund} goal={data[0].requiredFund} />
                  <div className="flex flex-row sm:ml-4 ml-6">
  
                    <label className="font-bold sm:mx-1">Raised: </label>
                    <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                    <p className="font-medium px-4 sm:mr-8 mr-1">{data[0].raisedFund}</p>
  
                    <label className="sm:mx-1 font-bold ">Goal: </label>
                    <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                    <p className="font-medium px-4 sm:mr-8 mr-1">{data[0].requiredFund}</p>
                  </div>
                </div>
  
                <Link to={`../ngo-event-detail/${data[0].eventId}`}><button className="ml-6 bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white text-lg   px-3 py-1 rounded-md">
                  Read More
                </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
  else {
    return (
      <div className="w-3/4 m-auto">
        {data.length > 0 && (
          <>
            <Link to={`../events`} className="flex justify-end">
              <button className="bg-transparent text-black px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-600 hover:text-white">See More</button>
            </Link>
            {p > 1 && (
             <div className="mt-6 mb-20">
                    <Slider {...settings}>
                      {data.map((d) => (
                        <div
                          key={d.eventId}
                          className="bg-white h-[550px] my-3 text-black rounded-xl shadow-lg border border-gray-300 border-solid"
                        >
                          <div className="h-56 bg-indigo-100 flex justify-center items-center rounded-t-xl">
                            <img src={d.photoLink} alt="" className="w-full h-full rounded-xl hover:shadow-2xl" />
                          </div>
           
                          <div className="flex flex-col items-center justify-center gap-4 py-4 px-2">
                            <p className="text-2xl font-semibold">{d.eventName}</p>
                           
                            <ProgressBar raised={d.raisedFund} goal={d.requiredFund} />
                            <div className="flex flex-row sm:ml-4 ml-6">
           
                              <label className="font-bold sm:mx-1">Raised: </label>
                              <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                              <p className="font-medium px-4 sm:mr-8 mr-1">{d.raisedFund}</p>
           
                              <label className="sm:mx-1 font-bold ">Goal: </label>
                              <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                              <p className="font-medium px-4 sm:mr-8 mr-1">{d.requiredFund}</p>
                            </div>
                          </div>
           
                          <Link to={`../event-detail/${d.eventId}`}><button className="ml-6 bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white text-lg   px-3 py-1 rounded-md">
                            Read More
                          </button>
                          </Link>
                       </div>
                      ))}
                    </Slider>
                  </div>
            )}
            {p === 1 && (
              <div
                className="bg-white h-[500px]  text-black rounded-xl shadow-lg border border-gray-300 border-solid"
                style={{ ...sliderItemStyle, width: "40%", margin: "auto" }} 
              >
                <div className="h-56 bg-indigo-100 flex justify-center items-center rounded-t-xl">
                  <img src={data[0].photoLink} alt="" className="w-full h-full rounded-xl hover:shadow-2xl" />
                </div>
  
                <div className="flex flex-col items-center justify-center gap-4 py-4 px-2">
                  <p className="text-2xl font-semibold">{data[0].eventName}</p>
                  <ProgressBar raised={data[0].raisedFund} goal={data[0].requiredFund} />
                  <div className="flex flex-row sm:ml-4 ml-6">
  
                    <label className="font-bold sm:mx-1">Raised: </label>
                    <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                    <p className="font-medium px-4 sm:mr-8 mr-1">{data[0].raisedFund}</p>
  
                    <label className="sm:mx-1 font-bold ">Goal: </label>
                    <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
                    <p className="font-medium px-4 sm:mr-8 mr-1">{data[0].requiredFund}</p>
                  </div>
                </div>
  
                <Link to={`../ngo-event-detail/${data[0].eventId}`}><button className="ml-6 bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white text-lg   px-3 py-1 rounded-md">
                  Read More
                </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
  
  // return (
  //   <div className="w-3/4 m-auto ">
  //     {/* see more detail */}
  //     <Link to={`/ngo-events`} className="flex justify-end ">
  //       <button className="bg-transparent text-black px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-600 hover:text-white">See More</button>
  //     </Link>

  //     <div className="mt-6 mb-20">
  //       <Slider {...settings}>
  //         {data.map((d) => (
  //           <div
  //             key={d.eventId}
  //             className="bg-white h-[550px] my-3 text-black rounded-xl shadow-lg border border-gray-300 border-solid"
  //           >
  //             <div className="h-56 bg-indigo-100 flex justify-center items-center rounded-t-xl">
  //               <img src={d.photoLink} alt="" className="w-full h-full rounded-xl hover:shadow-2xl" />
  //             </div>

  //             <div className="flex flex-col items-center justify-center gap-4 py-4 px-2">
  //               <p className="text-2xl font-semibold">{d.eventName}</p>
  //               <p className="text-start px-4">{d.description}</p>
  //               <ProgressBar raised={d.raisedFund} goal={d.requiredFund} />
  //               <div className="flex flex-row sm:ml-4 ml-6">

  //                 <label className="font-bold sm:mx-1">Raised: </label>
  //                 <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
  //                 <p className="font-medium px-4 sm:mr-8 mr-1">{d.raisedFund}</p>

  //                 <label className="sm:mx-1 font-bold ">Goal: </label>
  //                 <FaDollarSign style={{ marginTop: "4px", marginRight: "-18px" }} />
  //                 <p className="font-medium px-4 sm:mr-8 mr-1">{d.requiredFund}</p>
  //               </div>
  //             </div>

  //             <Link to={`../ngo-event-detail/${d.eventId}`}><button className="ml-6 bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white text-lg   px-3 py-1 rounded-md">
  //               Read More
  //             </button>
  //             </Link>
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //   </div>
  // );
};

export default ImageSlider;

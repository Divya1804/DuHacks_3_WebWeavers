import React from "react";
import DonatorCard from "../components/DonatorCard";
import { IoIosBulb } from "react-icons/io";
import { FaMoneyBill } from 'react-icons/fa';
import { BsPersonCircle } from "react-icons/bs";


function NGOEventDetail() {
  const containerStyle = {
    backgroundImage:
      "url('https://as2.ftcdn.net/v2/jpg/01/62/97/57/1000_F_162975765_t3Yl1aIek0f5ZyrOE3UY4tP7W7PwfbiO.jpg')",
    height: "500px",
  };

  return (
    <section>
        <div className="flex justify-center flex-col items-center bg-cover bg-center backdrop-blur-3xl" style={containerStyle}>
                <h1 className="text-white text-2xl">Event Name</h1>
        </div>

        {/* <div className='container'> */}
        <div className="sm:mx-20 md:mx-20 mx-4 my-8">
        <div classnName=" lg:ml-12">
            <h1 className="sm:text-5xl mt-10 text-3xl text-gray-500 font-bold flex justify-center">
            NGO NAME
            </h1>
            <div className="mt-4">
            <p className="sm:text-3xl text-2xl mt-2 mb-4 text-gray-400 font-semibold sm:mx-28 md:mx-20 mx-4 ">
                SOME SLOGAN DESCRIPTION
            </p>
            </div>
        </div>
        </div>

        <hr className="mt-6 border-b-1 border-gray-200 " />


        <div className='mt-10 lg:mx-24 md:mx-24 mx-auto'>
            <h3 className='sm:text-5xl text-3xl mb-6 text-gray-500 font-bold flex justify-center '>HIGHEST  CONTRIBUTER</h3>
            {/* iterating here using loop pass value to the props */}
            <DonatorCard/>
        </div>

        <hr className="mt-6 border-b-1 border-gray-200 " />

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 mx-8 gap-6 mt-20 mb-20">
            <div class="max-w-sm w-full lg:max-w-full lg:flex shadow-md">
                <div class="border border-gray-200  bg-white  p-4 flex  justify-between leading-normal">
                    <IoIosBulb size={'85px'} style={{color:"gray", marginTop:"-17px"}}/>
                    <div class="mb-8 mx-4">
                        <p class="text-xl text-gray-800 font-semibold flex items-center">         
                            Our Mission
                        </p>
                       <p class="text-base text-gray-600flex items-center">

                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                       </p>
                       
                    </div>
                    
                </div>
            </div>

            <div class="max-w-sm w-full lg:max-w-full lg:flex  shadow-md">
                <div class="border border-gray-200  bg-white  p-4 flex  justify-between leading-normal">
                    <FaMoneyBill size={'80px'} style={{color:"gray", marginTop:"-21px"}}/>
                    <div class="mb-8 mx-4">
                        <p class="text-xl text-gray-800 font-semibold flex items-center">         
                           Make Donations
                        </p>
                       <p class="text-base text-gray-600flex items-center">

                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                       </p>
                       
                    </div>
                    
                </div>
            </div>

            <div class="max-w-sm w-full lg:max-w-full lg:flex  shadow-md">
                <div class="border border-gray-200  bg-white  p-4 flex  justify-between leading-normal">
                    <BsPersonCircle size={'70px'} style={{color:"gray", marginTop:"-11px"}}/>
                    <div class="mb-8 mx-4">
                        <p class="text-xl text-gray-800 font-semibold flex items-center">         
                           We Need Volunteers
                        </p>
                       <p class="text-base text-gray-600flex items-center">

                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                       </p>
                       
                    </div>
                    
                </div>
            </div>
        </div>
      
    </section>
  );
}

export default NGOEventDetail;

import React, { useEffect, useState } from "react";
import DonatorCard from "../components/DonatorCard";
import { IoIosBulb } from "react-icons/io";
import { FaMoneyBill } from 'react-icons/fa';
import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function NGOEventDetail() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  let {id} = useParams();
  let user =  useSelector(state => state.user);

    useEffect(() => {
      
      // Check if user is logged in after Redux state is updated
    if ( !user.userId  || user.mode !== 'ngo') {
        navigate('/login');
      }
    }, []);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/${id}/`);
          console.log("id",id);
        console.log("id2",response.data);
        setData(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchData();
  },[])
  if(!data){
    return <></>
  }
  const containerStyle = {
    backgroundImage:
      "url('https://as2.ftcdn.net/v2/jpg/01/62/97/57/1000_F_162975765_t3Yl1aIek0f5ZyrOE3UY4tP7W7PwfbiO.jpg')",
    height: "500px",
  };


  return (
    <section>
        <div className="flex justify-center flex-col items-center bg-cover bg-center backdrop-blur-3xl" style={containerStyle}>
                <h1 className="text-white text-5xl font-bold" >{data.eventName}</h1>
        </div>

        {/* <div className='container'> */}
        <div className="sm:mx-20 md:mx-20 mx-4 my-8">
        <div classnName=" lg:ml-12">
           
            <div className="mt-4 flex sm:flex-row flex-col">
            <div className="sm:w-[60%] w-full text-2*xl font-semibold  text-gray-600">
           {data.description}
            </div>
            <div className="mt-6  ml-6 mr-6 border-2 flex justify-between shadow-2xl w-1/2 bg-blue-100 rounded-sm ms-28">
              {" "}
              <div className="m-4">
                {" "}
                <h3>
                  <b>Total Fund</b>
                </h3>{" "}
                {/* <!-- Small Section Tittle --> */} <h3>{data.requiredAmount}</h3>{""}
                <h3 className="mt-4">
                  <b>Staring Date</b>
                </h3>{" "}
                <h3> {data.startDate}</h3>{" "}
              </div>{" "}
              <div className="m-4">
                {" "}
                <h3>
                  <b>Raised Fund</b>
                </h3>{" "}
                {/* <!-- Small Section Tittle --> */} <h3>{data.gainedAmount}</h3>{" "}
                <h3 className="mt-4">
                  {" "}
                  <b>Ending Date</b>
                </h3>{" "}
                <h3> {data.endDate}</h3>{" "}
              </div>{" "}
            </div>
            </div>
        </div>
        </div>

        <hr className="mt-6 border-b-1 border-gray-200 " />


        <div className='mt-10 lg:mx-24 md:mx-24 mx-auto'>
            <h3 className='sm:text-5xl text-3xl mb-6 text-gray-500 font-bold flex justify-center '> CONTRIBUTER</h3>
            {/* iterating here using loop pass value to the props */}
             { console.log("data",data.donors)}
            {data.donors.map((x)=>{
              return  <DonatorCard data={x}/>
            })}
           
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
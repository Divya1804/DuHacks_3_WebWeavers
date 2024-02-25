import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import EventCardList from "../components/EventCardList";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function NGODetail() {
  let {id} = useParams();
  const [data,setData] = useState();
  let user =  useSelector(state => state.user);
  useEffect(() => {
        
    // Check if user is logged in after Redux state is updated
  if ( !user.userId  || user.mode !== 'donator') {
      navigate('/login');
    }
  }, []);
  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/ngoId/${id}`);
          setData(response.data);
          console.log("here",response.data);
        } catch (error) {
        
          console.log(error);
        }
      };
  
      fetchData();
},[]);
if(data){

}
else{
  return null;
}
  return (
    <section className=" border border-black">
      <div className="w-full mb-5" style={{ height: "400px" }}>
        <img
          src="/images/staticPhoto.jpg"
          alt="Static Photo"
          className="w-full h-full object-fill bg-contain"
        />
      </div>

      {/* <div className='container'> */}
      <div className="flex flex-col lg:flex-row">
        {/* border-2 border-solid border-black */}
        <div className="w-full lg:w-1/3 mx-auto bg-white shadow-md">
          <div className="flex justify-center mt-8">
            <img
              className="h-80 w-80 rounded-full object-cover object-center"
              src={data.logoLink}
              alt="NGO photo"
            />
          </div>
          <div className="p-5 mt-5 mb-8 ml-12 mr-12  shadow-md">
            <div className="text-black text-lg font-semibold">
              <h4>NGO Overview</h4>
            </div>
            <ul className="mt-4">
              <li className="flex justify-between mb-2 ">
                Email : <span>{data.ngoEmail}</span>
              </li>
              <li className="flex justify-between mb-2 ">
                Location : <span>{data.ngoLocation}</span>
              </li>
              <li className="flex justify-between mb-2 ">
                Contact No : <span>{data.ngoPhoneNo}</span>
              </li>
              <li className="flex justify-between mb-2 ">
                Certificate : 
            
                <a  className = "text-blue-500" href={data.certiLink}><u>Certy</u></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-2/3  mx-auto bg-white  shadow-md">
          <div classnName=" lg:ml-12">
            <h1 className="sm:text-5xl mt-10 text-3xl text-gray-500 font-bold flex justify-center">
              {data.ngoName}
            </h1>
            <div className="mt-4">
              <p className="sm:text-3xl text-2xl mt-2 mb-4 text-gray-400 font-semibold flex justify-center">
                "{data.slogan}"
              </p>
            </div>
            <h1 className="ml-8 text-2xl my-2 text-gray-400"> OUR MISSION</h1>
            <div>
                <p className="ml-14 text-4xl my-2 text-black"> Our main goal is to protect animals</p>
                <p className="mx-14 text-2xl my-2 text-gray-400">{data.about}</p>
            </div>
          </div>
        </div>

      </div>


    
      {data.upcomingEvents.length===0 ?<></> :<div>
<div className='mt-16'>
         <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center'> EVENTS</h1>

      </div>
      <EventCardList data1={data.upcomingEvents}/>
</div>
     }
      
      
    
     
    
      {data.previousEvents.length===0 ?<></> :<div>  <div className='mt-16'>
         <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center'>PREVIOUS EVENTS</h1>
      </div>
      <EventCardList data1={data.previousEvents}/>
      </div>}
    </section>
  );
}

export default NGODetail;

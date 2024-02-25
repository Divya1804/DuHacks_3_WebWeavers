import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EventRegistration = () => {
  let [flag,setFlag] = useState(false);
  
  const [formData, setFormData] = useState({
    eventName: "",
    details: "",
    photo: "",
    type: "Food",   
    location: "",
    startDate: "",
    type1:"",
    endDate: "",
    gainedAmount: 0,
    requiredAmount: 0,
  });
  let navigate = useNavigate();
  let user =  useSelector(state => state.user);
    useEffect(() => {
      
      // Check if user is logged in after Redux state is updated
    if ( !user.userId  || user.mode !== 'ngo') {
        navigate('/login');
      }
    }, []);
  const handleChange = (e) => {
    if(e.target.name ==='type' && e.target.value ==='Other'){
      
      setFlag(true);
    }
    else if(e.target.name ==='type'){
      setFormData({
        ...formData,
        type1: ''
      });
      setFlag(false);
    
    }   
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async () => {
    console.log(user.userId);
    try {
     
      if(formData.type==='Other'){
       let eventdata =  {
          eventName: formData.eventName,
          details: formData.details,
          photo: formData.photo,
          type: formData.type1,   
          location: formData.location,
          startDate: formData.startDate,
          endDate: formData.endDate,
          gainedAmount: formData.gainedAmount,
          requiredAmount: formData.requiredAmount,
        }
        console.log(eventdata);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/${user.userId}/event`, eventdata);
        setFormData(
          {
            eventName: "",
            details: "",
            photo: "",
            type: "Food",   
            location: "",
            startDate: "",
            type1:"",
            endDate: "",
            gainedAmount: 0,
            requiredAmount: 0,
          
        })
        console.log(response);
      }
      else{
        let eventdata =  {
          eventName: formData.eventName,
          details: formData.details,
          photo: formData.photo,
          type: formData.type,   
          location: formData.location,
          startDate: formData.startDate,
          endDate: formData.endDate,
          gainedAmount: formData.gainedAmount,
          requiredAmount: formData.requiredAmount,
          
        }
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/${user.userId}/event`, eventdata);
        console.log(response);
        setFormData(
          {
            eventName: "",
            details: "",
            photo: "",
            type: "Food",   
            location: "",
            startDate: "",
            type1:"",
            endDate: "",
            gainedAmount: 0,
            requiredAmount: 0,
          
        })
      }
    
    } catch (error) {
      console.error("Error registering event:", error);
    }
  };

  return (
    <section className="py-1 ">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-50 border-0">
          <div className="rounded-t bg-gray-200 mb-0 px-6 py-6 border-gray-200 shadow-md">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-2xl font-bold">Event Registration</h6>
            </div>
          </div>

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div className="text-sm mt-3 mb-6 font-bold uppercase">Event Information</div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="eventName">Event Name</label>
                    <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Jyoti Healthcare' />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="photo">Event Photo Link</label>
                    <input type="url" id="photo" name="photo" value={formData.photo} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='https://ngoPic.com' />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="type">Event Type</label>
                    <select id="type" name="type" value={formData.type} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="Food">Food</option>
                      <option value="Education">Education</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                <div className={`relative w-full mb-3 ${flag ? '' : 'hidden'}`}>
                  <label className="block uppercase text-xs font-bold mb-2" htmlFor="eventType">Event Type</label>
                  <input
                    type="text"
                    id="type1"
                    name="type1"
                    value={formData.type1}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Event Type"
                  />
                </div>
              </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="gainedAmount">Gathered Amount</label>
                    <input type="number" id="gainedAmount" name="gainedAmount" value={formData.gainedAmount} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='0' />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="requiredAmount">Required Amount</label>
                    <input type="number" id="requiredAmount" name="requiredAmount" value={formData.requiredAmount} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='0' />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Mahesana' />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              {/* About Me */}
              <div className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">About Event</div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="details">Event Description</label>
                    <textarea id="details" name="details" value={formData.details} onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" placeholder='Write Event Detail'></textarea>
                  </div>
                </div>
              </div>
              {/* for submit button */}
              <div className='mt-6'>
                <button onClick={handleSubmit} className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-6 py-2.5 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventRegistration;

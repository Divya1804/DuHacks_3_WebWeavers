import React, { useEffect, useState } from "react";
import axios from "axios";

import photo from "../../public/images/eventregister.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UpdateDonatorProfile() {
  const naviagte= useNavigate();

  let  id  = useSelector(state=>state.user.userId);

  console.log("id:  ", id)
  const [formData, setFormData] = useState({
    donorName: "",
    phoneNo: "",
    occupation: "",
    address: "",
    photoLink: "",
  });

  useEffect(()=>{
    const fetchDetailOfDonator =  async()=>{
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/donor/${id}`);

      console.log(response)
      setFormData({
        donorName: response.data.donorName,
        phoneNo: response.data.phoneNo,
        occupation: response.data.occupation,
        address: response.data.address,
        photoLink: response.data.photoLink,
      })
    }

    fetchDetailOfDonator();

  },[]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/donor/${id}`,  formData); // api

      console.log("Donator Update that profile successfully:", response.data);
      setFormData({
        donorName: "",
        phoneNo: "",
        occupation: "",
        address: "",
        photoLink: "",
      })

      naviagte('/');
    } catch (error) {
      console.error("Error In Updating donator:", error);
    }
  };

  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
      <div className="bg-blue-50 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
        <div className="md:flex w-full">
          {/* left side */}
          <div className="hidden md:block w-1/2 py-10 px-10  bg-white">
            <img src={photo} alt="image" className="object-cover h-[500px] w-full"/>
          </div>
          {/* right side */}
          <div className="w-full md:w-1/2 pt-10 py-10 md:px-10 text-gray-600">
            <div className="text-center mb-4">
              <h1 className="font-bold text-3xl text-gray-900">Update Profile</h1>
            </div>
            <div className="sm:mx-0 md:mx-2 mx-5">
              <div className="flex -mx-3">
                {/* Donator Name */}
                <div className="w-full px-2 mb-2">
                  <label htmlFor="donorName" className="text-[14px] uppercase font-semibold px-1 mb-2"> Donator name </label>
                  <input type="text" id="donorName" name="donorName" value={formData.donorName} onChange={handleChange} className="w-full px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                </div>
              </div>
              {/* Photo Link */}
              <div className="flex -mx-3">
                <div className="w-full px-2 mb-2">
                  <label htmlFor="photoLink" className="text-[14px] uppercase font-semibold px-1 mb-2"> Photo Link</label>
                  <input type="url" id="photoLink" name="photoLink" value={formData.photoLink} onChange={handleChange} className="w-full px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                </div>
              </div>
              {/* Phone Number */}
              <div className="flex -mx-3">
                <div className="w-full px-2 mb-2">
                  <label htmlFor="phoneNo" className="text-[14px] uppercase font-semibold px-1 mb-2"> Phone No.</label>
                  <input type="text" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className="w-full px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="+91 78920 38202"/>
                </div>
              </div>
              {/* Occupation */}
              <div className="flex -mx-3">
                <div className="w-full px-2 mb-2">
                  <label htmlFor="occupation" className="text-[14px] uppercase font-semibold px-1 mb-2"> Occupation </label>
                  <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                </div>
              </div>
              {/* Address */}
              <div className="flex -mx-3">
                <div className="w-full px-2 mb-2">
                  <label htmlFor="address" className="text-[14px] uppercase font-semibold px-1 mb-2"> Address </label>
                  <textarea type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" rows="4"/>
                </div>
              </div>
              {/* Register Button */}
              <div className="flex -mx-3 mt-4">
                <div className="w-full px-3 mb-5">
                  <button onClick={handleSubmit} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                     Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default UpdateDonatorProfile;
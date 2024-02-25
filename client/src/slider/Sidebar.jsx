import React, { useEffect, useState } from 'react'
import { IoFilterSharp } from "react-icons/io5";
import {FiMapPin, FiSearch} from 'react-icons/fi'
import InputField from '../components/InputField';

function Sidebar({changeData,setChangeData,handleChange, setSelectedCategory, selectedCategory}) {
    
    const [searchBar1, setSearchBar1] =  useState(true);
    const [searchBar2, setSearchBar2] =  useState(true);
    
    const handleSearchBar1 = () => {
      setSearchBar1((mode) => !mode);
    }

    const handleRadio1 = (e) => {
        setSearchBar1(true);
    }

    const handleSearchBar2 = () => {
      setSearchBar2((mode) => !mode);
    }

    const handleRadio2 = (e) => {
        setSearchBar2(true);
    }

    const handleSubmit = () => {
      setChangeData(changeData^1);
    }

  return (     
        <div className='space-y-5'>
            <div className='flex gap-2'>
                <span className='flex items-center gap-1'><IoFilterSharp/></span>
                <p className='font-bold m-2'>Filter Events</p>
                <button type='submit' className='bg-blue ml-12  px-2 bg-blue-500 text-white rounded' onClick={handleSubmit}>Search</button>
            </div>

             <div className='flex justify-center'>
             </div>

            <div className='flex flex-col ml-2 justify-center'>
                <h4 className="text-lg font-medium mb-2">Event Type</h4>
            <div className={`flex md:rounded-s-md mb-4 rounded shadow-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-[100%] ${searchBar1 ? 'hidden' : ''}`}>
                  <input  onChange={handleChange} type="text" name="type" id="title" placeholder='Search a Event' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' />
                  <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
                  
              </div>

                <InputField
                  handleChange={handleChange}
                  value="all"
                  title="All"
                  name="type"
                />

                <InputField
                  handleChange={handleChange}
                  value="food"
                  title="Food"
                  name="type"
                />
                
                <InputField
                  handleChange={handleChange}
                  value="clothes"
                  title="Clothes"
                  name="type"
                />
                
                <InputField
                  handleChange={handleChange}
                  value="medical"
                  title="Medical"
                  name="type"
                />

                <div>
                  <label className='sidebar-label-container my-1'>
                  <input
                      type="radio"
                      name="type" 
                      value="Other"
                      onClick={handleSearchBar1}
                  />
                  <span className='checkmark'></span>Other
                  </label>
              </div>

                
            </div>

            <div className='flex flex-col ml-2 justify-center'>
            <h4 className="text-lg font-medium mb-2">Event Location</h4>

              <div className={`flex md:rounded-s-md mb-4 rounded shadow-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-[100%] ${searchBar2 ? 'hidden' : ''}`}>
                  <input onChange={handleChange}  type="text" name="location" id="title" placeholder='Search a Location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' />
                  <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
                 
              </div>


             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="location" 
                    value="mahesana"
                    onClick={handleChange}
                />
                <span className='checkmark'></span> Mahesana
             </label>
                
             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="location" 
                    value="patan"
                    onClick={handleChange}
                />
                <span className='checkmark'></span>Patan
             </label>
                
             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="location" 
                    value="kukas"
                    onClick={handleChange}
                />
                <span className='checkmark'></span>Kukas
             </label>
                 <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="location" 
                    value="ahemdabad"
                    onClick={handleChange}
                />
                <span className='checkmark'></span> Ahemdabad
             </label>

             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="location" 
                    value="other"
                    onClick={handleSearchBar2}
                />
                <span className='checkmark'></span>Other
             </label>
            </div>

            
            <div className='flex flex-col ml-2 justify-center'>
                <h4 className="text-lg font-medium mb-2">Event Date</h4>
                <div className='shadow-md'>
                  <input
                    name="date"
                    type="date"
                    onClick={handleChange}
                    placeholder="Ex: 2023-11-03"
                    className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>

            </div>
        </div>
  )
}

export default Sidebar;

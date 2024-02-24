
import React, { useEffect, useState } from 'react'
import { IoFilterSharp } from "react-icons/io5";
import {FiMapPin, FiSearch} from 'react-icons/fi'
import InputField from '../components/InputField';


function Sidebar({handleChange}) {

    const [searchBar, setSearchBar] =  useState(true);

    const handleSearchBar = () =>{

      setSearchBar((mode) => !mode);
    }

    const handleRadio = (e) =>{
        setSearchBar(true);
    }
  

  return (     
        <div className='space-y-5'>
            <div className='flex gap-2'>
                <span className='flex items-center gap-1'><IoFilterSharp/></span>
                <p className='font-bold m-2'>Filter Events</p>
            </div>


            <div className='flex flex-col ml-2 justify-center'>
                <h4 className="text-lg font-medium mb-2">Event Type</h4>
                <InputField
                  handleChange={handleChange}
                  value="type"
                  title="Type"
                  name="test"
                />
                
                <InputField
                  handleChange={handleChange}
                  value="location"
                  title="Location"
                  name="test"
                />
                
                <InputField
                  handleChange={handleChange}
                  value="date"
                  title="Event Date"
                  name="test"
                />
                <InputField
                  handleChange={handleChange}
                  value="type"
                  title="Type"
                  name="test"
                />
                
                <InputField
                  handleChange={handleChange}
                  value="location"
                  title="Location"
                  name="test"
                />
                
                <InputField
                  handleChange={handleChange}
                  value="date"
                  title="Event Date"
                  name="test"
                />
            </div>

            <div className='flex flex-col ml-2 justify-center'>
            <h4 className="text-lg font-medium mb-2">Event Location</h4>

              <div className={`flex md:rounded-s-md mb-4 rounded shadow-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-[100%] ${searchBar ? 'hidden' : ''}`}>
                  <input type="text" name="title" id="title" placeholder='Search a Location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'/>
                  <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
                  <button type='submit' className='bg-blue py-1 px-3 bg-blue-500 text-white md:rounded-s-none rounded'>Search</button>
              </div>


             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="test" 
                    value="mahesana"
                    onClick={handleRadio}
                />
                <span className='checkmark'></span> Mahesana
             </label>
                
             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="test" 
                    value="patan"
                    onClick={handleRadio}
                />
                <span className='checkmark'></span>Patan
             </label>
                
             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="test" 
                    value="kukas"
                    onClick={handleRadio}
                />
                <span className='checkmark'></span>Kukas
             </label>
                 <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="test" 
                    value="ahemdabad"
                    onClick={handleRadio}
                />
                <span className='checkmark'></span> Ahemdabad
             </label>

             <label className='sidebar-label-container my-1'>
                <input
                    type="radio"
                    name="test" 
                    value="other"
                    onClick={handleSearchBar}
                />
                <span className='checkmark'></span>Other
             </label>
            </div>

            
            <div className='flex flex-col ml-2 justify-center'>
                <h4 className="text-lg font-medium mb-2">Event Date</h4>
                <div className='shadow-md'>
                  <input
                    type="date"
                    placeholder="Ex: 2023-11-03"
                    className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>

            </div>

        </div>
  )
}

export default Sidebar;
import React from 'react'
import { Link } from 'react-router-dom'
import { FaDollarSign } from "react-icons/fa";

//her pass props
function DonatorCard(props) {

  const {data} = props;

  return (
    <div className='flex flex-col'>
      <div  class="flex items-center bg-white border border-gray-200 rounded-lg shadow-md sm:mx-12 md:mx-28 mx-8 my-4 py-4 ">
          <div>
            <img class="object-cover sm:ml-6 ml-2 lg:my-2 sm:w-20 sm:h-44  w-36 h-36 md:h-48 md:w-48 rounded-full" src={"http://localhost:5000/images/homelogo1.png"} alt=""/>
          </div>
          
          <div class="flex sm:flex md:flex flex-col justify-between p-4 leading-normal sm:ml-4 ml-0">
              <h3 class="mb-2 sm:-mt-10 md:-mt-12 md:text-3xl text-2xl font-semibold  tracking-tight text-gray-600 uppercase">Event Name: {data.eventName}</h3>

              <h5 class="mb-2 text-2xl font-semibold  tracking-tight text-gray-900 dark:text-black">Donor Name: {data.donorName}</h5>
              <div className='flex items-center mt-4'>
                  <FaDollarSign style={{ width: '20px', height: '20px' }} />
                  
                  <h2 className='-mt-1 text-xl font-semibold'> donation: {data.amount} </h2>
              </div>
          </div>
      </div>
    
    </div>
   




  )     
}

export default DonatorCard
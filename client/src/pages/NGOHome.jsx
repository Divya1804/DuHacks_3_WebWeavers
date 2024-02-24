import React, { useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import DonatorCard from '../components/DonatorCard';

function NGOHome() {

  const [topDonator, setTopDonator] = useState([]);

  return (
    <section>   
        {/* <div className=''> */}
        <div className='mt-16'>
            <h3 className='sm:text-3xl text-2xl mb-4 text-gray-400 font-semibold flex justify-center'>CONTRIBUTE</h3>
            <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center'>CHECK UPCOMING EVENTS</h1>
        
        </div>
        <ImageSlider/>

        <hr className="mt-6 border-b-1 border-gray-200 " />


        <div className='mt-10 lg:mx-24 md:mx-24 mx-auto'>
            <h3 className='sm:text-5xl text-3xl mb-6 text-gray-500 font-bold flex justify-center '>HIGHEST  CONTRIBUTER</h3>
            {/* iterating here using loop pass value to the props */}
            <DonatorCard/>

        </div>
    </section>
  )
}

export default NGOHome
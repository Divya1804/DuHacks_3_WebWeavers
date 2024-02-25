import React from 'react'
import ImageSlider from '../components/ImageSlider'


function Home() {
  let backendUrl =import.meta.env.VITE_BACKEND_URL;
  // console.log(backendUrl)

  
  return (
    <section>
      <div className="mt-16">
        <h3 className="sm:text-3xl text-2xl mb-4 text-gray-400 font-semibold flex justify-center">
          CONTRIBUTE
        </h3>
        <h1 className="sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center">
          CHECK UPCOMING EVENTS
        </h1>
      </div>
      <ImageSlider />
    </section>
  )
}

export default Home;
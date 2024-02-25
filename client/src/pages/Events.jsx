import React, { useEffect, useState } from 'react'
import EventList from '../components/EventList';
import Pagination from '../components/Pagination';
import EventCard from '../components/EventCard';
import Sidebar from '../sidebar/Sidebar';


function Events() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [events , setEvents] =  useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage ,setCurrentPage] = useState(1);



  useEffect(()=> {
    setIsLoading(true);
    fetch("jobs.json").then(res => res.json()).then(data => {
      setEvents(data);
      setIsLoading(false);
    })
  },[])

  //radio based filtering
  const handleChange = (event) => {
    // console.log("*********",event.target.value)
    setSelectedCategory(event.target.value);
  };

//   console.log("sel",selectedCategory)

  const itemsPerPage = 6;
  const totalNoOfPages = Math.ceil(events.length /itemsPerPage);
 
  //filterning on so many things
  const filterData = (events) =>{
    return events.map((data,i) => {
      if( i <itemsPerPage *currentPage && i >= itemsPerPage*(currentPage-1) ){
        return (<EventCard key={i} data={data}/>)
    }})
  }

  const result =  filterData(events);

  return (
    <>
      <div className='sm:m-16  m-6'>
      <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center my-5'>LIST OF EVENTS</h1>

        {/* main content */}
        <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8  px-4 py-12'>
          {/* left side */}
          <div className='bg-white  p-4 rounded'>
            <Sidebar  handleChange={handleChange}/>
          </div>
          
          <div className="col-span-3 bg-white p-4 rounded-sm">
            {isLoading ? (
              <p className="font-medium">Loading...</p>
            ) : result.length > 0 ? (
               <div> 
                 <div>
                    <EventList result={result} />
                    <Pagination  pages={totalNoOfPages} setCurrentPage={setCurrentPage}/>
                </div>
                 <div className='flex justify-center mb-5'> <h3 className='text-black'>Page {currentPage} of {totalNoOfPages}</h3></div>
               </div>
              
            ) : (
              <>
                <h3 className="text-lg font-bold mb-2">{result.length} Events</h3>
                <p>No data found!</p>
              </>
            )}
            </div>


        </div>

      </div>
    </>
  )
}

export default Events;
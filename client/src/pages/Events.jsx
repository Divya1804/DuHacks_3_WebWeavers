import React, { useEffect, useState } from 'react'
import {FiMapPin, FiSearch} from 'react-icons/fi'
import Sidebar from '../slider/Sidebar';
import EventList from '../components/EventList';
import Pagination from '../components/Pagination';
import EventCard from '../components/EventCard';
import axios from 'axios';


function Events() {
  const [selectedCategory, setSelectedCategory] = useState({
    type :'all',
    location:'all',
    date:'all'
  });

  const [events , setEvents] =  useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage ,setCurrentPage] = useState(1);
  const [data,setData] = useState([]);
  const [changeData, setChangeData] = useState(false);
  let FilterData = [];
  
  useEffect(()=> {
    setIsLoading(false);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/home/`);
        // console.log(response.data)
        setData(response.data);
        setEvents(response.data);
        FilterData =  events;
        
      } catch (error) {
      
        console.log(error);
      }
    };

    fetchData();
  },[])
  
  useEffect(()=>{
    setData([]);
    FilterData = events.filter((x) => {
      if (
        (x.location.toLowerCase() === selectedCategory.location || selectedCategory.location === 'all') &&
        (x.type.toLowerCase() === selectedCategory.type || selectedCategory.type === 'all') &&
        ((x.startDate.toLowerCase() >= selectedCategory.date && x.endDate.toLowerCase() <= selectedCategory.date) || selectedCategory.date === 'all')
      ) {
        return true;
      } else {
        return false;
      }
    });  
    
    setData(FilterData);

  },[changeData])
  

  //radio based filtering
  const handleChange = (event,data1) => {
    
   setSelectedCategory({...selectedCategory , [event.target.name]:event.target.value});
   
  };
  
  // console.log(selectedCategory)

  const itemsPerPage = 6;
  const totalNoOfPages = Math.ceil(data.length /itemsPerPage);
 
  //filterning on so many things
  const filterData = (events) =>{
    return data.map((data,i) => {
      if( i <itemsPerPage *currentPage && i >= itemsPerPage*(currentPage-1) ){
        return (<EventCard key={i} data={data}/>)
    }})
  }

  const result =  filterData(data);

  return (
    <>
      <div className='sm:m-16  m-6'>
      <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center my-5'>LIST OF EVENTS</h1>

        {/* main content */}
        <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8  px-4 py-12'>
          {/* left side */}
          <div className='bg-white  p-4 rounded'>
            <Sidebar changeData={changeData} setChangeData={setChangeData}  handleChange={handleChange} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
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
                 <div className='flex justify-center mb-5'> <h3 className='text-black'>Page {currentPage} of {Math.ceil(data.length /itemsPerPage)}</h3></div>
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
import React, { useEffect, useState } from 'react'
import {FiMapPin, FiSearch} from 'react-icons/fi'
import Sidebar from '../slider/Sidebar';
import EventList from '../components/EventList';
import Pagination from '../components/Pagination';
import EventCard from '../components/EventCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function NGOEvents() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [events , setEvents] =  useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage ,setCurrentPage] = useState(1);

  let navigate = useNavigate();
  let user =  useSelector(state => state.user);
    useEffect(() => {
      
      // Check if user is logged in after Redux state is updated
    if ( !user.userId  || user.mode !== 'ngo') {
        navigate('/login');
      }
    }, []);
  useEffect(()=> {
    setIsLoading(false);
    const fetchData = async () => {

      try {
        console.log("user id ",user.userId);
      
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/event/${user.userId}`);
        
        setEvents(response.data);
        console.log("here",response.data);
      } catch (error) {
      
        console.log(error);
      }
    };

    fetchData();
  },[])

  //radio based filtering
  const handleChange = (event) => {
    // console.log("*",event.target.value)
    setSelectedCategory(event.target.value);
  };

  console.log("sel",selectedCategory)

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

export default NGOEvents;
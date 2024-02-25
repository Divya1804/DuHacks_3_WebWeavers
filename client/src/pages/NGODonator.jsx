import React, { useEffect, useState } from 'react'
import NGOsList from '../components/NGOsList';
import Pagination from '../components/Pagination';
import NGOCard from '../components/NGOCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NGODonator() {
    const [NGOs, setNGOs] = useState([]);
    const [currentPage ,setCurrentPage] = useState(1);

    const itemsPerPage = 6;
    let navigate = useNavigate();
    let user =  useSelector(state => state.user);
      useEffect(() => {
        
        // Check if user is logged in after Redux state is updated
      if ( !user.userId  || user.mode !== 'donator') {
          navigate('/login');
        }
      }, []);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/all`);
              setNGOs(response.data);
              console.log("here",response.data);
            } catch (error) {
            
              console.log(error);
            }
          };
      
          fetchData();
    },[]);

    //Get current Items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = NGOs.slice(indexOfFirstItem,indexOfLastItem)
    const totalNoOfPages = Math.ceil(NGOs.length /itemsPerPage);


    const ListofNGOs =  (NGOs) =>{
        return NGOs.map((data, i) => { 
            if( i <itemsPerPage *currentPage && i >= itemsPerPage*(currentPage-1) ){
                return (<NGOCard key={i} data={data}/>)
        }});
    }

    const result = ListofNGOs(NGOs);

    // console.log(NGOs);

    return (
    <div>
        <div className='mt-20 '>
            <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center'>LIST OF NGOs</h1>
            <div className='sm:mx-40 mx-12'>
                <NGOsList result={result}/>
                <Pagination  pages={totalNoOfPages} setCurrentPage={setCurrentPage}/>
            </div>
           <div className='flex justify-center mb-5'> <h3 className='text-black'>Page {currentPage} of {totalNoOfPages}</h3></div>
        </div>
    </div>
)
}

export default NGODonator
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DonatorProfile = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [index , setIndex] = useState(0);
    let  user  = useSelector(state=>state.user);

    let backendUrl =import.meta.env.VITE_BACKEND_URL;
    
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        address: '',
        donorName: '',
        email: '',
        phoneNo: '',
        occupation: '',
        photoLink: '',
        amount: 0,
        donations:{
            donations:[],
            pageNumber:0,
            pageSize:0,
            totalPages:0,
            totalElements:0,
            isLast:false
        },
    });

    let paginationTotalNoOfPages ;

    // console.log("id is here", id);
    useEffect(() => {
        
        // Check if user is logged in after Redux state is updated
      if ( !user.userId  || user.mode !== 'donator') {
          navigate('/login');
        }
      }, []);
    useEffect(() => {
        // Example API call using fetch
        fetch(`${backendUrl}/api/donor/profile/${user.userId}/${index}/4`)
            .then(response => response.json())
            .then(data => {
                setUserData(data)
            console.log("here data",data);

            // paginationTotalNoOfPages = data.donations.totalPages;

            return data;
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, [index]);

    // console.log(userData);
    if(!userData){
        return null;
    }
    
     
    const itemsPerPage =4;

    const indexOfLastItem = (index+1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userData.donations.donations.slice(indexOfFirstItem,indexOfLastItem)
    const totalNoOfPages = userData.donations.donations.totalPages;

    const handlePageChange = (newPage) => {
        // console.log("onclick");
        if (newPage >= 0 && newPage < totalNoOfPages) {
            // console.log("on index change");
            setIndex(newPage)
        }
    };

    const handleClick = ()=>{
          navigate('/update-donator-profile');
    }

    return (
        <div className="bg-gray-100">
        <div className="container mx-auto py-8 ">
           
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                <div className="col-span-4 sm:col-span-3 ">
                    <div className="bg-white shadow rounded-lg p-6 border-r-2">
                        <div className="bg-slate-50 flex flex-col pt-4 mt-2 items-center shadow-lg">
                            <img src={userData.photoLink}
                            className="w-35 h-35 mt-2 bg-gray-300 rounded-full mb-4 shrink-0">

                            </img>
                            <h1 className="text-xl font-bold">{userData.donorName}</h1>
                            <p className="text-gray-700">{userData.occupation}</p>
                            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            </div>
                        </div>
                       
                        <div className="flex flex-col mt-8">
                            <span className="text-gray-700 uppercase font-bold tracking-wider text-lg mb-2">Other Detail:</span>
                             <p className='mb-2 font-medium'> {userData.address} </p>
                             <h2 className='mb-2 font-medium'>{userData.email}</h2>
                             <h2 className='mb-2 font-medium'>{userData.phoneNo}</h2>
                        </div>

                        <div className='flex justify-center mt-2'>
                             <button onClick={handleClick} className='py-1 px-3 bg-blue-500 text-white rounded-sm'>Update Profile</button>
                        </div>
                    </div>
                </div>

                
                <div className="col-span-4 sm:col-span-9 overflow-y-auto min-h-screen">
                    <div className="overflow-y-auto">
                        {userData.donations.donations.map((x, index) => (
                            <DonationItem key={index} {...x} />
                        ))}
                    </div>

                    {/* Previous and Next Buttons */}
                    {userData.donations.donations.length === 0 ?   <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center my-5'>You Have Not Donate</h1>:  <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handlePageChange(index-1)}
                                className="mx-1 px-6 py-2 border bg-blue-500 text-white text-base font-semibold  rounded-md cursor-pointer"
                                
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => handlePageChange(index+1)}
                                className="mx-1 px-6 py-2 border bg-blue-500 text-white text-base font-semibold  rounded-md cursor-pointer"
                            >
                                Next
                            </button>
                    </div>}
                  
                </div>
            </div>
        </div>
    </div>
      
    );
};

export default DonatorProfile;

const DonationItem = ({ eventName, ngoName, amount, date }) => {
    return (
        <div className="bg-white shadow-lg rounded-md p-6 mb-4 flex items-center justify-between">
            <div>
                <h3 className="text-xl text-pretty font-semibold text-gray-800 mb-2">{eventName}</h3>
                <p className="text-lg text-gray-600 mb-1">NGO: <span className='text-gray-500'>{ngoName}</span></p>
            </div>
            <div className="text-right">
                <p className="text-lg text-gray-600 mb-2">Amount: <span className='text-gray-500'>{amount}</span> </p>
                <p className="text-lg text-gray-600 mb-1">Date: <span className='text-gray-500'>{date}</span></p>
            </div>
        </div>
    );
};
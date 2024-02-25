import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";


import { FaLocationArrow } from "react-icons/fa6";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const GridCard = ({ data, itemsPerPage, currentPage }) => {
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      {currentItems.map((d, index) => (
        <div
              key={index}
              className="bg-white h-[450px] my-3 text-black rounded-xl shadow-lg border border-gray-300 border-solid"
            >
              <div className="h-56 bg-indigo-100 flex justify-center items-center rounded-t-xl">
                <img src={d.photoLink} alt="" className="w-full h-full rounded-xl hover:shadow-2xl" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 py-4 px-2">
                <p className="text-2xl font-semibold">{d.eventName}</p>
                <p className="text-start px-4">{d.description}</p>
                <div className="flex flex-row sm:ml-4 ml-6">
        
                  <label className="font-bold sm:mx-1">Raised: </label>
                   <FaDollarSign style={{marginTop: "4px" , marginRight:"-18px"}} />
                  <p className="font-medium px-4 sm:mr-8 mr-1">{d.raisedFund}</p>

                  <label className="sm:mx-1 font-bold ">Goal: </label>
                   <FaDollarSign style={{marginTop: "4px" , marginRight:"-18px"}} />
                  <p className="font-medium px-4 sm:mr-8 mr-1">{d.requiredFund}</p>
                </div>
              </div>
                <Link to={`../event-detail/${d.eventId}`}><button className="ml-6 bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white text-lg   px-3 py-1 rounded-md">
                  Read More
                </button>
                </Link>
            </div>
      ))}
    </div>
  );
};

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const numberOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  return (
    <div className="pagination-container mb-6">
      <Link
        to=""
        className={`flex justify-center items-center text-black h-10 w-10 border border-gray-300 cursor-pointer transition duration-200 hover:bg-gray-300 ${
          currentPage === 1 ? "disabled:" : ""
        }`}
        onClick={() => setCurrentPage((prev) => (prev <= 1 ? prev : prev - 1))}
      >
        Prev
      </Link>

      {numberOfPages.map((item, index) => (
        <Link
          to=""
          key={index}
          className={`flex justify-center items-center text-black h-10 w-10 border border-gray-300 cursor-pointer transition duration-200 hover:bg-gray-300 ${
            currentPage === item ? "active:" : ""
          }`}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </Link>
      ))}

      <Link
        to=""
        className={`flex justify-center items-center text-black h-10 w-10 border border-gray-300 cursor-pointer transition duration-200 hover:bg-gray-300 ${
          currentPage === numberOfPages.length ? "disabled:" : ""
        }`}
        onClick={() =>
          setCurrentPage((next) => (next >= numberOfPages.length ? next : next + 1))
        }
      >
        Next
      </Link>
    </div>
  );
};

const EventCardList = (props) => {
 
      let data = props.data1;
  console.log("yout",props.data1);
  const itemsPerPage = 3; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="w-3/4 m-auto">
      {/* see more detail */}
      <div className='flex justify-end mr-4 mb-5'> <h3 className='text-black'>Page {currentPage} of {totalPages}</h3></div>
      <div className="mt-6 mb-4">
        <GridCard
          data={data}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
        

        <Pagination
          pages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

    </div>
  );
};

export default EventCardList;

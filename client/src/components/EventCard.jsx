import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FiMapPin, FiCalendar} from 'react-icons/fi'
import {MdCurrencyRupee} from 'react-icons/md'



// particular ngos card design
function EventCard({data}) {    

  return (
    <div className="single-job-items mb-30 mb-5 border">
        <div className="job-items">
            <div className='w-full h-40 '>
                <img className='w-full h-full object-fill' src={data.companyLogo} alt="companylogo" />
            </div>
            <div className="job-tittle job-tittle2 mt-2">
                <a href="#">
                <h4>{"companyName"}</h4>
                </a>
                <h2>{"jobTitle"}</h2>
                <ul className='text-primary/70 text-base flex flex-wrap gap-2 mt-4'>
                    <li><span className='flex items-center gap-1'><FiMapPin/>{"jobLocation"}</span></li>
                    <li><span className='flex items-center '><MdCurrencyRupee/>{"minPrice"}-{"maxPrice"}k</span></li>
                    <li><span className='flex items-center gap-2'><FiCalendar/>{"postingDate"}</span></li>
                </ul>
            </div>
        </div>
        <div className="items-link items-link2 f-right">
            <Link to={`../event-detail/${data.id}`}><button>See more</button></Link>
        </div>
    </div>
  )
}

export default EventCard;








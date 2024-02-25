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
                <img className='w-full h-full object-fill' src={data.photoLink} alt="companylogo" />
            </div>
            <div className="job-tittle job-tittle2 mt-2">
                <a href="#">
                <h4>{data.eventName}</h4>
                </a>
                <h2>{data.type}</h2>
                <ul className='text-primary/70 text-base flex flex-wrap gap-2 mt-4'>
                    <li><span className='flex items-center gap-1'><FiMapPin/>{data.location}</span></li>
                    <li><span className='flex items-center '><MdCurrencyRupee/>{data.raisedFund}-{data.requiredFund}k</span></li>
                    <li><span className='flex items-center gap-2'><FiCalendar/>{data.endDate}</span></li>
                </ul>
            </div>
        </div>
        <div className="items-link items-link2 f-right">
            {localStorage.getItem("mode")==='ngo'?<Link to={`../ngo-event-detail/${data.eventId}`}><button>See more</button></Link>:<Link to={`../event-detail/${data.eventId}`}><button>See more</button></Link>}
            
        </div>
    </div>
  )
}

export default EventCard;








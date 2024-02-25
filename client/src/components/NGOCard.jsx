import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FiMapPin, FiCalendar} from 'react-icons/fi'
import {MdCurrencyRupee, MdLooks, MdLooksTwo} from 'react-icons/md'
import { FaCalendarPlus, FaPhone } from 'react-icons/fa6';
import { FaRegCalendarAlt } from 'react-icons/fa';



// particular ngos card design
function NGOCard({data}) {    

  return (
    <div className="single-job-items mb-30 mb-5 border">
        <div className="job-items">
            <div className='w-full h-40 '>
                <img className='w-full h-full object-fill' src={data.logo} alt="companylogo" />
            </div>
            <div className="job-tittle job-tittle2 mt-2">
                <a href="#">
                <h4>{data.ngoName}</h4>
                </a>
                <h2>"{data.slogan}"</h2>
                <ul className='text-primary/70 text-base flex flex-wrap gap-2 mt-4'>
                    <li><span className='flex items-center gap-1'><FiMapPin/>{data.location}</span></li>
                    <li><span className='flex items-center '> <FaPhone />{data.phoneNo}</span></li>
                    <li><span className='flex items-center gap-2'>No. of Prev Event : {data.totalPreEvent}</span></li>
                </ul>
            </div>
        </div>
        <div className="items-link items-link2 f-right">
            <Link to={`../ngo-detail/${data.ngoId}`}><button>See more</button></Link>
        </div>
    </div>
  )
}

export default NGOCard;








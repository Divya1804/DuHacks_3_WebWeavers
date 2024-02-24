
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {FiMapPin, FiCalendar} from 'react-icons/fi';
import {MdCurrencyRupee} from 'react-icons/md'

function Card({data}) {
    // const navigate = useNavigate();
    // const {companyName , companyLogo, jobTitle, minPrice, maxPrice,employmentType , postingDate, jobLocation , _id} = data

  return (

    <div className="single-job-items mb-30 mb-5 border">
      <div className="job-items">
        <div className="company-img">
          <Link to="/" ><img className='image-logo' src={"companyLogo"} alt="companylogo" /></Link>
        </div>
        <div className="job-tittle job-tittle2">
          <a href="/">
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
        {/* <a href="job_details.html">{employmentType}</a> */}
          <Link to={""}><button type='button'>{"employmentType"}</button></Link>
      </div>
    </div>

  )
}

export default Card
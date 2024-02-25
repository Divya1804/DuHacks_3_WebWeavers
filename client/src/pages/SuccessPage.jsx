import React, { useEffect } from 'react';
import successSound from '../../public/Google-Pay-Payment-Notification.mp3';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/")
    }
    let play = ()=>{
        const audio = new Audio(successSound);
        if(audio !== undefined){
          audio.play()
          .catch(error => {
            console.error('Autoplay was prevented:', error);
          });
        }
    }
  
   
  useEffect(() => {
    play()
    const currentUrl = window.location.href;
    const urlSegments = currentUrl.split('/');
    console.log(urlSegments);
    let body = {
      amount:urlSegments[6],
      eventId:urlSegments[4],
      donorId:urlSegments[5],
    }
    const headers = {
      "Content-Type":"application/json"
  }
    const createPayment = async()=>{
      const response = await fetch(`http://192.168.27.67:8000/api/payment/event/${urlSegments[4]}/donor/${urlSegments[5]}`,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });
    
    const session = await response.json();
    console.log(session);
    }
    createPayment();
   
  }, []);

  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <div className="bg-white p-6 md:mx-auto">
          <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p> Have a great day! </p>
            <div className="py-10 text-center">
              <a onClick={handleClick} href="" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                GO BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;

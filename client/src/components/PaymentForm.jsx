import React, { useEffect, useState } from 'react';
import successSound from '../../public/Google-Pay-Payment-Notification.mp3';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useSelect } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
const PaymentForm = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  const donorId = 1;
  useEffect(()=>{
    console.log(props.data);
  })
   
  let user = useSelector(state=>state.user);
  const makePayment = async(event)=>{
    console.log(event);
   event.preventDefault();
  //  console.log();
    const stripe = await loadStripe(props.data.public_key);

    console.log(user.userId);
    let paymentInfo = {
        name: "Your Name",
        currency: "INR",
        successUrl: `http://localhost:5000/sucess/${props.data.eventId}/${user.userId}/${amount}`,
        cancelUrl: "http://localhost:5000/cancel",
        amount: amount*100, // Example amount in cents (e.g., $10.00)
        quantity: 1
    };
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payment/${props.data.eventId}/${user.userId}/${props.data.ngoId}`,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(paymentInfo)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}
  const handleSubmit = async(event) => {
    event.preventDefault();

    // Add your payment processing logic here
    // This is where you would typically handle the payment details
    const audio = new Audio(successSound);
    if(audio !== undefined){
      audio.play()
      .catch(error => {
        console.error('Autoplay was prevented:', error);
      });
    }
   
 await makePayment();
      // navigate("/sucess")
   
  };

  return (
    <form onSubmit={makePayment} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-12">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>



      <label className="block mb-4">
        Amount:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded-md"
          placeholder="Enter amount"
        />
      </label>

      <button type="submit"  className="bg-blue-500  text-white p-2 rounded-md">
        Submit Payment
      </button>
    </form>
  );
};

export default PaymentForm;
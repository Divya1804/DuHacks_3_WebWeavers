import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from '../redux/userSlicer';

function Login() {
  let navigate = useNavigate();
  let id= useSelector(state => state.user.userId);
  let mode = useSelector(state => state.user.mode)
  let dispatch = useDispatch();
  // console.log("he",id);
  let user = {
    username:'',
    password:'',
    mode:'donator',
  }
  const [data, setData] = useState(user);
  
  const handleSubmit = async () => {
    if(data.username === '' || data.password === '') {
      setData({
        username:'',
        password:'',
        mode:'donator',
      });
      toast.error("Please Fill all Details");
      return;
    }

    try {
      let response;
      if(data.mode === 'donator'){
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/donor/${data.username}/${data.password}`).then(res=>res.json()).then(async (data)=>{
          localStorage.setItem('mode','donator');
          console.log("here",data);
          if(data.success === false){
            setData({
              username:'',
              password:'',
              mode:'donator',
            });
            toast.error("Not valid username, password, or mode");
          }
          else{
            let dis=async()=>{
              dispatch(addUser({userId:data,mode:'donator'}))
            }
            await dis(); 
            
            setData({
              username:'',
              password:'',
              mode:'Donator',
            });

            toast.success("Logged in Successfully")
             navigate('/');
          }
          
          
        }).catch(err=>{
          console.log(err);
        })
      //  response =  axios.get(`http://192.168.27.67:8000/api/donor/${data.username}/${data.password}`)s
       
      } else if(data.mode === "ngo") {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/${data.username}/${data.password}`).then(res=>res.json()).then(async (data)=>{
          localStorage.setItem('mode','ngo');
          console.log("here",data);
          if(data.success === false){
            setData({
              username:'',
              password:'',
              mode:'donator',
            });
            toast.error("Not valid username, password, or mode");
          }
          else{
            let dis=async()=>{
              dispatch(addUser({userId:data,mode:'ngo'}))
            }
            await dis(); 
            
            setData({
              username:'',
              password:'',
              mode:'Donator',
            });

            toast.success("Logged in Successfully")
             navigate('/ngo');
          }
     
        })
       
      }
      
     
    } catch(err) {
      console.error("it's error",err); // Log the error to the console for debugging purposes
      setData({
        username:'',
        password:'',
        mode:'donator',
      });
      toast.error("Not valid username, password, or mode");
    }
  };

  const handleChange = (event) => {
    setData({...data,[event.target.name]:event.target.value});
  };
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className='flex justify-center'>
            <img className="w-25 h-20 mr-2 " src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo"/>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                <input type="text" name="username" onChange={handleChange} value={data.username} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brij123" required/>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" onChange={handleChange} value={data.password} id="password" placeholder="Enter your Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
              <div className='mt-4'>
                <select id="select" name="mode" value={data.mode} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option className='py-2' value="donator">Donator</option>
                  <option className='py-2' value="ngo">NGO</option>
                </select>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet? 
                <Link to="/register"><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a></Link>
              </p>
            </form>
            <button type="submit" onClick={handleSubmit} className="w-full bg-gradient-to-r from-orange-500 to-red-600 via-red-700 via-purple-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

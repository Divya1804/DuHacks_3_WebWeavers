import React from 'react';
import { FaLock } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import registerImage from '../../public/images/registration.jpg';

function Registration() {
    const backgroundStyle = {
        backgroundImage: `url(${registerImage})`,
    };

    return (
        <div className="min-h-screen py-28 bg-gray-100" >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg  overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center registration h-[420px] sm:ml-4 ml-0 mt-10 pb-8" style={backgroundStyle}>
                        <h1 className="text-white text-3xl mb-3 pt-16">Welcome</h1>
                        <div>
                            <p className="text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-blue-500 font-semibold">Learn more</a></p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 px-12">
                        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-2">Register Here</h2>
                        <p className="mb-4 text-xl">
                            Create your account
                        </p>
                        <form onSubmit={""} >
                            <div className="flex mt-2">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                </span>
                                <input type="text" placeholder="Enter Username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-2.5 px-4   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-l-none" />
                            </div>
                            <div className="mt-4 relative flex items-center">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"/>
                            </div>

                            <div className="mt-4 flex items-center relative" >
                                <FaLock className='absolute ml-3 text-gray-500'/>
                                <input type="password" placeholder="Enter Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pl-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                            </div>

                            <div className="mt-4 flex items-center relative" >
                                <FaMapPin className='absolute ml-3 text-gray-500'/>
                                <input type="password" placeholder="Enter Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pl-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                            </div>

                            <div className='mt-4'>
                                <select id="select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option className='py-2' value="donator" selected>Donator</option>
                                    <option className='py-2' value="ngo">NGO</option>
                                </select>

                            </div>
                            <div className="mt-4 flex items-center">
                                <input type="checkbox" className="h-4 w-4 border border-gray-400" />
                                <span className='ml-2'>
                  I accept the <span className="text-blue-500 font-semibold">Terms of Use</span> & <span className="text-blue-500 font-semibold">Privacy Policy</span>
                </span>
                            </div>
                            <div className="mt-5">
                                <button className="w-full bg-blue-500 py-3 text-center text-white">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;

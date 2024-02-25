import React, { useEffect } from 'react'
import about from "../../public/images/about.png"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function AboutUs() {
    let navigate = useNavigate();
    let user =  useSelector(state => state.user);
      useEffect(() => {
        
        // Check if user is logged in after Redux state is updated
      if ( !user.userId ) {
          navigate('/login');
        }
      }, []);
  return (
    <section class="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div class="relative">
                    <img src={about} alt=""
                        class="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"/>
                    <div
                        class="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                    </div>
                    <div
                        class="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                <div class="relative">
                    <h1
                        class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                        About Us
                    </h1>
                    <h1 class="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                        Welcome to our site
                    </h1>
                </div>
                <p class="mt-6 mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
               
                <div class="flex flex-wrap items-center mt-2 mb-4 ml-4 mr-4">
                            <div class="w-full px-4 mb-6  sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div class="p-6 bg-white dark:bg-gray-900">
                                    <span class="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" 
                                            fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                            <path
                                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                    </span>
                                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">101
                                    </p>
                                    <h2 class="text-lg  text-gray-700 dark:text-gray-400">Events  </h2>
                                </div>
                            </div>
                            <div class="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div class="p-6 bg-white dark:bg-gray-900">
                                    <span class="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
                                            fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path fill-rule="evenodd"
                                                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                        </svg>
                                    </span>
                                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">590
                                    </p>
                                    <h2 class="text-lg text-gray-700 dark:text-gray-400">Helped people</h2>
                                </div>
                            </div>
                </div>
                <a href="#"
                    class="px-4 py-3 ml-8 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                    Learn more
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs
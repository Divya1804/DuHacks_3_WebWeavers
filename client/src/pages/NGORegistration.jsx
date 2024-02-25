import React from 'react'

function NGORegistration() {
  return (
    <section className="py-1 ">
    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-50 border-0">
        <div className="rounded-t bg-gray-200 mb-0 px-6 py-6 border-gray-200 shadow-md">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-2xl font-bold">NGO Registration</h6>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            {/* User Information */}
            <div className='hidden'></div>
            <h6 className=" text-sm mt-3 mb-6 font-bold uppercase">NGO Information</h6>
            <div className="flex flex-wrap">
           
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                <label className="block uppercase text-xs font-bold mb-2" htmlFor="grid-password">
                  Name
                </label>
                  <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Jyoti Healthcare' value="" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                     Logo Link
                  </label>
                  <input type="url" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='https://ngoPic.com' value="" />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                     Certificate Link
                  </label>
                  <input type="link" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='https://pic1.jpg' value=""/>
                </div>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Slogan
                  </label>
                  <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Write Something...' value=""/>
                </div>
              </div>

            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* Contact Information */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Contact Information</h6>
            <div className="flex flex-wrap">
             
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                  Location
                </label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Mahesana' value=""/>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                  Contact No
                </label>
                <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='+91 484933 90238' value=""/>
              </div>
            </div>
            
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* Payment Detail */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Payment Detail</h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    Merchant ID
                  </label>
                  <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your Merchant ID' value="" />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    secret Key
                  </label>
                  <input type="link" className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter Your Secret Key' value=""/>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* About Me */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">About NGO</h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  NGO Description
                  </label>
                  <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" placeholder='Write NGO Work Detail'></textarea>
                </div>
              </div>
            </div>

            
            {/* for submit button */}
            <div className='mt-6'>
              
              <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-6 py-2.5 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </section>
  )
}

export default NGORegistration



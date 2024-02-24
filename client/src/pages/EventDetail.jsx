import React from "react";
import PaymentForm from "../components/PaymentForm";

function EventDetail() {
  const containerStyle = {
    backgroundImage:
      "url('https://as2.ftcdn.net/v2/jpg/01/62/97/57/1000_F_162975765_t3Yl1aIek0f5ZyrOE3UY4tP7W7PwfbiO.jpg')",
    height: "500px",
  };

  return (
    <section className=" border border-black">
      <div className="flex justify-center flex-col items-center bg-cover bg-center backdrop-blur-3xl" style={containerStyle}>
                <h1 className="text-white text-2xl">Event Name</h1>
            </div>


      {/* <div className='container'> */}
      <div className="flex flex-col lg:flex-row mt-4">
        {/* border-2 border-solid border-black */}
        <div className="w-full lg:w-1/2 mx-8 bg-white shadow-md ">
          <div className="lg:ml-12">
            <div className="mt-5 ml-6 mr-6">
              <div className="text-black text-lg font-semibold">
                <h5>Event Type</h5>
              </div>
              <p className="mt-3">{"experience"}</p>
            </div>
            <div className="mt-5 ml-6 mr-6">
              <div className="text-black text-lg font-semibold">
                <h5>Event Location</h5>
              </div>
              <p className="mt-3">{"experience"}</p>
            </div>
            <div className="mt-5 ml-6 mr-6">
              <div className="text-black text-lg font-semibold">
                <h5>Event Description</h5>
              </div>
              <p className="mt-3">{"experience"}</p>
            </div>
            <div className="mt-5 ml-6 mr-6">
              <div className="text-black text-lg font-semibold">
                <h5>NGO</h5>
              </div>
              <p className="mt-3">{"experience"}</p>
            </div>

            <div className="mt-6  ml-6 mr-6 border-2 flex justify-between shadow-2xl w-1/2 bg-blue-100 rounded-sm ms-28">
              {" "}
              <div className="m-4">
                {" "}
                <h3>
                  <b>Total Fund</b>
                </h3>{" "}
                {/* <!-- Small Section Tittle --> */} <h3>$50000</h3>{" "}
                <h3 className="mt-4">
                  <b>Staring Date</b>
                </h3>{" "}
                <h3> 23-10-2025</h3>{" "}
              </div>{" "}
              <div className="m-4">
                {" "}
                <h3>
                  <b>Raised Fund</b>
                </h3>{" "}
                {/* <!-- Small Section Tittle --> */} <h3>$1000</h3>{" "}
                <h3 className="mt-4">
                  {" "}
                  <b>Ending Date</b>
                </h3>{" "}
                <h3> 23-10-2025</h3>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2  mx-8 bg-white  shadow-md">
          <div className="lg:ml-4 ">
            <PaymentForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetail;

import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  addToStoredDB,
  getAllBookings,
} from "../../components/utility/addToDB";
import { Helmet } from "react-helmet-async";
const DoctorDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { id } = useParams();
  const doctorId = parseInt(id);
  const doctor = data.find((doc) => doc.id === doctorId);
  const {
    name,
    education,
    worksAt,
    registrationNumber,
    daysAvailable,
    price,
    image,
  } = doctor;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const fullDayName = days[today.getDay()];
  // console.log(fullDayName);

  const available = daysAvailable.includes(fullDayName);
  const handleBooking = (id) => {
    const existingBookings = getAllBookings();
    const isAlreadyBooked = existingBookings.includes(id);
    if (isAlreadyBooked) {
      toast.error("Appointment already exists for this doctor.");
    } else {
      addToStoredDB(id);
      toast.success(`Appointment scheduled for Dr. ${name}`);
      navigate(`/my-bookings/${id}`);
    }
  };
  return (
    <div className="p-10 ">
      <Helmet>
        <title>Doctor Details | Doctor Booking App</title>
      </Helmet>
      <div className="text-center bg-white w-[980px] h-[256px] ml-10 my-10 shadow-inner rounded-4xl">
        <h1 className="plus-jakarta-sans-font font-extrabold text-3xl text-[#141414] py-10">
          Doctor’s Profile Details
        </h1>
        <p className="plus-jakarta-sans-font text-[#141414B3] px-5">
          Our doctors provide expert care through accurate diagnoses, effective
          treatments, and compassionate support. They are dedicated to your
          health and well-being with professionalism and up-to-date medical
          knowledge.
        </p>
      </div>

      <div>
        <div className="hero bg-base-200  w-[980px] ml-10 my-5 shadow-inner rounded-4xl">
          <div className="hero-content flex-col lg:flex-row gap-20">
            <img
              src={image}
              className="w-[235px] h-[250px] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="py-6">{education}</p>
              <p>Working at </p>
              <h3>{worksAt}</h3>
              <div className="flex gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 14.5563 5.44365 18.25 10 18.25C14.5563 18.25 18.25 14.5563 18.25 10C18.25 5.44365 14.5563 1.75 10 1.75ZM0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10Z"
                    fill="#0F0F0F"
                    fillOpacity="0.7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 6.25C7 5.83578 7.33578 5.5 7.75 5.5H10.75C11.5457 5.5 12.3087 5.81605 12.8713 6.3787C13.4339 6.94128 13.75 7.70432 13.75 8.5C13.75 9.29568 13.4339 10.0587 12.8713 10.6213C12.3087 11.1839 11.5457 11.5 10.75 11.5H8.5V13.75C8.5 14.1642 8.16422 14.5 7.75 14.5C7.33578 14.5 7 14.1642 7 13.75V6.25ZM8.5 10H10.75C11.1478 10 11.5293 9.84197 11.8106 9.56065C12.092 9.27932 12.25 8.8978 12.25 8.5C12.25 8.1022 12.092 7.72068 11.8106 7.43935C11.5293 7.15803 11.1478 7 10.75 7H8.5V10Z"
                    fill="#0F0F0F"
                    fillOpacity="0.7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4707 10.1255C10.8104 9.88847 11.278 9.97165 11.515 10.3113L13.615 13.3207C13.852 13.6604 13.7689 14.1279 13.4291 14.365C13.0894 14.602 12.622 14.5188 12.3849 14.1791L10.2849 11.1698C10.0479 10.83 10.1311 10.3625 10.4707 10.1255Z"
                    fill="#0F0F0F"
                    fillOpacity="0.7"
                  />
                </svg>
                <p>{registrationNumber}</p>
              </div>
              <div className="flex justify-center items-center">
                <h3 className="mr-1">Availability</h3>
                {daysAvailable.map((day, index) => (
                  <button
                    className="btn btn-soft btn-warning rounded-4xl p-3 m-1"
                    key={index}>
                    {day}
                  </button>
                ))}
              </div>
              <div>
                <h3>Consultation Fee:</h3>
                <p>
                  <span className="text-blue-500 font-bold">
                    Taka : {price}
                  </span>
                  &nbsp;&nbsp;&nbsp;{" "}
                  <span className="text-gray-400"> (incl. Vat)</span>
                  &nbsp;&nbsp;
                  <span className="text-blue-500">Per consultation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-white w-[980px]  ml-10 my-10 shadow-inner rounded-4xl">
        <h3 className="text-[#141414] font-bold text-3xl">
          Book an Appointment
        </h3>
        <div className="border-2 border-dashed border-gray-300 w-2xl mx-auto mt-1.5"></div>
        <div className="flex justify-between p-6">
          <h2 className="text-xl font-bold">Availability</h2>
          {available ? (
            <button className="btn btn-success text-white rounded-3xl">
              Doctor Available Today
            </button>
          ) : (
            <button className="btn btn-error text-white rounded-3xl">
              Doctor Not Available Today
            </button>
          )}
        </div>
        <div className="border-2 border-dashed border-gray-300 w-2xl mx-auto my-1.5"></div>
        <div className="mx-5 py-5">
          <button
            onClick={() => handleBooking(doctorId)}
            disabled={!available}
            className={`btn btn-block my-1.5 rounded-4xl text-white ${
              available
                ? "bg-blue-600 hover:bg-teal-600"
                : "bg-gray-400  opacity-50 cursor-not-allowed"
            }`}>
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;

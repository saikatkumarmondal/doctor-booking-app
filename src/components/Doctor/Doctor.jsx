import React from 'react';
import { Link, useNavigate,  } from 'react-router';

const Doctor = ({ doctor }) => {
  const navigate = useNavigate();
  const {
    image,
    name,
    education,
    daysAvailable,
    experience,
    registrationNumber,
    id,
  } = doctor;
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const available = daysAvailable.includes(today);

  // const doctors = useLoaderData();
  // const { id } = useParams();
  // const doctorId = parseInt( id );

  
  return (
    <div className="card bg-white w-full max-w-sm rounded-xl shadow-lg m-4 p-4 flex flex-col items-center">
      <figure className="px-6 pt-6 bg-green-100 rounded-2xl w-32 h-32 mx-auto mb-4 flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="rounded-full w-full h-full object-cover"
        />
      </figure>
      <div className="flex justify-center items-center w-full mb-4">
        {available ? (
          <span className="bg-green-500 text-white text-xs px-4 py-2 rounded-full mr-2 shadow-md">
            Available Today
          </span>
        ) : (
          <span className="bg-red-400 text-white text-xs px-4 py-2 rounded-full mr-2 shadow-md">
            Not Available Today
          </span>
        )}
        <span className="bg-blue-100 text-blue-700 text-xs px-4 py-2 rounded-full shadow-md">
          {experience}
        </span>
      </div>
      <div className="card-body items-center text-center p-0">
        <h2 className="card-title text-xl font-semibold text-gray-800 mb-1">
          {name}
        </h2>
        <p className="text-gray-600 text-sm mb-1">{education}</p>
        <p className="text-gray-500 text-xs">{registrationNumber}</p>
        <div className="w-full h-px bg-gray-200 my-4"></div>
        <div className="card-actions">
          {/* Using Link from react-router-dom for navigation */}
          <Link
            to={`/doctorDetails/${id}`}
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200 ease-in-out shadow-lg">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
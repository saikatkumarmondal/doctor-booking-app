import React from 'react';
import { Link, useNavigate,  } from 'react-router';

const Doctor = ({doctor}) => {
    const {
      image,
      name,
      education,
      daysAvailable,
      experience,
        registrationNumber,
      id
    } = doctor;
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const available = daysAvailable.includes( today );
    const navigate = useNavigate();
    // const doctors = useLoaderData(); 
    // const { id } = useParams(); 
    // const doctorId = parseInt( id );
    const handleNavigate = ( id ) => {
        navigate(`/doctorDetails/${id}`);
    }
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10 rounded-4xl bg-green-300 w-2/4 mx-auto m-4">
          <img src={image} alt="Shoes" className="rounded-xl pb-10 w-[500px]" />
        </figure>
        <div>
          {available ? (
            <button className="btn btn-soft btn-success ml-6 mr-5 px-9 rounded-4xl">
              Available
            </button>
          ) : (
            <button className="btn btn-soft btn-danger ml-6 mr-5 px-9 rounded-4xl">
              Not Available
            </button>
          )}
          <button className="btn btn-outline btn-primary ml-6 mr-5 px-9 rounded-4xl">
            {experience}
          </button>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{education}</p>
          <p>{registrationNumber}</p>
          <div className="w-full h-1 border-t-2 border-dashed border-gray-300 my-4"></div>
          <div className="card-actions">
            <button
              onClick={()=>handleNavigate(id)}
              className="btn btn-primary bg-white text-blue-400 rounded-4xl px-10 py-4"
              >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
};

export default Doctor;
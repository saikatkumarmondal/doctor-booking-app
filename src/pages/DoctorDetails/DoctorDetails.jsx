import React from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const doctorId = parseInt(id);

  const doctor = data.find((doc) => doc.id === doctorId);

  console.log(doctor);

  const {
    image,
    name,
    education,
    daysAvailable,
    experience,
    registrationNumber,
    price,
  } = doctor;

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <img src={image} alt={name} className="w-48 mx-auto rounded-full mb-4" />
      <p>
        <strong>Education:</strong> {education}
      </p>
      <p>
        <strong>Experience:</strong> {experience}
      </p>
      <p>
        <strong>Registration No:</strong> {registrationNumber}
      </p>
      <p>
        <strong>Available Days:</strong> {daysAvailable.join(", ")}
      </p>
      <p>
        <strong>Consultation Fee:</strong> ৳{price}
      </p>
    </div>
  );
};

export default DoctorDetails;

import React, { useEffect, useState } from "react";
import Doctor from "../../components/Doctor/Doctor";

const BestDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data/doctorData.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const doctorsToShow = showAll ? doctors : doctors.slice(0, 6);

  return (
    <div>
      <h1 className="text-4xl text-black font-extrabold plus-jakarta-sans-font text-center m-6">
        Our Best Doctors
      </h1>
      <p className="plus-jakarta-sans-font text-sm text-[#0F0F0F] font-normal text-center my-4">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <div className="grid sm:grid-rows-1 sm:gap-2 md:grid-cols-2 md:gap-3.5 lg:grid-cols-3 lg:gap-4 mx-auto">
        {doctorsToShow.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </div>
      {!showAll && doctors.length > 6 && (
        <div className="text-center mt-6">
          <button className="btn btn-primary rounded-4xl" onClick={() => setShowAll(true)}>
            Show All Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default BestDoctors;

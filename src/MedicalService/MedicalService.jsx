import React from 'react';
import CountUp from "react-countup";
import logoOne from "../assets/C001-assets/success-doctor.png"
import logoTwo from "../assets/C001-assets/success-patients.png";
import logoThree from "../assets/C001-assets/success-review.png";
import logoFour from "../assets/C001-assets/success-staffs.png";

const MedicalService = () => {
    return (
      <div className="mt-10 mb-10">
        <h1 className="plus-jakarta-sans-font text-4xl font-extrabold text-[#0F0F0F] text-center mb-1">
          We Provide Best Medical Services
        </h1>
        <p className="plus-jakarta-sans-font text-sm text-[#0F0F0F] text-center mt-1">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
        <div className="max-w-[1300px] mx-auto mt-9 ml-10 mr-9">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
            {/* Card 1 */}
            <div className="h-[283px] bg-white pt-10 rounded-3xl shadow flex flex-col items-center">
              <img src={logoOne} alt="Logo One" className="mx-auto my-2" />
              <div className="flex justify-center items-center">
                <CountUp
                  start={0}
                  end={199}
                  duration={3}
                  className="text-4xl font-medium text-black"
                />
                <h2 className="text-3xl font-bold mb-1 ml-1">+</h2>
              </div>
              <p className="plus-jakarta-sans-font font-semibold text-sm text-center text-gray-400 mt-2 mb-4">
                Total Doctors
              </p>
            </div>

            {/* Card 2 */}
            <div className="h-[283px] bg-white pt-10 rounded-3xl shadow flex flex-col items-center">
              <img src={logoTwo} alt="Logo Two" className="mx-auto my-2" />
              <div className="flex justify-center items-center">
                <CountUp
                  start={0}
                  end={467}
                  duration={3}
                  className="text-4xl font-medium text-black"
                />
                <h2 className="text-3xl font-bold mb-1 ml-1">+</h2>
              </div>
              <p className="plus-jakarta-sans-font font-semibold text-sm text-center text-gray-400 mt-2 mb-4">
                Total Reviews
              </p>
            </div>

            {/* Card 3 */}
            <div className="h-[283px] bg-white pt-10 rounded-3xl shadow flex flex-col items-center">
              <img src={logoThree} alt="Logo Three" className="mx-auto my-2" />
              <div className="flex justify-center items-center">
                <CountUp
                  start={0}
                  end={1900}
                  duration={3}
                  className="text-4xl font-medium text-black"
                />
                <h2 className="text-3xl font-bold mb-1 ml-1">+</h2>
              </div>
              <p className="plus-jakarta-sans-font font-semibold text-sm text-center text-gray-400 mt-2 mb-4">
                Patients
              </p>
            </div>

            {/* Card 4 */}
            <div className="h-[283px] bg-white pt-10 rounded-3xl shadow flex flex-col items-center">
              <img src={logoFour} alt="Logo Four" className="mx-auto my-2" />
              <div className="flex justify-center items-center">
                <CountUp
                  start={0}
                  end={300}
                  duration={3}
                  className="text-4xl font-medium text-black"
                />
                <h2 className="text-3xl font-bold mb-1 ml-1">+</h2>
              </div>
              <p className="plus-jakarta-sans-font font-semibold text-sm text-center text-gray-400 mt-1 mb-4">
                Total Staffs
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MedicalService;
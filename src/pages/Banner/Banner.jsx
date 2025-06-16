import React from 'react';
import bannerImage from "../../assets/C001-assets/banner-img-1.png"
const Banner = () => {
    return (
      <div className="bg-gradient-to-b from-[#ffffff00] to-[#ffffff] border-4 border-white  rounded-xl  mx-20  my-8 p-10">
        <h1 className="plus-jakarta-sans-font font-extrabold text-4xl text-center my-5">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>
        <p className="plus-jakarta-sans-font  font-medium text-sm text-[#0F0F0F] text-center my-5">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />{" "}
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
        <div className="flex justify-center items-center my-7">
          <input
            type="text"
            placeholder="Search any doctor..."
            className="input input-md mr-2 bg-[#FFFFFF] rounded-4xl"
          />
          <button className="btn btn-primary  rounded-4xl">Search Now</button>
        </div>
        <div className="flex gap-2">
          <img
            src={bannerImage}
            alt="Banner image of doctors"
            className="w-[578px] h-[250px]"
          />
          <img
            src={bannerImage}
            alt="Banner image of doctors"
            className="w-[578px] h-[250px]"
          />
        </div>
      </div>
    );
};

export default Banner;
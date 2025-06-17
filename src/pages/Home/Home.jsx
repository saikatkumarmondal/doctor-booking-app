import React from 'react';
import Banner from '../Banner/Banner';
import BestDoctors from '../BestDoctors/BestDoctors';
import MedicalService from '../../MedicalService/MedicalService';
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Doctor Booking App | Home</title>
      </Helmet>
      <Banner></Banner>
      <BestDoctors></BestDoctors>
      <MedicalService></MedicalService>
    </div>
  );
};

export default Home;
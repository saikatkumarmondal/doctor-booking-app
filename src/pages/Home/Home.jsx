import React from 'react';
import Banner from '../Banner/Banner';
import BestDoctors from '../BestDoctors/BestDoctors';
import MedicalService from '../../MedicalService/MedicalService';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BestDoctors></BestDoctors>
            <MedicalService></MedicalService>
        </div>
    );
};

export default Home;
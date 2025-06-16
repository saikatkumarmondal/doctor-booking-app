import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
    
    const { id } = useParams();
    const doctorId = parseInt( id );
   
    
    const singleBook = data.find((book) => book.id === doctorId);
    
    // const { image, name, education, daysAvailable, price } = singleBook;
    return (
      <div>
        DoctorDetails
      
      </div>
    );
};

export default DoctorDetails;
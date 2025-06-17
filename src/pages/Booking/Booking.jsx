import React from 'react';

const Booking = ({ booking, onCancel, bookings }) => {
    const { id, name, education, price } = booking;
    const hasValue = bookings.length;
  return hasValue ? (
    <div className="w-[979px] h-[205px] bg-white my-7 ml-18 rounded-4xl">
      <div className="p-10">
        <h1 className="text-2xl  font-bold ">{name}</h1>
        <ul className="flex justify-between">
          <li>
            <p>{education}</p>
          </li>
          <li>
            <p>৳{price}</p>
          </li>
        </ul>
        <div className="border-t-2 border-dashed border-gray-300 my-2"></div>
        <button
          className="btn btn-block border-red-200 rounded-4xl text-red-400 my-3 "
          onClick={() => onCancel(id)}>
          Cancel Appointment
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Booking;
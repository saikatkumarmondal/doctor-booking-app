import React, { useEffect, useState } from "react";
import {
  getAllBookings,
  removeFromStoredDB,
} from "../../components/utility/addToDB";
import Booking from "../Booking/Booking";
import { toast } from "react-toastify";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MyBookings = () => {
  const [doctors, setDoctors] = useState([]);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const bookings = getAllBookings();
    fetch("/data/doctorData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredDoctors = data.filter((doc) => bookings.includes(doc.id));
        setDoctors(filteredDoctors);
      });
  }, []);

  useEffect(() => {
    const bookedId = getAllBookings();

    const matched = doctors.filter((doc) => bookedId.includes(doc.id));
    setBookings(matched);
  }, [doctors]);
  const handleCancel = (id) => {
    removeFromStoredDB(id);
    const updated = bookings.filter((doc) => doc.id !== id);
    setBookings(updated);
    toast.error("Appointment Cancelled!");
  };

  return (
    <div>
      <h1>MyBookings</h1>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={bookings.map((doc) => ({
            name: doc.name.split(" ")[1], // use 2nd word of name
            price: doc.price,
          }))}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="mountainColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#mountainColor)"
            dot={{ r: 3, stroke: "#3b82f6", strokeWidth: 1, fill: "#fff" }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div>
        <h1 className="text-3xl text-black font-bold text-center">
          My Today Appointments
        </h1>
        <p className="font-normal text-xs text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
        {bookings.map((booking, index) => (
          <Booking
            booking={booking}
            key={index}
            onCancel={handleCancel}
            bookings={bookings}></Booking>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;

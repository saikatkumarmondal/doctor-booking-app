
const getAllBookings = () => {
  const storedBooking = localStorage.getItem("docBooking");
  if (storedBooking) {
    const storedBookingData = JSON.parse(storedBooking);
    return storedBookingData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedData = getAllBookings();
    if ( storedData.includes( id ) )
    {
        return;
    } else
    {
        storedData.push( id );
        localStorage.setItem("docBooking", JSON.stringify(storedData));
  }
};

const removeFromStoredDB = (id) => {
  const storedData = getAllBookings();
  const updatedData = storedData.filter((item) => item !== id);
  localStorage.setItem("docBooking", JSON.stringify(updatedData));
};
export { getAllBookings, addToStoredDB, removeFromStoredDB };
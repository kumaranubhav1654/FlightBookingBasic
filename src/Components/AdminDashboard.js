import React, { useState } from "react";
import "../Components/AdminDashboard.css";

function AdminDashboard() {
  const [bookingCount, setBookingCount] = useState(0);
  const [emptySeats, setEmptySeats] = useState([]);

  const handleBookingCountClick = () => {
    // Handle click to open flight-wise listing
  };

  const handleEmptySeatsClick = () => {
    // Handle click to open flight-wise listing
  };

  return (
    <div className="dashboard-section">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Number of Bookings Today: {bookingCount}</h3>
        <button onClick={handleBookingCountClick}>
          View Flight-wise Listing
        </button>
      </div>
      <div className="flight-listing">
        <h3>Empty Seats Today</h3>
        <button onClick={handleEmptySeatsClick}>
          View Flight-wise Listing
        </button>
      </div>
     
    </div>
  );
}

export default AdminDashboard;

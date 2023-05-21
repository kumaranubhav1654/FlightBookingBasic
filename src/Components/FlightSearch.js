import React, { useState } from "react";


function FlightSearch(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState([]);

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSearch = (origin) => {
   // e.preventDefault();
   const FilteredData=props.allFlights.filter((flight)=>
     flight.origin===origin);
    setFlights(FilteredData);
  };

  const handleSeatSelection = (flightId) => {
    // Handle seat selection for the selected flight
  };

  const handleBooking = (flightId) => {
    // Handle booking for the selected flight
  };

  return (
    <div>
      <h2>Flight Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={handleOriginChange}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={handleDestinationChange}
        />
        <button type="submit" onClick={()=>handleSearch(origin)}>Search</button>
      </form>


      {flights.map((flight) => (
        <div key={flight.id}>
          <h3>{flight.name}</h3>
          <strong>{flight.origin}</strong>
          <strong>{flight.destination}</strong>
          <button onClick={() => handleSeatSelection(flight.id)}>
            Select Seat
          </button>
          <button onClick={() => handleBooking(flight.id)}>Book</button>
        </div>
      ))}
    </div>
  );
}

export default FlightSearch;

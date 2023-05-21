import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from "./Components/AdminDashboard";
import FlightSearch from "./Components/FlightSearch";
import CustomerRegistration from "./Components/CustomerRegistration";
import flightData from "./Components/flightData.json"

function App() {
  return (
  <Router>
      <Routes>
       <Route path="/flight" element={<FlightSearch allFlights={flightData}/>} />
       <Route path="/admin" element={<AdminDashboard />} />
       <Route path="/" element={<CustomerRegistration />} />
    </Routes>
    </Router>
  );
}

export default App;

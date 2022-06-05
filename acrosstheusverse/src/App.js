import React, { useState, useEffect } from "react";
import NewJournalEntry from "./NewJournalEntry";
import StateList from "./StateList";
import Header from "./Header";
import NavBar from "./NavBar/NavBar";
import JournalEntry from "./NavBar/JournalEntry";
import Region from "./NavBar/Region";
import State from "./NavBar/State";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./NavBar/CardDetails";

// npx json-server --watch data/db.json --port 8000

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id" element={<CardDetails />} />
        <Route path="/journalentry" element={<JournalEntry />} />
        <Route path="/journalentry/id" element={<CardDetails />} />
        <Route path="/region" element={<Region />} />
        <Route path="/region/id" element={<CardDetails />} />
        <Route path="/state" element={<State />} />
        <Route path="/state/id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/states")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  const newTravels = (newLocation) => {
    const newPlaces = [...locations, newLocation];
    setLocations(newPlaces);
  };

  const statesToShow = locations.filter((location) =>
    location.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="usaBackground">
        <Header search={search} setSearch={setSearch} />
        <div className="state-Bar">
          <div className="state-Bar">
            <NewJournalEntry newTravels={newTravels} />
          </div>
          <div className="state-bar">
            <br></br>
            <h2 className="acrossThe">🚗 Across the US-verse 🚗</h2>
            <div className="stateBar">
              <StateList locations={statesToShow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

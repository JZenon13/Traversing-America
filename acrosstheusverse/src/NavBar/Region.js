import React, { useState, useEffect } from "react";

function Region() {
  const [regions, setRegions] = useState([]);
  const [chooseRegion, setChooseRegion] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/states")
      .then((res) => res.json())
      .then((data) => setRegions(data));
  }, []);
  const filteredRegions = regions.filter(
    (region) => region.region === chooseRegion
  );

  return (
    <>
      <label for="regions">Choose a Region </label>
      <select
        name="regions"
        id="regions"
        value={chooseRegion}
        onChange={(e) => setChooseRegion(e.target.value)}
      >
        <option value=""></option>
        <option value="New England">New England</option>
        <option value="Mideast">Mideast</option>
        <option value="Great Lakes">Great Lakes</option>
        <option value="Plains">Plains</option>
        <option value="Southeast">Southeast</option>
        <option value="Southwest">Southwest</option>
        <option value="Rocky Mountain">Rocky Mountain</option>
        <option value="Far West">Far West</option>
      </select>
      <img
        className="regionsMap"
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Census_Regions_and_Division_of_the_United_States.svg/1920px-Census_Regions_and_Division_of_the_United_States.svg.png"
      ></img>
      <br></br>
      <br></br>
      <hr></hr>
      {filteredRegions.map((region) => {
        return (
          <div key={region.state} class="text-center">
            {region.visited ? `: ${region.state} ✔️` : `: ${region.state} ❌`}
          </div>
        );
      })}
    </>
  );
}

export default Region;

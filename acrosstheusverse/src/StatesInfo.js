import React, { useState } from "react";
import LocationCard from "./LocationCard";

const StatesInfo = ({ location }) => {
  const [oneLocation, setOneLocation] = useState(false);
  const handleClick = () => {
    setOneLocation(!oneLocation);
  };
  return (
    <>
      <div className="stateBar">
        <div key={location.id} className="statePic">
          <div>
            <img
              className="img-fluid"
              src={location.image}
              alt={location.image}
            ></img>
          </div>
          <div>
            {oneLocation ? <LocationCard location={location} /> : null}
            <div className="stateInfo">
              <button onClick={() => handleClick()}>State Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatesInfo;

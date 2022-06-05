import React from "react";
import StatesInfo from "./StatesInfo";

function StateList({ locations }) {
  return (
    <div>
      {locations.map((location) => {
        return <StatesInfo key={location.id} location={location} />;
      })}
    </div>
  );
}

export default StateList;

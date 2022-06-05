import index from "./index.css";

const LocationCard = ({ location }) => {
  return (
    <div className="stateBar">
      <div className="stateInfo">
        <h1>State: {location.state}</h1>
        <h2>City: {location.city}</h2>
        <h3>Street: {location.street}</h3>
        <div
          className={
            location.visited
              ? `${index.badge} position-absolute badge bg-success`
              : `${index.badge} position-absolute badge bg-danger`
          }
        >
          {location.visited ? "Been There" : "Yet To Go"}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

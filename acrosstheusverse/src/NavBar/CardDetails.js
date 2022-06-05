import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const CardDetails = () => {
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/states${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  return (
    <div>
      {details.map((detail) => {
        return <div></div>;
      })}
    </div>
  );
};

export default CardDetails;

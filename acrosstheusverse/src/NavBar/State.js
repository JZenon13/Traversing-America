import React, { useState, useEffect } from "react";

function State() {
  const [states, setStates] = useState([]);
  const [region, setRegion] = useState("");
  const [state, setState] = useState("");
  const [traveled, setTraveled] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedState, setSelectedState] = useState({});
  const [id, setId] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/states")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);
  const handleStateEdit = (state) => {
    setSelectedState(state);
  };

  useEffect(() => {
    setState(selectedState.state);
    setRegion(selectedState.region);
    setTraveled(selectedState.visited);
    setRating(selectedState.rating);
    setId(selectedState.id);
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = {
      id: id,
      state: state,
      region: region,
      rating: rating,
      visited: traveled,
    };

    fetch(`http://localhost:8000/states/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newState),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => handleNewState(data));
  };

  const handleNewState = (data) => {
    const newList = [...states].map((state) => {
      if (state.id === data.id) {
        return data;
      } else {
        return state;
      }
    });
    setStates(newList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="text-center">
            <b>State</b>
          </div>
          <div className="col-15">
            <input
              className="form-control"
              type="text"
              name="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="text-center">
            <b>Rating</b>
          </div>
          <input
            className="form-control"
            type="number"
            min="0"
            max="5"
            name="rating"
            placeholder=""
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <div className="col">
            <div className="text-center">
              <b>Region</b>
            </div>
            <select
              className="form-control"
              name="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="New England">New England</option>
              <option value="Mideast">Mideast</option>
              <option value="Great Lakes">Great Lakes</option>
              <option value="Plains">Plains</option>
              <option value="Southeast">Southeast</option>
              <option value="Southwest">Southwest</option>
              <option value="Rocky Mountain">Rocky Mountain</option>
              <option value="Far West">Far West</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="y"
                value="Been there"
                onChange={() => setTraveled(true)}
                checked={traveled}
              />
              <label className="form-check-label">I've Been</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="y"
                value="Yet to go"
                onChange={() => setTraveled(false)}
                checked={!traveled}
              />
              <label className="form-check-label">Yet to Go</label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Region</th>
            <th scope="col">Been?</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit Experience</th>
          </tr>
        </thead>
        <tbody>
          {states.map((state) => {
            return (
              <tr>
                <td key={state.state}>{state.state}</td>
                <td>{state.region}</td>
                <td>{state.visited ? "Yes" : "No"}</td>
                <td>
                  {state.visited === true ? `${state.rating} /5 ` : `0 / 5`}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleStateEdit(state)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default State;

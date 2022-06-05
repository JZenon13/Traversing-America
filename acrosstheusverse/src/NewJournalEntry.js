import React, { useState } from "react";

function NewJournalEntry({ newTravels }) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [picture, setPicture] = useState("");
  const [street, setStreet] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = {
      state: state,
      city: city,
      image: picture,
      street: street,
      text: text,
      visited: true,
    };
    fetch("http://localhost:8000/states", {
      method: "POST",
      body: JSON.stringify(newLocation),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((newLocation) => newTravels(newLocation));
  };
  return (
    <>
      <div className="form">
        <form className="new-poem-form" onSubmit={handleSubmit}>
          <input
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            placeholder="Picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
          <input
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <textarea
            placeholder="What happened there stays here..."
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <input type="submit" value="Expedition Alert" />
          </div>
        </form>
      </div>
    </>
  );
}

export default NewJournalEntry;

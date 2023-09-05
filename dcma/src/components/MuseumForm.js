import { useState } from "react";
import dcSubwayBackground from "./dcSubway.png"; // Import the background image

function MuseumForm({ appendToMuseums, API }) {
  const initialMuseumForm = {
    name: "",
    image: "",
    admission: "",
    address: "",
    hours: "",
    desc: "",
  };
  const [formMuseumData, setFormMuseumData] = useState(initialMuseumForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormMuseumData({
      ...formMuseumData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newMuseum = { ...formMuseumData, comment: [], rating: [] };
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMuseum),
    })
      .then((r) => r.json())
      .then((d) => appendToMuseums(d));
    setFormMuseumData(initialMuseumForm);
  }

  const formStyle = {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    color: "#333",
    width: "600px",
    height: "600px",
    margin: "50px auto 0",
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const inputStyle = {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const admissionInputStyle = {
    ...inputStyle,
    marginBottom: "20px", // Added margin to admission input
  };

  const submitButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "20%",
    fontWeight: "bold",
    fontSize: "16px",
    margin: "0 auto",
  };

  const pageStyle = {
    backgroundImage: `url(${dcSubwayBackground})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the background covers the entire viewport
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backgroundBlendMode: "lighten"
  };

  return (
    <div style={pageStyle}>
      <h2>Know a museum we haven't covered? Add it here!</h2>
      
      <form style={formStyle} onSubmit={handleSubmit}>
        <label htmlFor="nameInput" style={labelStyle}>
          Name
        </label>
        <input
          type="text"
          id="nameInput"
          name="name"
          onChange={handleChange}
          value={formMuseumData.name}
          style={inputStyle}
          placeholder="Museum Name..."
        />
        <label htmlFor="imageInput" style={labelStyle}>
          Image
        </label>
        <input
          type="text"
          id="imageInput"
          name="image"
          onChange={handleChange}
          value={formMuseumData.image}
          style={inputStyle}
          placeholder="Museum Image URL..."
        />
        <label htmlFor="addressInput" style={labelStyle}>
          Address
        </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          onChange={handleChange}
          value={formMuseumData.address}
          style={inputStyle}
          placeholder="Museum Address..."
        />
        <label htmlFor="hoursInput" style={labelStyle}>
          Hours
        </label>
        <input
          type="text"
          id="hoursInput"
          name="hours"
          onChange={handleChange}
          value={formMuseumData.hours}
          style={inputStyle}
          placeholder="Museum Hours..."
        />
        <label htmlFor="descInput" style={labelStyle}>
          Description
        </label>
        <textarea
          id="descInput"
          name="desc"
          onChange={handleChange}
          value={formMuseumData.desc}
          style={{ ...inputStyle, height: "100px", fontFamily: "Arial" }}
          placeholder="Museum Name..."
        />
        <label htmlFor="admissionInput" style={labelStyle}>
          Admission
        </label>
        <input
          type="text"
          id="admissionInput"
          name="admission"
          onChange={handleChange}
          value={formMuseumData.admission}
          style={admissionInputStyle}
          placeholder="If admission is free, please enter: 0"
        />
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default MuseumForm;
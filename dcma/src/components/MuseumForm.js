import { useState } from "react";

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
    margin: "100px auto 0",
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
    marginBottom: "40px", 
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

  return (
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
      />
      <label htmlFor="descInput" style={labelStyle}>
        Description
      </label>
      <textarea
        id="descInput"
        name="desc"
        onChange={handleChange}
        value={formMuseumData.desc}
        style={{ ...inputStyle, height: "100px" }}
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
      />
      <button type="submit" style={submitButtonStyle}>
        Submit
      </button>
    </form>
  );
}

export default MuseumForm;
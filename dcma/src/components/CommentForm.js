import { useState } from "react";

function CommentForm({ API, id, feedback, addComment }) {
  const initialValue = {
    rating: "",
    comment: "",
  };
  const [feedbackFormData, setFeedbackFormData] = useState(initialValue);

  function handleChange(e) {
    const { name, value } = e.target;
    setFeedbackFormData({
      ...feedbackFormData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const numberRating = parseInt(feedbackFormData.rating);
    const newFeedback = {
      ...feedbackFormData,
      rating: numberRating,
    };
    const data = [...feedback, newFeedback];

    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ feedback: data }),
    })
      .then((res) => res.json())
      .then((data) => {
        addComment(data);
        setFeedbackFormData(initialValue);
      });
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={inputStyle}>
        <label htmlFor="rating">Rating (Please enter a number 1-5): </label>
        <input
          style={{
            height: "40px",
            width: "40px",
            fontSize: "20px",
            padding: "5px",
          }}
          type="number"
          step="1"
          min="0"
          max="5"
          id="rating"
          name="rating"
          value={feedbackFormData.rating}
          onChange={handleChange}
        />
      </div>
      <div style={inputStyle}>
        <label htmlFor="comment">Comment:</label>
        <br></br>
        <textarea
          style={{
            height: "150px",
            width: "300px",
            fontSize: "20px",
            fontFamily: "Arial",
            padding: "5px",
          }}
          id="comment"
          name="comment"
          value={feedbackFormData.comment}
          onChange={handleChange}
          rows="4" // Adjust the number of rows to control the comment box size
        />
      </div>
      <div style={inputStyle}>
        <input type="submit" />
      </div>
    </form>
  );
}

const formStyle = {
  backgroundColor: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  color: "#333",
  width: "450px",
  height: "350px",
  margin: "50px auto 0",
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontFamily: "Arial",
  fontSize: "20px",
};

export default CommentForm;

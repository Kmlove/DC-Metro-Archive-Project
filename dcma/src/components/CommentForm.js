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
      .then((data) => addComment(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={formGroupStyle}>
        <label htmlFor="rating">Rating (Please enter a number 1-5):</label>
        <input
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
      <div style={formGroupStyle}>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={feedbackFormData.comment}
          onChange={handleChange}
          rows="4" // Adjust the number of rows to control the comment box size
        />
      </div>
      <div style={formGroupStyle}>
        <input type="submit" />
      </div>
    </form>
  );
}

export default CommentForm;

const formGroupStyle = {
  marginBottom: "15px",
};
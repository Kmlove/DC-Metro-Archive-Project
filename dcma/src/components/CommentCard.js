import React from "react";

function CommentCard({ comment, rating }) {
  const cardStyle = {
    backgroundColor: "f8f0fac",
    fontFamily: "Arial, sans-serif",
    fontSize: "25px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    gap: "10px",
    textAlign: "center",
  };
  return (
    <div style={cardStyle}>
      <h4 style={{display: "inline"}}>{rating}  </h4>
      <p style={{display: "inline"}}>{comment}</p>
    </div>
  );
}

export default CommentCard;

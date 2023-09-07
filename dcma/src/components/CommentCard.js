import React from "react";

function CommentCard({ feedbackInfo,updateComment,specificMuseum,API,feedbackId }) {
  const {rating,comment,likes} = feedbackInfo
  const {id,feedback} = specificMuseum
  const LikeBtn = {
    width: "55px",
    height: "21px",
    padding: "6px 9px",
    textDecoration: "none",
    fontFamily: "Arial",
    cursor: "pointer"
  }
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
  function handleDelete(e){
    const data = feedback.filter((obj)=>(feedback.indexOf(obj)!==feedbackId))
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ feedback: data }),
    })
      .then((res) => res.json())
      .then((data) => updateComment(data));
  }
  function handleClick(e) {

    const newLikes = likes + 1
    const updatedFeedback = {
      ...feedbackInfo,
      likes: newLikes,
    };

    const data = feedback.map((obj)=>{
      if (feedback.indexOf(obj)===feedbackId) {
        return updatedFeedback
      } else {
        return obj
      }
    })

    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ feedback: data }),
    })
      .then((res) => res.json())
      .then((data) => updateComment(data));
  }
  return (
    <div style={cardStyle}>
      <h4 style={{display: "inline"}}>{rating}  </h4>
      <p style={{display: "inline"}}>{comment}  </p>
      <span style={{...LikeBtn,display: "inline"}} className="submitBtn" onClick={handleClick} >{likes} Likes</span>
      <p style={{display: "inline"}}>  </p>
      <span style={{...LikeBtn,display: "inline"}} className="DelCommentBtn" onClick={handleDelete}>Delete</span>
    </div>
  );

}

export default CommentCard;

import React from "react";

function CommentCard({comment, rating}){
    const cardStyle = {
        backgroundColor: "f8f0fac",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        marginTop: "10px",
        marginBottom: "10px",
        alignItems: "center",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        gap: "10px"
    }
    return(
        <div style={cardStyle}>
            <h4>{rating}</h4>
            <p>{comment}</p>
        </div>
    )
}

export default CommentCard
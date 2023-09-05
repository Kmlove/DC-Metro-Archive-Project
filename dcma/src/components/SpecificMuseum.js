import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { Link, useParams } from "react-router-dom";
import usCapitolBackground from "./capitalPhoto.jpeg";

function SpecificMuseum({ API, onRemoveMuseum, onUpdatedMuseum }) {
  const [specificMuseum, setSpecificMuseum] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => setSpecificMuseum(data));
  }, [id, API]);

  function handleClick() {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onRemoveMuseum(specificMuseum));
  }

  function addComment(updatedMuseum) {
    setSpecificMuseum(updatedMuseum);
    onUpdatedMuseum(updatedMuseum);
  }

  if (specificMuseum === null) {
    return <h1>LOADING...</h1>;
  } else {
    const { name, admission, desc, image, feedback } = specificMuseum;

    const arrayOfRating = feedback.map((Obj) => Obj.rating);
    const averageRating =
      arrayOfRating.reduce((partSum, a) => partSum + a, 0) /
      arrayOfRating.length;

    const ratingsArray = feedback.map((obj) => {
      return (
        <CommentCard
          key={feedback.indexOf(obj)}
          rating={obj.rating}
          comment={obj.comment}
        />
      );
    });

    return (
      <div style={containerStyle}>
        <div style={centeredContent}>
          <h1 style={headerStyle}>{name}</h1>
          <img
            src={image}
            alt={name}
            style={imageStyle}
            width="500px"
            height="400px"
          />
          <h3>
            Average Rating:{" "}
            {isNaN(averageRating)
              ? "No ratings yet- be the first!"
              : averageRating}
          </h3>
          <p style={admission === 0 ? admissionFreeStyle : admissionStyle}>
            {admission === 0 ? "Free Admission" : "Paid Admission"}
          </p>
          <div style={descriptionStyle}>
            <p style={descriptionTextStyle}>{desc}</p>
          </div>
          <Link to="/museums" onClick={handleClick} style={linkStyle}>
            Delete
          </Link>
          <CommentForm
            API={API}
            id={id}
            addComment={addComment}
            feedback={feedback}
          />
          {ratingsArray}
        </div>
      </div>
    );
  }
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: `url(${usCapitolBackground})`,
  backgroundSize: "cover",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backgroundBlendMode: "lighten",
  backgroundPosition: "center",
};

const centeredContent = {
  textAlign: "center",
};

const headerStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1E90FF",
  fontFamily: "Arial, sans-serif",
};

const imageStyle = {
  maxWidth: "100%",
  width: "500px",
  height: "400px",
  borderRadius: "5px",
  marginTop: "10px",
};

const admissionFreeStyle = {
  color: "#28a745",
  fontWeight: "bold",
};

const admissionStyle = {
  color: "#dc3545",
  fontWeight: "bold",
};

const descriptionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
  fontSize: "18px",
  lineHeight: "1.5",
  color: "#333",
};

const descriptionTextStyle = {
  color: "#333",
  fontSize: "25px",
  fontFamily: "Arial, sans-serif",
};

const linkStyle = {
  textDecoration: "none",
  color: "#007bff",
  fontWeight: "bold",
  marginLeft: "10px",
};

export default SpecificMuseum;

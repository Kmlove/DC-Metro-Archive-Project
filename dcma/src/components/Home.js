import { Link } from "react-router-dom";
import dcSubwayBackground from "./dcSubway.png"; // Import the background image

function Home({ randomMuseum }) {
  if (randomMuseum === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const arrayOfRating = randomMuseum.feedback.map((Obj) => Obj.rating);
    const averageRating =
      arrayOfRating.reduce((partSum, a) => partSum + a, 0) /
      arrayOfRating.length;

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Welcome to DC Museum Archive</h1>
        <div style={recommendedSpotContainerStyle}>
          <h2 style={subtitleStyle}>Recommended Spot of the Day</h2>
          <div style={cardStyle}>
            <h3 style={museumNameStyle}>{randomMuseum.name}</h3>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src={randomMuseum.image}
                alt={randomMuseum.name}
              />
            </div>
            <p style={descriptionStyle}>{randomMuseum.desc}</p>
            <p style={ratingStyle}>
              Average Rating:{" "}
              {isNaN(averageRating) ? "No ratings yet!" : averageRating}
            </p>
            <Link to={`/museums/${randomMuseum.id}`} style={linkStyle}>
              Learn More!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  textAlign: "center",
  padding: "20px",
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

const titleStyle = {
  fontSize: "48px", // Increase font size
  fontWeight: "bold",
  color: "#1E90FF",
  marginBottom: "80px", // Add more distance below the title
};

const recommendedSpotContainerStyle = {
  width: "50%",
  margin: "0 auto",
  backgroundColor: "#f0f0f0",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  marginBottom: "20px",
};

const subtitleStyle = {
  fontSize: "24px",
  color: "#333",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
};

const museumNameStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const imageContainerStyle = {
  width: "100%",
  height: "300px",
  overflow: "hidden",
  marginBottom: "10px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
};

const descriptionStyle = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#555",
  marginBottom: "10px",
};

const ratingStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#28a745",
  marginBottom: "10px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#007bff",
  fontWeight: "bold",
};

export default Home;






import { Link } from "react-router-dom";
import dcSubwayBackground from "../Images/dcSubway.png"; // Import the background image
import WeatherWidget from "./Weather";

function Home({ randomMuseum }) {
  const placeholderImage = "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80"

  function onImgError(e){
    e.target.src = placeholderImage
  }
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
        <WeatherWidget />
        <div style={recommendedSpotContainerStyle}>
          <h2 style={subtitleStyle}>Spot of the Day</h2>
          <div style={cardStyle}>
            <h3 style={museumNameStyle}>{randomMuseum.name}</h3>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src={randomMuseum.image?randomMuseum.image:placeholderImage}
                alt={randomMuseum.name}
                onError={onImgError}
              />
            </div>
            <p style={descriptionStyle}>{randomMuseum.desc}</p>
            <p style={ratingStyle}>
              Average Rating:{" "}
              {isNaN(averageRating) ? "No ratings yet!" : averageRating.toFixed(2)}
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
  marginBottom: "45px", // Add more distance below the title
};

const recommendedSpotContainerStyle = {
  width: "75%",
  maxWidth: "950px",
  margin: "0 auto",
  backgroundColor: "#f0f0f0",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  marginBottom: "20px",
};

const subtitleStyle = {
  fontSize: "30px",
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




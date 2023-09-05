import { Link } from "react-router-dom";

function Home({ randomMuseum }) {
  console.log(randomMuseum);
  if (randomMuseum === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const arrayOfRating = randomMuseum.feedback.map((Obj) => Obj.rating);
    const averageRating =
      arrayOfRating.reduce((partSum, a) => partSum + a, 0) /
      arrayOfRating.length;

    return (
      <>
        <h1>Welcome to DC Museum Archive</h1>
        <h2> Recommended Spot of the Day</h2>
        <div>
          <h3>{randomMuseum.name}</h3>
          <p>{randomMuseum.desc}</p>
          <img src={randomMuseum.image} alt={randomMuseum.name} />
          <p>
            Average Rating:{" "}
            {isNaN(averageRating) ? "No ratings yet!" : averageRating}
          </p>
          <Link to={`/museums/${randomMuseum.id}`}>Learn More!</Link>
        </div>
      </>
    );
  }
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  //backgroundImage: `url(${usCapitolBackground})`,
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

export default Home;

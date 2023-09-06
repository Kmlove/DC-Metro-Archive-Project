import MuseumCard from "./MuseumCard"
// import dcSubwayBackground from "./dcSubway.png";
import dcSubwayBackground from "../Images/dcSubway.png"; // Import the background image


function MuseumList({museums, API, onRemoveMuseum}){

    const renderMuseums = museums.map((museum)=>{return <MuseumCard key={museum.id} onRemoveMuseum={onRemoveMuseum} API={API} museum={museum}/>})
    return(
        <div style={BackgroundStyle}>
          <h1 style={titleStyle}>Museum List</h1>
          <div style={ListStyle}>{renderMuseums}</div>
        </div>
    )
}

const ListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2% 2%",
    justifyContent: "center",
    marginTop: "4%",
    marginBottom: "4%",
}

const titleStyle = {
    fontSize: "48px", // Increase font size
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: "40px", // Add more distance below the title
    textAlign: "center",
  };
const BackgroundStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundImage: `url(${dcSubwayBackground})`, // Set the background image
    backgroundSize: "auto auto",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the background covers the entire viewport
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backgroundBlendMode: "lighten"
}

export default MuseumList
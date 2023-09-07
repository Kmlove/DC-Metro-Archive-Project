import MuseumCard from "./MuseumCard"
import dcSubwayBackground from "../Images/dcSubway.png"; // Import the background image

function MuseumList({museums, API, onRemoveMuseum, isFree, search, onIsFreeChange, onSearchBarChange}){
    const renderMuseums = museums.map((museum)=>{return <MuseumCard key={museum.id} onRemoveMuseum={onRemoveMuseum} API={API} museum={museum}/>})
    
    function handleSearchChange(e){
        onSearchBarChange(e.target.value)
    }
    function handleCheckBoxChange(e){
        onIsFreeChange(e.target.checked)
    }
    
    return(
        <div style={BackgroundStyle}>
          <h1 style={titleStyle}>Museum List</h1>
          <label htmlFor="searchbar">Search Museums:</label>
          <input id="searchBar" name="searchBar" type="text" value={search} onChange={handleSearchChange}/>
          <label htmlFor="checkbox">See free museums:</label>
          <input id="checkbox" name="isFree" type="checkbox" value={isFree} onChange={handleCheckBoxChange}/>
          <div style={ListStyle}>{renderMuseums}</div>
        </div>
    )
}

const ListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2% 2%",
    justifyContent: "center",
    marginTop: "-10px",
    marginBottom: "4%",
    maxWidth: "1200px",
}

const titleStyle = {
    fontSize: "48px", // Increase font size
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: "50px", // Add more distance below the title
    marginTop: "5px",
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
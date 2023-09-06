import { Link } from "react-router-dom"


function MuseumCard({museum, API, onRemoveMuseum}){
    const {name, id, feedback, image} = museum
    
    function handleClick(){
        fetch(`${API}/${id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => onRemoveMuseum(museum))
    }
    const arrayOfRating = feedback.map((Obj) => Obj.rating);
    const averageRating = arrayOfRating.reduce((partSum, a) => partSum + a, 0)/arrayOfRating.length;
    return(
        <div style={CardStyle} className="MuseumCard">
            <h3>{name}</h3>
            <h4>Average Rating:{" "}
            {isNaN(averageRating)
              ? "No ratings yet"
              : averageRating}</h4>
            <img style={ImgStyle} src={image}></img>
            <br></br>
            <Link className="SeeMore" to={`/museums/${id}`}>See More</Link>
            <button onClick={handleClick} style={DeleteStyle} className="DelBtn" >Delete</button>
        </div>
    )
}

const CardStyle = {
    width: "25%",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    flex: "35%"
  };

const ImgStyle = {
    display: "block",
    width: "75%",
    margin: "0 auto",
 }

const DeleteStyle = {

}

export default MuseumCard
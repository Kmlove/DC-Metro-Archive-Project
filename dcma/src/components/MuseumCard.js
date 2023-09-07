import { Link } from "react-router-dom";

function MuseumCard({ museum, API, onRemoveMuseum, museums }) {
  let { name, id, feedback, image } = museum;

  if (image === "") {
    image =
      "https://w7.pngwing.com/pngs/169/68/png-transparent-architectural-engineering-graphy-work-in-progress-angle-building-text.png";
  }

  function handleClick() {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onRemoveMuseum(museum));
  }
  const arrayOfRating = feedback.map((Obj) => Obj.rating);
  const averageRating =
    arrayOfRating.reduce((partSum, a) => partSum + a, 0) / arrayOfRating.length;

  const CardStyle = {
    width: museums.length <= 2 ? "450px" : "45%",
    height: "450px",
    maxWidth: "800px",
    backgroundColor: "#f0f0f0",
    padding: "5px 10px",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    textAlign: "center",
    position: "relative",
  };

  const ImgStyle = {
    display: "block",
    width: "80%",
    height: "55%",
    margin: "0 auto",
  };

  const DivBtnStyle = {
    display: "flex",
    justifyContent: "space-around",
    position: "absolute",
    bottom: "15px",
    left: "10px",
    right: "10px",
  };

  return (
    <div style={CardStyle} className="MuseumCard">
      <h3>{name}</h3>
      <h4>
        Average Rating:{" "}
        {isNaN(averageRating) ? "No ratings yet" : averageRating}
      </h4>
      <img style={ImgStyle} src={image}></img>
      <br></br>
      <div style={DivBtnStyle}>
        <div>
          <Link className="SeeMore" to={`/museums/${id}`}>
            See More
          </Link>
        </div>
        <button onClick={handleClick} className="DelBtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default MuseumCard;

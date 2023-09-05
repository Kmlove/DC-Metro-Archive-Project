import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { Link, useParams } from "react-router-dom";

function SpecificMuseum({ API, onRemoveMuseum, onUpdatedMuseum }) {

  const [specificMuseum, setSpecificMuseum] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/${id}`)
    .then((res) => res.json())
    .then((data) => setSpecificMuseum(data));
  }, [id])

  function handleClick(){
    fetch(`${API}/${id}`, {
        method: "DELETE"
    })
    .then(res=> res.json())
    .then(data => onRemoveMuseum(specificMuseum))
  }

  function addComment(updatedMuseum){
    setSpecificMuseum(updatedMuseum)
    onUpdatedMuseum(updatedMuseum)
  }
  
  if (specificMuseum === null) {
    return <h1>LOADING...</h1>;
  } else {
    const {name, admission, desc, hours, image, feedback} = specificMuseum
    const ratingsArray = feedback.map(obj => {
      return <CommentCard rating={obj.rating} comment={obj.comment}/>
    })
    return (
      <>
        <div>
          <h1>{name}</h1>
          <img src={image} alt={name} />
          {admission === 0 ? "test" : "test2"}
        </div>
        <div>
          <p>{desc}</p>
        </div>
        <Link to="/museums" onClick={handleClick}>Delete</Link>
        <CommentForm API={API} id={id} addComment={addComment} feedback={feedback}/>
        {ratingsArray}
      </>
    );
  }

}

export default SpecificMuseum;

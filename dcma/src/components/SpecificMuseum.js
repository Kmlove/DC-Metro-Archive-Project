import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useParams } from "react-router-dom";

function SpecificMuseum({ museum, API }) {
  // if (museum === undefined) {
  //   return <h1>LOADING...</h1>;
  // } else {
  //   const {name,hours,desc,admission,address,image,rating,comment} = museum
  //   return (
  //     <>
  //       <p>Inside else</p>
  //       <div>
  //         <h1>{name}</h1>
  //         <img src={image} alt={name} />
  //         {admission === 0 ? "test" : "test2"}
  //       </div>
  //       <div>
  //         <p>{desc}</p>
  //       </div>
  //     </>
  //   );
  // }

  const [specificMuseum, setSpecificMuseum] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/${id}`)
    .then((res) => res.json())
    .then((data) => setSpecificMuseum(data));
  }, [id])

  console.log(specificMuseum)
  
    if (specificMuseum === null) {
    return <h1>LOADING...</h1>;
  } else {
    const {name, admission, comment, desc, hours, image, rating} = specificMuseum
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
      </>
    );
  }

}

export default SpecificMuseum;

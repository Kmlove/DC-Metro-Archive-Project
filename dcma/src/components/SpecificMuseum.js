import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

function SpecificMuseum({museum}){
    const {name,hours,desc,admission,address,image,rating,comment} = museum
    return(
        <>
            <div>
                <h1>{name}</h1>
                <img src={image} alt={name}/>
                {admission === 0 ?"test":"test2"} 
            </div>
            <div>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default SpecificMuseum
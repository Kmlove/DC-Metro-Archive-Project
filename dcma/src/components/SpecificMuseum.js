import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

function SpecificMuseum({museum}){
    const {name,hours,desc,admission,address,image,rating,comment} = museum
    console.log(name)
    return(
        <>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default SpecificMuseum
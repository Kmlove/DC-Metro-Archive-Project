import { Link } from "react-router-dom"


function MuseumCard({museum, API, onRemoveMuseum}){
    const {name, id} = museum
    
    function handleClick(){
        fetch(`${API}/${id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => onRemoveMuseum(museum))
    }

    return(
        <>
            <p>{name}</p>
            <Link to={`/museums/${id}`}>See More...</Link>
            <button onClick={handleClick}>Delete</button>
        </>
    )
}

export default MuseumCard
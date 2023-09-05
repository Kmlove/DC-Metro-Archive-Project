import { Link } from "react-router-dom"


function MuseumCard({museum}){
    const {name, id} = museum
    return(
        <>
            <p>{name}</p>
            <Link to={`/MuseumList/${id}`}>See More...</Link>
        </>
    )
}

export default MuseumCard
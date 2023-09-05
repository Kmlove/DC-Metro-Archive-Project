import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/MuseumList">Museums</NavLink>
            <NavLink to="/MuseumForm">Add Museum</NavLink>
        </div>
    )
}

export default Navbar
import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/museums">Museums</NavLink>
            <NavLink to="/museums/new">Add Museum</NavLink>
        </div>
    )
}

export default Navbar
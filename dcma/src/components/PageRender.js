import Navbar from "./Navbar"
import Home from "./Home"
import MuseumForm from "./MuseumForm"
import MuseumList from "./MuseumList"
import SpecificMuseum from "./SpecificMuseum"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function PageRender(){
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/MuseumList" element={<MuseumList/>}/>
                    <Route path="/MuseumForm" element={<MuseumForm/>}/>
                    <Route path="/MuseumList/:id" element={<SpecificMuseum museum={{}}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default PageRender
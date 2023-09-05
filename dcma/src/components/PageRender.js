import Navbar from "./Navbar"
import Home from "./Home"
import MuseumForm from "./MuseumForm"
import MuseumList from "./MuseumList"
import SpecificMuseum from "./SpecificMuseum"
import {useState,useEffect} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
const API = "http://127.0.0.1:3001/museums"

function PageRender(){
    const [museums,setMuseums] = useState([])
    function appendToMuseums(newMuseum){
        setMuseums([...museums,newMuseum])
    }
    useEffect(()=>{
        fetch(API)
        .then(r=>r.json())
        .then(d=>setMuseums(d))
    },[])

    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/MuseumList" element={<MuseumList museums={museums}/>}/>
                    <Route path="/MuseumForm" element={<MuseumForm appendToMuseums={appendToMuseums} API={API}/>}/>
                    <Route path="/MuseumList/:id" element={<SpecificMuseum API={API} museum={museums[0]}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default PageRender
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
    function onRemoveMuseum(deletedMuseum){
        const updatedMuseums = museums.filter(museum => museum.id !== deletedMuseum.id)
        setMuseums(updatedMuseums)
    }
    function onUpdatedMuseum(updatedMuseum){
        const updatedMuseums = museums.map(museum => {
            if (museum.id === updatedMuseum.id){
                 return updatedMuseum
            }else {
                return museum
            }
        })
        setMuseums(updatedMuseums)
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
                    <Route path="/museums" element={<MuseumList museums={museums} onRemoveMuseum={onRemoveMuseum} API={API}/>}/>
                    <Route path="/museums/new" element={<MuseumForm appendToMuseums={appendToMuseums} API={API}/>}/>
                    <Route path="/museums/:id" element={<SpecificMuseum API={API} onRemoveMuseum={onRemoveMuseum} onUpdatedMuseum={onUpdatedMuseum}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default PageRender
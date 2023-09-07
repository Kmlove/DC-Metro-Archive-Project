import Navbar from "./Navbar";
import Home from "./Home";
import MuseumForm from "./MuseumForm";
import MuseumList from "./MuseumList";
import SpecificMuseum from "./SpecificMuseum";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const API = "http://localhost:3001/museums";

function PageRender() {
  const [museums, setMuseums] = useState([]);
  const [search, setSearch] = useState("")
  const [isFree, setIsFree] = useState(false)
  const [filteredMuseums, setFilteredMuseums] = useState([])

  function appendToMuseums(newMuseum) {
    setMuseums([...museums, newMuseum]);
  }
  function onRemoveMuseum(deletedMuseum) {
    const updatedMuseums = museums.filter(
      (museum) => museum.id !== deletedMuseum.id
    );
    setMuseums(updatedMuseums);
  }
  function onUpdatedMuseum(updatedMuseum) {
    const updatedMuseums = museums.map((museum) => {
      if (museum.id === updatedMuseum.id) {
        return updatedMuseum;
      } else {
        return museum;
      }
    });
    setMuseums(updatedMuseums);
  }
  function onSearchBarChange(value){
    setSearch(value)
  }
  function onIsFreeChange(value){
    setIsFree(value)
  }

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((d) => {
        setMuseums(d)
        setFilteredMuseums(d)
      });
  }, []);

  const randomMuseum = museums[Math.floor(Math.random() * museums.length)];


 useEffect(()=>{
  if(isFree){
    const filteredMuseums = museums.filter(museum => museum.admission === 0)
    setFilteredMuseums(filteredMuseums.filter(museum => {
      return museum.name.toLowerCase().includes(search.toLowerCase()) || museum.desc.toLowerCase().includes(search.toLowerCase())
    }))
  } else{
    setFilteredMuseums(museums.filter(museum => {
      return museum.name.toLowerCase().includes(search.toLowerCase()) || museum.desc.toLowerCase().includes(search.toLowerCase())
    }))
  }
 }, [search, isFree])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home randomMuseum={randomMuseum} />} />
          <Route
            path="/museums"
            element={
              <MuseumList
                museums={filteredMuseums}
                onRemoveMuseum={onRemoveMuseum}
                API={API}
                search={search}
                isFree={isFree}
                onSearchBarChange={onSearchBarChange}
                onIsFreeChange={onIsFreeChange}
              />
            }
          />
          <Route
            path="/museums/new"
            element={<MuseumForm appendToMuseums={appendToMuseums} API={API} />}
          />
          <Route
            path="/museums/:id"
            element={
              <SpecificMuseum
                API={API}
                onRemoveMuseum={onRemoveMuseum}
                onUpdatedMuseum={onUpdatedMuseum}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PageRender;

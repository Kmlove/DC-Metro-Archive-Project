import MuseumCard from "./MuseumCard"

function MuseumList({museums, API, onRemoveMuseum}){
    console.log(museums)
    const renderMuseums = museums.map((museum)=>{return <MuseumCard key={museum.id} onRemoveMuseum={onRemoveMuseum} API={API} museum={museum}/>})
    return(
        <>{renderMuseums}</>
    )
}

export default MuseumList
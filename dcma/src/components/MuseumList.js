import MuseumCard from "./MuseumCard"

function MuseumList({museums}){
    console.log(museums)
    const renderMuseums = museums.map((museum)=>{return <MuseumCard key={museum.id} museum={museum}/>})
    return(
        <>{renderMuseums}</>
    )
}

export default MuseumList
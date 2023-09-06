import MuseumCard from "./MuseumCard"

function MuseumList({museums, API, onRemoveMuseum}){

    const renderMuseums = museums.map((museum)=>{return <MuseumCard key={museum.id} onRemoveMuseum={onRemoveMuseum} API={API} museum={museum}/>})
    return(
        <div style={ListStyle}>{renderMuseums}</div>
    )
}

const ListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2% 2%",
    justifyContent: "center",
    marginTop: "4%",
    marginBottom: "4%",
}


export default MuseumList
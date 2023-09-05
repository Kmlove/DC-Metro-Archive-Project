import {useState} from "react"

function MuseumForm({appendToMuseums,API}){
    const initialMuseumForm = {
        name:"",
        image:"",
        admission:"",
        address:"",
        hours:"",
        desc:""
    }
    const [formMuseumData,setFormMuseumData] = useState(initialMuseumForm)
    function handleChange(e){
        const {name,value} = e.target
        setFormMuseumData({
            ...formMuseumData,
            [name]:value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        const newMuseum = {...formMuseumData,comment:[],rating:[]}
        fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:(JSON.stringify(newMuseum))})
        .then(r=>r.json())
        .then(d=>appendToMuseums(d))
        setFormMuseumData(initialMuseumForm)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" name="name" onChange={handleChange} value={formMuseumData.name}/>
                <label htmlFor="imageInput">Image</label>
                <input type="text" id="imageInput" name="image" onChange={handleChange} value={formMuseumData.image}/>
                <label htmlFor="addressInput">Address</label>
                <input type="text" id="addressInput" name="address" onChange={handleChange} value={formMuseumData.address}/>
                <label htmlFor="hoursInput">Hours</label>
                <input type="text" id="hoursInput" name="hours" onChange={handleChange} value={formMuseumData.hours}/>
                <label htmlFor="descInput">Description</label>
                <input type="text" id="descInput" name="desc" onChange={handleChange} value={formMuseumData.desc}/>
                <label htmlFor="admissionInput">Admission</label>
                <input type="text" id="admissionInput" name="admission" onChange={handleChange} value={formMuseumData.admission}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default MuseumForm
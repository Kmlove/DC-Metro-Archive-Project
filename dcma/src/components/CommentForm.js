import { useState } from "react"

function CommentForm({API, id, feedback, addComment}){
    const initialValue = {
        rating: "",
        comment: ""
    }
    const [feedbackFormData, setFeedbackFormData] = useState(initialValue)

    function handleChange(e){
        const {name, value} = e.target
        setFeedbackFormData({
            ...feedbackFormData,
            [name]: value
        })
    }
   
    function handleSubmit(e){
        e.preventDefault()
        const numberRating = parseInt(feedbackFormData.rating)
        const newFeedback = {
            ...feedbackFormData,
            rating: numberRating
        }
        const data = [...feedback, newFeedback]
        
        fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify({feedback: data})
        })
        .then(res => res.json())
        .then(data => addComment(data))

    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Comment: </label>
            <input type="text" id="comment" name="comment" value={feedbackFormData.comment} onChange={handleChange}/>
            <label htmlFor="rating">Rating {"(Please enter number 1-5)"}: </label>
            <input type="number" step="1" min="0" max="5" id="rating" name="rating" value={feedbackFormData.rating} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default CommentForm
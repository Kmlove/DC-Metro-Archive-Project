

function CommentCard({comment, rating}){
    return(
        <>
            <h4>{rating}</h4>
            <p>{comment}</p>
        </>
    )
}

export default CommentCard
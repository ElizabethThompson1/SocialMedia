import react from "react";

function likesDislikes(){

    function likeButton (){
        for(let i=0; i<0; i++){
            console.log(i) }
    }
    function dislikeButton (){
        for(let i=0; i<0; i++){
            console.log(i) }
    }
    // not working cause it's not indiviusally connected to each post 
    return(
        <div>
            <button onSubmit ={likeButton}>Like</button>
            <button onSubmit={dislikeButton}>Dislike</button>
        </div>
        
        
        )
}
export default likesDislikes; 

import React, { useState } from "react";
import axios from "axios";
import {RssFeed, People, Comment, PersonAdd} from "@material-ui/icons"
//import { Feed } from "@mui/icons-material";


// function Post(){ 
//     const [post, setPost] = useState (null)
//     const [img , setimg] = useState(null)
//     const[like, setlike] = useState(0)



//     async function handleSubmit(event) {
//         event.preventDefault();
//         let registerObject = {
//           Desc: post,
//           img: img,
//           like: like
//           };
//           debugger;
//         let response = await axios.post("http://localhost:5000/api/posts/", registerObject);
//           console.log(response.data)
//            localStorage.setItem('token', response.data);
//           window.location = '/login';
//     }



//     return(
//         <div className="Comment">
//             <form onSubmit={handleSubmit}>
//                 <div class="card">
//                 <div class="card-header">
//                     Post
//                 </div>
//                 <div class="card-body">
//                     <blockquote class="blockquote mb-0">
//                     <p>A well-known quote, contained in a blockquote element.</p>
//                     <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
//                     </blockquote>
//                 </div>
//                 </div>
//                 <button type='submit' >Post</button>
//             </form>
//         </div>
//     )
// }
// export default Post;
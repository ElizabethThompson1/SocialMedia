// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home(){
   const [userProfile, setUserProfile] = useState("")
   const [post, setPost] = useState (null)
   const [img , setimg] = useState(null)
   const[like, setlike] = useState(0)

   useEffect(() => {
      getCurrentUser()
   }, [])


   async function getCurrentUser(event) {
      const jwt = localStorage.getItem('token');
      let configObject = {
         headers: {
            'x-auth-token': jwt
         }
      }
      let response = await axios.get(`http://localhost:5000/api/users/current`, configObject)
      setUserProfile(response.data)
       console.log(response.data)
   }
  



   async function handleSubmit(event) {
       event.preventDefault();
       let registerObject = {
         Desc: post,
         img: img,
         like: like
         };
         debugger;
       let response = await axios.post("http://localhost:5000/api/posts/", registerObject);
         console.log(response.data)
          localStorage.setItem('token', response.data);
         window.location = '/login';
   }



    return(
     <div>
           <div class="row">
  <div class="col-sm-3">
  </div>
  <div class="col-md-6">
        <h1> {userProfile.name}</h1>
      
       <div className="Comment">
           <form onSubmit={handleSubmit}>
         
               <div class="card">
               <div class="card-header">
                   Post
               </div>
               <div class="card-body">
                   <blockquote class="blockquote mb-">
                      <input></input>                     
                     <button type='submit' >Post  </button>
                     
                     
                   </blockquote>
               </div>
               </div>
           </form>
           </div>
       </div>
       </div>
    </div>

    );
}
export default Home;
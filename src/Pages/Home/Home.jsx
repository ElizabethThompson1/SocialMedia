// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home(){
   const [userProfile, setUserProfile] = useState("")

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
 


    return(
     <div>
        <h1> {userProfile.name}</h1>
          
       
    </div>

    );
}
export default Home;
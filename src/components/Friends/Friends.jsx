import React, { useState, useEffect } from "react";
import axios from 'axios';


function Friends(){
    const [friends, setFriends] = useState("")

   useEffect(() => {
      getAllFriends();
   }, [])


    async function getAllFriends(event) {
    const jwt = localStorage.getItem('token');
    let configObject = {
       headers: {
          'x-auth-token': jwt
       }
    } 
    let response = await axios.get(`http://localhost:5000/api/users/allfriends`, configObject)
    setFriends(response.data)
     console.log(response.data)
    }

      
  

    return(
    
        <div>
            <button className = "getAllFriends" onClick={friends.friends}>LogOut</button>
        </div>
    );
}
export default Friends;
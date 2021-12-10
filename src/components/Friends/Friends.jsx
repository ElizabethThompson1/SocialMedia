import React, { useState, useEffect } from "react";
import axios from 'axios';


function Friends(){
    const [friends, setFriends] = useState([])

   useEffect(() => {
      getAllFriends();
   }, [])


    async function getAllFriends() {
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
          {/* <button className = "getAllFriends" onClick={getAllFriends}>Friends</button> */}
            {friends.length > 0 &&
                <h1>{friends[0].friendId}</h1>
            }
           
        </div>
    );
}
export default Friends;
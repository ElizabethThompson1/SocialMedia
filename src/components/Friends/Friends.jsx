import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

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
            <Link to='/'>Home</Link>
          {/* <button className = "getAllFriends" onClick={getAllFriends}>Friends</button> */}
            {friends.length > 0 &&
              friends.map(friend => <h1>{friend.name} </h1> )  
            }
        
           
        </div>
    );
}
export default Friends;
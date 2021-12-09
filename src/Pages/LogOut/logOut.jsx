import React from "react"

const logOut=() =>{

    function logout(){
        localStorage.removeItem('token')
        window.location = '/login';
    }

    return(

             <div>
                <button className = "LogOut-button" onClick={logout}>LogOut</button>
            </div>

    )
}

export default logOut;
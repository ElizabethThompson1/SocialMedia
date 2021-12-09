import React from "react"

const logOut=() =>{
    return(
     <div>
             <button className = "LogOut-button" onClick= {localStorage.removeItem('token')}></button>
          </div>
)
}
export default logOut;
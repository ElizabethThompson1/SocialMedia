import React from "react"

const logOut=() =>{
    return(
     <div>
        <button className = "LogOut-button" onClick= {localStorage.removeItem('token')}>LogOut</button>
        <Route path="/login"  component={Login} />
    </div>
)
}
export default logOut;
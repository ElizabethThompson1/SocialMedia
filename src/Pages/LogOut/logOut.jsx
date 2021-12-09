import React from "react"

const logOut=() =>{
    return(
        <Route>
             <div>
                <button className = "LogOut-button" onClick= {localStorage.removeItem('token')}>LogOut</button>
            </div>
         </Route>
    )
}

export default logOut;
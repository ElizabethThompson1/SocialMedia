import React from 'react';
import {Link} from 'react-router-dom';
import LogOut from '../../Pages/LogOut/logOut';
//import register from '../../Pages/Register/Register';


function TopBar({user}){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                {user && <h4>Welcome {user.username}</h4>}
                <ul class="navbar-nav">
                <li>
                                <Link to='/allFriends'>Friends</Link>
                            </li>
                            {!user &&
                                <React.Fragment>
                                    <li>
                                        <Link to='/register'>Register</Link>
                                    </li>
                                    <li>
                                        <Link to='/login'>Login</Link>
                                    </li>
                                </React.Fragment>
                            }
                            {user &&
                                <React.Fragment>
                                    <li>
                                        <LogOut />
                                    </li>
                        </React.Fragment>                   
                    }
                </ul>
            </div>
        </nav>
    )
}

export default  TopBar;



import React from 'react';
import {Link} from 'react-router-dom';
import LogOut from '../../Pages/LogOut/logOut';
//import register from '../../Pages/Register/Register';
import Friends from '../Friends/Friends';


function TopBar({user}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                {user && <h4>Welcome {user.username}</h4>}
                <ul className="navbar-nav">
                <li>
                            <Link to='/allfriends'>
                                <button>Get Friends</button>
                            </Link>
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



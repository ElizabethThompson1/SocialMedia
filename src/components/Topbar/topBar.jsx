import React from 'react';
import {Link} from 'react-router-dom';
import LogOut from '../../Pages/LogOut/logOut';

function TopBar({user}){
    return(
        <div>
            {user && <h4>Welcome {user.username}</h4>}
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/friends'>Friends</Link>
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
    );
}

export default  TopBar;
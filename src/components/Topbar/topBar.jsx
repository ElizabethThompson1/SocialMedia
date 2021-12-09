
// import React from 'react';
// // import {link} from 'react-router-dom';


// function topBar({user}){
//     return(
//         <div>
//             {user && <h4>Welcome {user.username}</h4>}
//             <ul>
//                 <li>
//                     <link to='/'>Home</link>
//                 </li>
//                 <li>
//                     <link to='/friends'>Friends</link>
//                 </li>
//                 {!user &&
//                     <React.Fragment>
//                         <li>
//                             <link to='/register'>Register</link>
//                         </li>
//                         <li>
//                             <link to='/login'>Login</link>
//                         </li>
//                     </React.Fragment>
//                 }
//                 {user &&
//                     <React.Fragment>
//                         <li>
//                             <link to='/logout'>Logout</link>
//                         </li>
//                     </React.Fragment>                   
//                 }
//             </ul>

//         </div>
//     );
// }

// export default  topBar;
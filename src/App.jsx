// import Profile from "./Pages/Profile/Profile";
// import Register from "./Pages/Register/Register";
import { Switch, Route} from "react-router-dom";
// import React, {useState,Component} from "react";
// import topBar from  "./components/Topbar/topBar";
import LogOut from "./Pages/LogOut/logOut";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Register from "./Pages/Register/register";
import Friends from "./components/Friends/friends";


function App(){
    return(
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/logout" component={LogOut}/>
            </Switch>
        </div>
    );
}
// class App extends Component {
//      state={}

//      componentDidMount(){
//         const jwt = localStorage.getItem('token');
//         try{
//             const user = jwtDecode(jwt);
//             this.useState({
//                 user
//             });
//         } catch{
//         }

//         }
//         render(){
//         const user = this.state.user;
//         return(
//             <div>
//             <topBar user={user} />
//             <div>
//                 <Switch>
//                     <Route path='/profile' render={props => {
//                         if (!user){
//                             return <Redirect to="/login" />;

//                         } else {
//                             return <ProfileScreen {...props} jwt={jwt} />
//                         }
//                     }}
//                  />
//                     {/* <Route path="/register" component={RegisterScreen} /> */}
//                     <Route path="/login" component={Login} />
//                     <Route path="/logout" component={logOut} user={user}/>
//                     {/* <Route path="/not-found" component={NotFound} /> */}
//                     <Route path="/" exact component={Home} />
//                     {/* <Redirect to="/not-found"/> */}
//                 </Switch>
//             </div>
//         </div>
//         );
//     }
// }
export default App;
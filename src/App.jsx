// import Profile from "./Pages/Profile/Profile";
// import Register from "./Pages/Register/Register";
import { Switch, Route} from "react-router-dom";
import React, {useState,Component} from "react";
// import topBar from  "./components/Topbar/topBar";
import LogOut from "./Pages/LogOut/logOut";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
// import Friends from "./components/Friends/friends";


class App extends Component {
     state={
         user: null
     }

     componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const decodedUser = jwtDecode(jwt);
            this.setState({
                user: decodedUser
            });
        } catch{
        }

        }
        render(){
        const user = this.state.user;
        return(
            <div>
            <topBar user={user} />
            <div>
                <Switch>
                    <Route path='/profile' render={props => {
                        if (!user){
                            return <Redirect to="/login" />;

                        } else {
                            return <Home {...props} jwt={jwt} />
                        }
                    }}
                 />
                    {/* <Route path="/register" component={RegisterScreen} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={LogOut} user={user}/>
                    {/* <Route path="/not-found" component={NotFound} /> */}
                    <Route path="/" exact component={Home} />
                    {/* <Redirect to="/not-found"/> */}
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
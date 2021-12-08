import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
// import Profile from "./Pages/Profile/Profile";
// import Register from "./Pages/Register/Register";
import { Switch, Route} from "react-router-dom";
import React, {useState,Component} from "react";


class App extends Component {
     state={}

     componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.useState({
                user
            });
        } catch{
        }

        }
        render(){
        const user = this.state.user;
        return(
            <div>
            <NavigationBar user={user} />
            <div>
                <Switch>
                    <Route path='/profile' render={props => {
                        if (!user){
                            return <Redirect to="/login" />;

                        } else {
                            return <ProfileScreen {...props} user={user} />
                        }
                    }}
                 />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact component={HomeScreen} />
                    <Redirect to="/not-found"/>
                </Switch>
            </div>
        </div>
        );
    }
}

export default App;
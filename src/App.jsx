// import Profile from "./Pages/Profile/Profile";
import { Switch, Route, Redirect} from "react-router-dom";
import React, {  Component } from "react";
 import TopBar from  "./components/Topbar/topBar";
import LogOut from "./Pages/LogOut/logOut";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
// import Friends from "./components/Friends/friends";
import jwt_decode from "jwt-decode";


class App extends Component {
    constructor(props){
        super(props);
        const jwt = localStorage.getItem('token');
        try{
            const decodedUser = jwt_decode(jwt);
            this.state = {
                user: decodedUser
            }
        } catch{
            this.state = {
                user: null
            }
        }
    }

     componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const decodedUser = jwt_decode(jwt);
            this.setState({
                user: decodedUser
            });
        } catch{
           
        }
        

    }
        render(){
        let user = this.state.user;
        console.log(user)
        return(
            <div>
            <TopBar user={user} />
            <div>
                <Switch>
                    <Route path='/' exact render={(props) => {
                        if(!user){
                            return <Redirect to='/register' />
                        } else {
                            return <Home {...props} />
                        }
                    }} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={LogOut} user={user}/>
                    {/* <Route path="/not-found" component={NotFound} /> */}
                    {/* <Redirect to="/not-found"/> */}
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
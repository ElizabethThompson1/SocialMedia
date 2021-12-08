import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/MyProfile/Profile";
import Register from "./Pages/Register/Register";
import {
    BrowserRouter as Route,
    Routes,
    
} from "react-router-dom";

 function App() {
    return(
        <Switch>
            <Routes>
                <Route exact path="/">;
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/profile/:username">
                    <Profile/>
                </Route>
            </Routes>
        </Switch>
    );
}

export default App;
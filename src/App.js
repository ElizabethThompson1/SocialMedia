import Home from "./Pages/Home/Home";
import {Switch, Route} from "react-router-dom";
import { Login } from "@mui/icons-material";

function App(){
    return (
        <div ClassName= "App">
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/MyProfile" component={MyProfile}/>
                <Route path="/Home" component={Home}/>
                
            </Switch>
        </div>
        );
        
}

export default App;
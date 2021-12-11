import Login from "../Login/Login";
import React, { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function Register(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [Name, setName] = useState("");

  
	async function handleSubmit(event) {
	  event.preventDefault();
      let registerPost = {
        name: Name,
		email: email,
		password: password
		};
	    let response = await axios.post("http://localhost:5000/api/users/register", registerPost);
		console.log(response.data)
		localStorage.setItem('token', response.data);
		window.location = '/login';
	}

    return(
   

        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">

                <form onSubmit={handleSubmit}>
                <div className="form-group" size="lg" controlId="name">
                    <label className="form-label">
                        Name
                    
                        <input
                        autoFocus
                        type="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group" size="lg" controlId="email">
                    <label>Email</label>
                    <input
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group" size="lg" controlId="password">
                    <label>Password</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    />
                <p>Create an account</p>
                <button type='submit' >Register</button>
                </div>
                </form>
                <Link to='/Login'>
                    <button className="btn btn-primary">Already a user? Login Here</button>
                </Link>
            </div>
	  </div>
	);
}

export default Register;
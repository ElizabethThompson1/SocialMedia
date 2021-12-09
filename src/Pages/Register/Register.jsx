import Login from "../Login/Login";
import React, { useState } from "react";
import axios from 'axios';

function register(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [Name, setName] = useState("");

  
	async function handleSubmit(event) {
	  event.preventDefault();
	  let response = await axios.post("http://localhost:5000/api/users/register",{
        name: Name,
		email: email,
		password: password
		});
		console.log(response.data)
		// localStorage.setItem('token', response.data);
		window.location = '/';
	}
    return(
        <div className="Register">
            <form onSubmit={handleSubmit}>
            <div className="form-group" size="lg" controlId="name">
                <label>Name</label>
                <input
                autoFocus
                type="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                />
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
                />
            <p>Create an account</p>
            <button type='submit' >Register</button>
            </div>
		</form>
	  </div>
	);
}

export default register;
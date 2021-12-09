import React, { useState } from "react";
import axios from 'axios';

 function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  
	async function handleSubmit(event) {
	  event.preventDefault();
	  let response = await axios.post("http://localhost:5000/api/users/login",{
		email: email,
		password: password
		});
		console.log(response.data)
		// Save token in local storage and refresh page
		localStorage.setItem('token',response.data.token);
		window.location = '/';
	}


  
	return (
	  <div className="Login">
		<form onSubmit={handleSubmit}>
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
		  </div>
		  <button type='submit'>Login</button>
		</form>
	  </div>
	);
}


export default Login;
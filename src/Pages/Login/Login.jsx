import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await axios.post("http://localhost:5000/api/users/login", {
      email: email,
      password: password,
    });
    console.log(response.data);
    // Save token in local storage and refresh page
    localStorage.setItem("token", response.data);
    window.location = "/";
  }

  return (
    <div className="container">
      <div class="row">
        <div class="col">Enter Your Information</div>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group" size="lg" controlId="email">
                  <label>Email</label>
                  <input
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="form-group" size="lg" controlId="password">
                    <label>Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="buttom">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

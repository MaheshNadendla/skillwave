import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold text-primary">
        {isLogin ? "Login" : "Register"}
      </h2>

    
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"} mx-2`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`btn ${!isLogin ? "btn-primary" : "btn-outline-primary"} mx-2`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

   
      {isLogin ? (
        <form className="col-md-6 mx-auto">
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            required
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>
      ) : (
        <form className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            required
          />
          <button className="btn btn-success w-100">Register</button>
        </form>
      )}
    </div>
  );
}

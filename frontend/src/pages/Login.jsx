import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const location = useLocation();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔑 Login successful!");
  };

  const isLoginPage = location.pathname === "/login";

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "380px", backgroundColor: "white" }}
      >
      
        <div className="d-flex mb-4 rounded-pill overflow-hidden border">
          <Link
            to="/login"
            className={`flex-fill text-center py-2 fw-bold text-decoration-none ${
              isLoginPage ? "bg-primary text-white" : "bg-light text-dark"
            }`}
          >
            Login
          </Link>

          <Link
            to="/register"
            className={`flex-fill text-center py-2 fw-bold text-decoration-none ${
              !isLoginPage ? "bg-success text-white" : "bg-light text-dark"
            }`}
          >
            Register
          </Link>
        </div>

     
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mb-4 fw-bold text-primary">Welcome</h3>

          <div className="mb-3">
            <label className="fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control text-center rounded-pill"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control text-center rounded-pill"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill fw-bold"
          >
            Login
          </button>
        </form>

 
        <div className="text-center mt-3">
          <small className="text-muted">
            Don’t have an account?{" "}
            <Link to="/register" className="text-decoration-none text-primary fw-semibold">
              Register here
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

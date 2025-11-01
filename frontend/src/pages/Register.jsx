import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Registration successful!");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "400px", backgroundColor: "#ffffff" }}
      >
     
        <h3 className="text-center mb-4 fw-bold text-success">
          Create Account 🚀
        </h3>

        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="form-control text-center rounded-pill"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control text-center rounded-pill"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="form-control text-center rounded-pill"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-bold"
          >
            Register
          </button>
        </form>

      
        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none text-success fw-semibold">
              Login here
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

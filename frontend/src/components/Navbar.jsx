import React from "react";

export default function Navbar() {
  return (
    <nav    className="shadow-md"
  style={{
    background: "linear-gradient(90deg, #8e2de2 0%, #4a00e0 100%)",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem"
  }}
>
  {/* Navbar content */}
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <h1 className="text-2xl font-bold ">Skillwave</h1>
        <div className="space-x-6">
          <a href="/" className="nav-link-custom   text-dark p-3 text-decoration-none fw-bold hover">
            Home
          </a>
          <a href="/courses" className=" text-dark text-decoration-none p-3  fw-bold">
            Courses
          </a>
          <a href="/login" className= " text-dark p-3 text-decoration-none fw-bold">
            Login
          </a>
          
        </div>
      </div>
    </nav>
  );
}

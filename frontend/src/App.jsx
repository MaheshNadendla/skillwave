import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/Searchbar";
import AuthPage from "./pages/AuthPage";
import CourseDetail from "./pages/CourseDetails";

import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import card1 from "./images/web dev.jpg";
import card2 from "./images/data sci.jpg";
import card3 from "./images/ui.jpg";
import card4 from "./images/react.jpg";
import card5 from "./images/Python.jpg";
import card6 from "./images/mern.webp";
import banner1 from "./images/banner3.webp";
import banner2 from "./images/bannerimg.jpg";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { title: "Web Development", image: card1 },
    { title: "Data Science", image: card2 },
    { title: "UI/UX Design", image: card3 },
  ];

  const courses = [
    { title: "React", instructor: "John Doe", image: card4 },
    { title: "Python", instructor: "Jane Smith", image: card5 },
    { title: "MERN STACK", instructor: "Alex Lee", image: card6 },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [feedbackList, setFeedbackList] = useState([
    {
      name: "Rahul",
      feedback: "The React course was amazing! I built my first project within a week.",
    },
    {
      name: "Priya",
      feedback: "Instructors are very supportive and explain concepts clearly.",
    },
    {
      name: "Amit Patel",
      feedback: "SkillWave boosted my confidence in coding and problem solving.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.feedback) return;

    setFeedbackList([
      ...feedbackList,
      { name: formData.name, feedback: formData.feedback },
    ]);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section
        className="text-center text-dark py-5 position-relative"
        style={{
          background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-4 mb-3">
            Welcome to <span className="text-primary">SkillWave</span>
          </h1>
          <p className="lead text-secondary mb-4">
            Learn top tech skills online with expert instructors & real projects.
          </p>
          <div className="d-flex justify-content-center mb-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
          <Link to="/courses" className="btn btn-primary btn-lg px-4 fw-bold shadow">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Carousel */}
      <div
        id="carouselExample"
        className="carousel slide container my-5 rounded-4 overflow-hidden shadow-lg"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {[banner1, banner2, card3].map((img, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
            >
              <img
                src={img}
                className="d-block w-100"
                alt={`slide-${i}`}
                style={{ height: "420px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Categories */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-5 text-dark">📚 Browse Categories</h2>
        <div className="row g-4">
          {categories.map((cat, i) => (
            <div className="col-md-4" key={i}>
              <div className="card border-0 shadow-lg rounded-4 h-100 hover-card">
                <img
                  src={cat.image}
                  className="card-img-top rounded-top-4"
                  alt={cat.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{cat.title}</h5>
                  <Link to="/courses" className="btn btn-outline-primary mt-2 fw-bold">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4 text-dark">💬 Student Feedback</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
          {feedbackList.map((item, i) => (
            <div
              key={i}
              className="card shadow border-0 rounded-4 p-4"
              style={{ width: "300px", background: "#f9f9f9" }}
            >
              <p className="fst-italic text-dark">"{item.feedback}"</p>
              <h6 className="fw-bold text-primary mt-3">– {item.name}</h6>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="mx-auto w-75 w-md-50 bg-white shadow-lg p-4 rounded-4">
          <h3 className="text-primary fw-bold mb-3 text-center">
            Share Your Experience
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="form-control mb-3"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form-control mb-3"
            />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Write your feedback..."
              required
              rows="4"
              className="form-control mb-3"
            ></textarea>
            <div className="text-center">
              <button type="submit" className="btn btn-primary fw-bold px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:title" element={<CourseDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

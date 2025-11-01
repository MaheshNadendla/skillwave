import React from "react";
import { useNavigate } from "react-router-dom";
import card4 from "../images/react.jpg";
import card5 from "../images/Python.jpg";
import card6 from "../images/mern.webp";
import card7 from "../images/java.webp";
import card8 from "../images/dev.webp";
import "./Courses.css"; // Create this CSS for extra styles

export default function Courses() {
  const navigate = useNavigate();

  const courses = [
    { title: "Web Development", Tutors: "Shankar", price: "₹40,000", image: card4 },
    { title: "Python Programming", Tutors: "Shankar", price: "₹50,000", image: card5 },
    { title: "MERN Fullstack", Tutors: "Shankar", price: "₹60,000", image: card6 },
    { title: "Java Programming", Tutors: "Shankar", price: "₹55,000", image: card7 },
    { title: "Data Science", Tutors: "Shankar", price: "₹65,000", image: card8 },
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center fw-bold text-primary mb-4">📚 All Courses</h2>
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card course-card h-100 shadow-lg border-0">
              <div className="card-img-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover", transition: "transform 0.3s" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="fw-bold">{course.title}</h5>
                <p className="text-secondary mb-1">Tutor: {course.Tutors}</p>
                <p className="fw-bold text-success">{course.price}</p>
                <button
                  className="btn btn-primary btn-hover mt-2"
                  onClick={() => navigate(`/courses/${course.title}`, { state: course })}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseDetail.css"; // Sidebar and styling

export default function CourseDetail() {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;

  if (!course) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">Course not found 🚫</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/courses")}
        >
          🔙 Back to Courses
        </button>
      </div>
    );
  }

  const commonPdf =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // All courses with detailed lessons
  const lessonsByCourse = {
    "Python Programming": [
      { title: "Course Introduction", type: "Video", url: "https://www.youtube.com/embed/rfscVS0vtbw", duration: "4 min", content: "Welcome to Python Programming and overview of the course." },
      { title: "A Quick Note for the Best Learning Experience", type: "Reading", duration: "2 min", content: "Tips to make the most of your learning experience." },
      { title: "Course Syllabus", type: "Reading", duration: "2 min", content: "Topics covered in this Python course." },
      { title: "Professional Certificate Career Support", type: "Reading", duration: "10 min", content: "Career guidance and support for Python learners." },
      { title: "Helpful Tips for Course Completion", type: "Reading", duration: "2 min", content: "Advice for successfully completing the course." },
      { title: "Lesson Overview: Python Basics", type: "Reading", duration: "10 min", content: "Detailed breakdown of Python fundamentals." },
      { title: "What is Python?", type: "Video", url: "https://www.youtube.com/embed/khKv-8q7YmY", duration: "2 min", content: "Introduction to Python programming language." },
      { title: "Python Fundamentals", type: "Video", url: "https://www.youtube.com/embed/8DvywoWv6fI", duration: "2 min", content: "Core principles and syntax of Python." },
      { title: "The Many Paths to Python Mastery", type: "Reading", duration: "4 min", content: "Explore career and learning paths in Python." },
      { title: "Python Handbook PDF", type: "PDF", pdfUrl: commonPdf, duration: "10 min", content: "Complete Python guide with examples and exercises." },
    ],

    "Web Development": [
      { title: "Course Introduction", type: "Video", url: "https://www.youtube.com/embed/pQN-pnXPaVg", duration: "4 min", content: "Overview of Web Development and course objectives." },
      { title: "A Quick Note for the Best Learning Experience", type: "Reading", duration: "2 min", content: "Tips to make the most of your learning experience." },
      { title: "Course Syllabus", type: "Reading", duration: "2 min", content: "Topics covered in this Web Development course." },
      { title: "Professional Certificate Career Support", type: "Reading", duration: "10 min", content: "Career guidance for Web Development learners." },
      { title: "Helpful Tips for Course Completion", type: "Reading", duration: "2 min", content: "Practical advice for successfully completing the course." },
      { title: "Lesson Overview: HTML & CSS", type: "Reading", duration: "10 min", content: "Core frontend technologies overview." },
      { title: "What is Web Development?", type: "Video", url: "https://www.youtube.com/embed/W6NZfCO5SIk", duration: "2 min", content: "Understanding the role of web development." },
      { title: "Frontend Fundamentals", type: "Video", url: "https://www.youtube.com/embed/yfoY53QXEnI", duration: "2 min", content: "HTML, CSS, JS basics." },
      { title: "The Many Paths to Web Development", type: "Reading", duration: "4 min", content: "Explore frontend, backend, and fullstack paths." },
      { title: "Web Development Handbook PDF", type: "PDF", pdfUrl: commonPdf, duration: "10 min", content: "Frontend guide covering HTML, CSS, JS in one file." },
    ],

    "Java Programming": [
      { title: "Course Introduction", type: "Video", url: "https://www.youtube.com/embed/GoXwIVyNvX0", duration: "4 min", content: "Java course overview and objectives." },
      { title: "A Quick Note for the Best Learning Experience", type: "Reading", duration: "2 min", content: "Tips to make the most of your learning experience." },
      { title: "Course Syllabus", type: "Reading", duration: "2 min", content: "Topics covered in this Java course." },
      { title: "Professional Certificate Career Support", type: "Reading", duration: "10 min", content: "Career guidance and support for Java learners." },
      { title: "Helpful Tips for Course Completion", type: "Reading", duration: "2 min", content: "Practical advice for completing the course successfully." },
      { title: "Lesson Overview: Java Basics", type: "Reading", duration: "10 min", content: "Introduction to Java syntax and OOP concepts." },
      { title: "What is Java?", type: "Video", url: "https://www.youtube.com/embed/8cm1x4bC610", duration: "2 min", content: "Introduction to Java programming language." },
      { title: "Java Fundamentals", type: "Video", url: "https://www.youtube.com/embed/t4T3uR3cK3c", duration: "2 min", content: "Core Java principles and OOP practices." },
      { title: "The Many Paths to Java Mastery", type: "Reading", duration: "4 min", content: "Explore career and learning paths in Java." },
      { title: "Java Handbook PDF", type: "PDF", pdfUrl: commonPdf, duration: "10 min", content: "Complete Java reference for practice and interviews." },
    ],

    "Data Science": [
      { title: "Course Introduction", type: "Video", url: "https://www.youtube.com/embed/ua-CiDNNj30", duration: "4 min", content: "Introduction to the Data Science course and objectives." },
      { title: "A Quick Note for the Best Learning Experience", type: "Reading", duration: "2 min", content: "Tips to make the most of your learning experience." },
      { title: "Course Syllabus", type: "Reading", duration: "2 min", content: "Overview of topics covered throughout this course." },
      { title: "Professional Certificate Career Support", type: "Reading", duration: "10 min", content: "Career guidance and support for professional certificates." },
      { title: "Helpful Tips for Course Completion", type: "Reading", duration: "2 min", content: "Practical advice for successfully completing the course." },
      { title: "Lesson Overview: Defining Data Science", type: "Reading", duration: "10 min", content: "Detailed breakdown of data science fundamentals." },
      { title: "What is Data Science?", type: "Video", url: "https://www.youtube.com/embed/xC-c7E5PK0Y", duration: "2 min", content: "Understanding what Data Science really means." },
      { title: "Fundamentals of Data Science", type: "Video", url: "https://www.youtube.com/embed/-ETQ97mXXF0", duration: "2 min", content: "Core principles that drive Data Science projects." },
      { title: "The Many Paths to Data Science", type: "Reading", duration: "4 min", content: "Explore different career paths within the Data Science field." },
      { title: "Data Science Handbook PDF", type: "PDF", pdfUrl: commonPdf, duration: "10 min", content: "Basics of ML, Python, and statistics in one file." },
    ],

    "MERN Fullstack": [
      { title: "Course Introduction", type: "Video", url: "https://www.youtube.com/embed/7CqJlxBYj-M", duration: "4 min", content: "Overview of MERN Fullstack course objectives." },
      { title: "A Quick Note for the Best Learning Experience", type: "Reading", duration: "2 min", content: "Tips for learning MERN stack effectively." },
      { title: "Course Syllabus", type: "Reading", duration: "2 min", content: "Topics covered in this MERN course." },
      { title: "Professional Certificate Career Support", type: "Reading", duration: "10 min", content: "Career guidance for MERN stack learners." },
      { title: "Helpful Tips for Course Completion", type: "Reading", duration: "2 min", content: "Practical advice to complete the course." },
      { title: "Lesson Overview: MERN Fundamentals", type: "Reading", duration: "10 min", content: "MongoDB, Express, React, Node overview." },
      { title: "What is MERN Stack?", type: "Video", url: "https://www.youtube.com/embed/L72fhGm1tfE", duration: "2 min", content: "Understanding the MERN stack workflow." },
      { title: "Building Your First MERN App", type: "Video", url: "https://www.youtube.com/embed/Ke90Tje7VS0", duration: "2 min", content: "Step-by-step MERN application development." },
      { title: "The Many Paths to MERN Mastery", type: "Reading", duration: "4 min", content: "Explore backend, frontend, and fullstack paths." },
      { title: "MERN Fullstack Handbook PDF", type: "PDF", pdfUrl: commonPdf, duration: "10 min", content: "Complete MERN stack reference guide." },
    ],
  };

  const lessons = lessonsByCourse[course.title] || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLesson = lessons[activeIndex];

  const handleNext = () => {
    if (activeIndex < lessons.length - 1) setActiveIndex(activeIndex + 1);
    else alert("🎉 You’ve completed all lessons!");
  };
  const handlePrevious = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="container-fluid bg-light" style={{ minHeight: "100vh" }}>
      <div className="row">
        {/* Sidebar */}
        <div
          className="col-md-3 col-lg-2 bg-white border-end p-3 sidebar"
          style={{ height: "100vh", overflowY: "auto" }}
        >
          <h6 className="fw-bold text-primary mb-3">{course.title}</h6>
          <div className="list-group">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className={`lesson-item p-2 mb-1 rounded-3 ${
                  index === activeIndex ? "active-lesson" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="fw-semibold"
                  style={{ color: index === activeIndex ? "#0d6efd" : "#212529" }}
                >
                  {lesson.title}
                </div>
                <small className="text-muted">
                  {lesson.type} • {lesson.duration}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <div className="card shadow border-0">
            <div className="ratio ratio-16x9">
              {activeLesson?.type === "Video" && (
                <iframe
                  src={activeLesson.url}
                  title={activeLesson.title}
                  allowFullScreen
                  className="rounded"
                ></iframe>
              )}

              {activeLesson?.type === "Reading" && (
                <div className="d-flex align-items-center justify-content-center bg-light rounded">
                  <h5 className="text-muted">📖 Reading Lesson</h5>
                </div>
              )}

              {activeLesson?.type === "PDF" && (
                <iframe
                  src={activeLesson.pdfUrl}
                  title={activeLesson.title}
                  className="rounded"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              )}
            </div>

            <div className="card-body">
              <h4 className="fw-bold mt-3">{activeLesson?.title}</h4>
              <p className="text-muted">{activeLesson?.content}</p>

              {activeLesson?.type === "PDF" && (
                <a
                  href={activeLesson.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success mt-2"
                >
                  📥 Download PDF
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="btn btn-outline-secondary fw-bold"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
            >
              ← Previous
            </button>

            <button
              className="btn btn-outline-primary fw-bold"
              onClick={handleNext}
            >
              {activeIndex < lessons.length - 1
                ? "Next Lesson →"
                : "Finish Course 🎓"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

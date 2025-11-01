import React from "react";

export default function CourseCard({ title, instructor, image }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">👨‍🏫 {instructor}</p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

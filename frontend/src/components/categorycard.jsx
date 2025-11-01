import React from "react";

export default function CategoryCard({ title, image }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

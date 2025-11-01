import React from "react";

export default function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center"
    >
      <div className="input-group  shadow-sm">
        <span className="input-group-text bg-primary text-white fw-bold">
          🔍
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search courses..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-warning fw-bold text-dark px-4"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// src/components/PatientFilter.js
import React from "react";

const PatientFilter = ({ filterValue, onFilterChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-center">Filter Patients</h2>
      <input
        type="text"
        placeholder="Search by Name, Phone, Illness, Treatment or Price"
        value={filterValue}
        onChange={(e) => onFilterChange(e.target.value)}
        className="border mb-2 p-2 w-full"
      />
    </div>
  );
};

export default PatientFilter;

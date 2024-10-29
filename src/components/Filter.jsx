// src/components/Filter.js
import React from "react";

const Filter = ({ value, setValue, locationFilter, setLocationFilter }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by Name, Phone, Illness, Treatment, or Price"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300 mb-2"
      />
      <select
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
        className="border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="">All Locations</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Godagari">Godagari</option>
      </select>
    </div>
  );
};

export default Filter;

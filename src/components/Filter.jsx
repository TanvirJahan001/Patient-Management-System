// src/components/Filter.js
import React from "react";

const Filter = ({ value, setValue }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter Patients"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

export default Filter;

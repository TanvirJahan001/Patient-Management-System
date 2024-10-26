// src/components/TotalEarnings.js
import React from "react";

const TotalEarnings = ({ patients }) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const totalEarnings = patients.reduce((total, patient) => {
    const patientDate = new Date(patient.date);
    if (
      patientDate.getMonth() === currentMonth &&
      patientDate.getFullYear() === currentYear
    ) {
      return total + (patient.price || 0); // Ensure price is being used
    }
    return total;
  }, 0);

  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 p-4 rounded-md shadow-md mt-4">
      <h2 className="text-xl font-bold text-center">
        Total Earnings This Month
      </h2>
      <p className="text-2xl text-blue-600 text-center">{`৳${totalEarnings.toFixed(
        2
      )}`}</p>
    </div>
  );
};

export default TotalEarnings;

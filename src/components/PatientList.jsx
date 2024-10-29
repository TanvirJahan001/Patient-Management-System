// src/components/PatientList.js
import React from "react";

const PatientList = ({
  patients,
  filterValue,
  locationFilter,
  deletePatient,
}) => {
  const filteredPatients = patients.filter((patient) => {
    const lowerFilter = filterValue.toLowerCase();
    const matchesLocation =
      !locationFilter || patient.location === locationFilter;
    const matchesTextFilter =
      patient.name.toLowerCase().includes(lowerFilter) ||
      patient.phoneNumber.includes(lowerFilter) ||
      patient.illness.toLowerCase().includes(lowerFilter) ||
      patient.treatment.toLowerCase().includes(lowerFilter) ||
      patient.price.toString().includes(lowerFilter);
    return matchesLocation && matchesTextFilter;
  });

  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Patient List
      </h2>

      <div className="overflow-x-auto scroll-container">
        <table className="min-w-full table-auto text-gray-800">
          <thead>
            <tr className="border-b text-left bg-blue-400 text-white">
              <th className="py-3 px-4 text-sm font-medium">#</th>
              <th className="py-3 px-4 text-sm font-medium">Name</th>
              <th className="py-3 px-4 text-sm font-medium">Phone</th>
              <th className="py-3 px-4 text-sm font-medium">Diagnosis</th>
              <th className="py-3 px-4 text-sm font-medium">Treatment</th>
              <th className="py-3 px-4 text-sm font-medium">Amount</th>
              <th className="py-3 px-4 text-sm font-medium">Date</th>
              <th className="py-3 px-4 text-sm font-medium">Location</th>
              <th className="py-3 px-4 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={patient.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{patient.name}</td>
                  <td className="py-3 px-4">{patient.phoneNumber}</td>
                  <td className="py-3 px-4">{patient.illness}</td>
                  <td className="py-3 px-4">{patient.treatment}</td>
                  <td className="py-3 px-4">৳{patient.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    {new Date(patient.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">{patient.location}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => deletePatient(patient.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="py-3 text-center">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;

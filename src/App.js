// src/App.js
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import TotalEarnings from "./components/TotalEarnings";

export default function App() {
  const [patients, setPatients] = useState(() => {
    const savedPatients = localStorage.getItem("patients");
    return savedPatients ? JSON.parse(savedPatients) : [];
  });

  const [filterValue, setFilterValue] = useState("");
  const [locationFilter, setLocationFilter] = useState(""); // New location filter state

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleAddPatient = (newPatient) => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
  };

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">
        Patient Management System
      </h1>
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <PatientForm onAddPatient={handleAddPatient} />
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <Filter
          value={filterValue}
          setValue={setFilterValue}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
        />
        <PatientList
          patients={patients}
          filterValue={filterValue}
          locationFilter={locationFilter}
          deletePatient={(id) =>
            setPatients(patients.filter((patient) => patient.id !== id))
          }
        />
      </div>
      <TotalEarnings patients={patients} />
    </div>
  );
}

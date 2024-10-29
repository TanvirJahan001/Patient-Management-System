// src/components/PatientForm.js
import React, { useState } from "react";

const PatientForm = ({ onAddPatient }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [illness, setIllness] = useState("");
  const [treatment, setTreatment] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Rajshahi"); // Location dropdown state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !phoneNumber ||
      !illness ||
      !treatment ||
      !price ||
      !date ||
      !location
    ) {
      alert("All fields are required!");
      return;
    }

    const newPatient = {
      id: Date.now(),
      name,
      phoneNumber,
      illness,
      treatment,
      price: parseFloat(price),
      date,
      location, // Include location in patient object
    };

    onAddPatient(newPatient);

    // Reset form fields
    setName("");
    setPhoneNumber("");
    setIllness("");
    setTreatment("");
    setPrice("");
    setDate("");
    setLocation("Rajshahi");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-green-200 to-blue-300 p-6 rounded-xl shadow-lg mb-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Add Patient
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous input fields */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 w-full border rounded-lg"
            placeholder="Enter patient's name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="p-3 w-full border rounded-lg"
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Illness
          </label>
          <input
            type="text"
            value={illness}
            onChange={(e) => setIllness(e.target.value)}
            required
            className="p-3 w-full border rounded-lg"
            placeholder="Enter illness/diagnosis"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Treatment
          </label>
          <input
            type="text"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            required
            className="p-3 w-full border rounded-lg"
            placeholder="Enter treatment"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Amount (৳)
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="p-3 w-full border rounded-lg"
            placeholder="Enter Amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="p-3 w-full border rounded-lg"
          />
        </div>
        {/* New location dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 w-full border rounded-lg"
          >
            <option value="Rajshahi">Rajshahi</option>
            <option value="Godagari">Godagari</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add Patient
      </button>
    </form>
  );
};

export default PatientForm;

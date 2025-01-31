"use client";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    grossMonthlySalary: "",
    annualPayments: "12",
    annualVacationDays: "",
    vacationDaysTaken: "",
    terminationReason: "",
    pendingBonus: "",
    pendingOvertimeHours: "",
    overtimeHourRate: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        Calcular IRPF
      </h2>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A8E6A] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="startDate"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#2D6A4F] peer-focus:text-[#4A8E6A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Fecha de inicio
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="endDate"
          id="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A8E6A] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="endDate"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#2D6A4F] peer-focus:text-[#4A8E6A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Fecha de finalización
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="number"
          name="grossMonthlySalary"
          id="grossMonthlySalary"
          value={formData.grossMonthlySalary}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A8E6A] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="grossMonthlySalary"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#2D6A4F] peer-focus:text-[#4A8E6A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Salario mensual bruto
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <select
          name="annualPayments"
          value={formData.annualPayments}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A8E6A] peer"
        >
          <option value="12">12</option>
          <option value="14">14</option>
        </select>
        <label
          htmlFor="annualPayments"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#2D6A4F] peer-focus:text-[#4A8E6A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Número de pagas
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="annualVacationDays"
            id="annualVacationDays"
            value={formData.annualVacationDays}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A8E6A] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="annualVacationDays"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#2D6A4F] peer-focus:text-[#4A8E6A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Vacaciones disponibles
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="vacationDaysTaken"
            id="vacationDaysTaken"
            value={formData.vacationDaysTaken}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4A8E6A] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="vacationDaysTaken"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#2D6A4F] peer-focus:text-[#4A8E6A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Días ya disfrutados
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-[var(--corporate-color)] hover:bg-[#4A8E6A] focus:ring-4 focus:outline-none focus:ring-[#2D6A4F] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;

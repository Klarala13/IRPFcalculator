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
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </label>

      <label>
        End Date:
        <input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Gross Monthly Salary:
        <input
          type="number"
          name="grossMonthlySalary"
          value={formData.grossMonthlySalary}
          onChange={handleChange}
        />
      </label>

      <label>
        Annual Payments:
        <select
          name="annualPayments"
          value={formData.annualPayments}
          onChange={handleChange}
        >
          <option value="12">12</option>
          <option value="14">14</option>
        </select>
      </label>

      <label>
        Annual Vacation Days:
        <input
          type="number"
          name="annualVacationDays"
          value={formData.annualVacationDays}
          onChange={handleChange}
        />
      </label>

      <label>
        Vacation Days Taken:
        <input
          type="number"
          name="vacationDaysTaken"
          value={formData.vacationDaysTaken}
          onChange={handleChange}
        />
      </label>

      <label>
        Termination Reason:
        <select
          name="terminationReason"
          value={formData.terminationReason}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="unfairDismissal">Unfair Dismissal</option>
          <option value="objectiveDismissal">Objective Dismissal</option>
          <option value="voluntaryResignation">Voluntary Resignation</option>
          <option value="contractEnd">Contract End</option>
        </select>
      </label>

      <label>
        Pending Bonus (Optional):
        <input
          type="number"
          name="pendingBonus"
          value={formData.pendingBonus}
          onChange={handleChange}
        />
      </label>

      <label>
        Pending Overtime Hours (Optional):
        <input
          type="number"
          name="pendingOvertimeHours"
          value={formData.pendingOvertimeHours}
          onChange={handleChange}
        />
      </label>

      <label>
        Overtime Hour Rate (Optional):
        <input
          type="number"
          name="overtimeHourRate"
          value={formData.overtimeHourRate}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;

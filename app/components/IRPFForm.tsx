"use client";

import React, { useState } from "react";

type Region = keyof typeof TaxRatesByRegion;
import { TaxRatesByRegion } from "../helpers/taxRatesByRegion";

const IRPFForm = () => {
  const [formData, setFormData] = useState({
    grossAnnualSalary: "",
    age: "",
    region: "Madrid",
    mobility: false,
    children: "0",
    disability: false,
  });
  const [output, setOutput] = useState({
    netSalary: "",
    irpfRate: "",
    totalTax: "",
    socialSecurityQuota: "",
  });
  const regions = Object.keys(TaxRatesByRegion);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const calculateIRPF = () => {
    const { grossAnnualSalary, region, mobility, children, disability, age } =
      formData;
    const salary = parseFloat(grossAnnualSalary) || 0;
    const numChildren = parseInt(children) || 0;

    // 1. Cuota a la Seguridad Social (6.35%)
    const socialSecurityQuota = salary * 0.0635;
    let taxableIncome = salary - socialSecurityQuota;

    // 2. Reducciones adicionales
    if (mobility) taxableIncome -= 2000;
    if (disability) taxableIncome -= 3000;
    if (numChildren > 0) taxableIncome -= numChildren * 2400;

    // 3. Obtener tramos fiscales de la Comunidad Autónoma
    const taxBrackets =
      TaxRatesByRegion[region as Region] || TaxRatesByRegion["Madrid"];

    let totalTax = 0;
    let remainingIncome = taxableIncome;
    let previousLimit = 0;

    // 4. Calcular impuestos por tramos, considerando la edad
    const isUnder30 = parseInt(age) < 30;
    for (const bracket of taxBrackets) {
      if (remainingIncome > 0) {
        // Ajuste si el usuario es menor de 30 años (reducción de tipo impositivo)
        let rate = bracket.rate;
        if (isUnder30) {
          rate = rate - 0.01; // Aplicamos una reducción del 1% si es menor de 30 años
        }

        const taxableAmount = Math.min(
          bracket.limit - previousLimit,
          remainingIncome
        );
        totalTax += taxableAmount * rate; // Aplica la tasa del tramo correspondiente
        remainingIncome -= taxableAmount;
        previousLimit = bracket.limit;
      } else {
        break;
      }
    }

    // 5. Calcular el tipo medio de retención sobre el sueldo bruto
    const irpfRate = (totalTax / salary) * 100;

    // 6. Calcular el sueldo neto después de impuestos y Seguridad Social
    const netSalary = salary - socialSecurityQuota - totalTax;

    // Actualizamos el estado con el resultado
    setOutput({
      netSalary: netSalary.toFixed(2),
      irpfRate: irpfRate.toFixed(2),
      totalTax: totalTax.toFixed(2),
      socialSecurityQuota: socialSecurityQuota.toFixed(2),
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    calculateIRPF();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        Calcular IRPF
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sueldo Bruto Anual
          </label>
          <input
            type="number"
            name="grossAnnualSalary"
            value={formData.grossAnnualSalary}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Edad
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Comunidad Autónoma
        </label>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hijos
          </label>
          <input
            type="number"
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="mobility"
            checked={formData.mobility}
            onChange={handleChange}
            className="h-5 w-5 text-green-600"
          />
          <label className="text-sm font-medium text-gray-700">
            Movilidad geográfica
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="disability"
            checked={formData.disability}
            onChange={handleChange}
            className="h-5 w-5 text-green-600"
          />
          <label className="text-sm font-medium text-gray-700">
            Discapacidad
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        Calcular
      </button>

      {output.netSalary && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
          <p className="text-lg font-semibold">
            Sueldo Neto Anual:{" "}
            <span className="text-green-600">{output.netSalary} €</span>
          </p>
          <p className="text-lg font-semibold">
            Tipo de retención IRPF:{" "}
            <span className="text-green-600">{output.irpfRate}%</span>
          </p>
          <p className="text-lg font-semibold">
            Cuota IRPF:{" "}
            <span className="text-green-600">{output.totalTax} €</span>
          </p>
          <p className="text-lg font-semibold">
            Cuota Seguridad Social:{" "}
            <span className="text-green-600">
              {output.socialSecurityQuota} €
            </span>
          </p>
        </div>
      )}
    </form>
  );
};

export default IRPFForm;

"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [body, setBody] = useState({ m: "", cm: "", kg: "" });
  const [message, setMessage] = useState(
    "Submit your height and weight to calculate your BMI.",
  );
  const [color, setColor] = useState("bg-lime-100");

  function handleCalculate() {
    const height = parseFloat(body.m || 0) + parseFloat(body.cm || 0) / 100;
    const weight = parseFloat(body.kg);
    const bmi = weight / (height * height);

    if (isNaN(bmi)) {
      setMessage("Please enter a valid height and weight.");
      setColor("bg-lime-100");
      return;
    }

    if (bmi <= 18.5) {
      setMessage(`Your BMI is ${bmi.toFixed(2)}. You are underweight.`);
      setColor("bg-red-200");
    } else if (bmi > 18.5 && bmi <= 24.99) {
      setMessage(`Your BMI is ${bmi.toFixed(2)}. You are normal.`);
      setColor("bg-green-200");
    } else if (bmi >= 25 && bmi <= 29.99) {
      setMessage(`Your BMI is ${bmi.toFixed(2)}. You are overweight.`);
      setColor("bg-yellow-200");
    } else if (bmi >= 30 && bmi <= 34.99) {
      setMessage(`Your BMI is ${bmi.toFixed(2)}. You are obese (class 1).`);
      setColor("bg-orange-200");
    } else if (bmi >= 35 && bmi <= 39.99) {
      setMessage(`Your BMI is ${bmi.toFixed(2)}. You are obese (class 2).`);
      setColor("bg-orange-300");
    } else {
      setMessage(`Your BMI is ${bmi.toFixed(2)}. You are morbidly obese.`);
      setColor("bg-red-300");
    }

    setBody({ m: "", cm: "", kg: "" });
  }

  return (
    <div className="project-area">
      <div className="p-1 md:w-1/2">
        <p>
          Body mass index (BMI) is a measurement based on height and weight that
          can indicate whether you are overweight, obese, underweight or have a
          normal weight. Belize uses the metric system!
        </p>
        <p className="m-0">
          Calculations and ranges obtained{" "}
          <a
            href="https://www.bmi-calculator.net/metric-bmi-calculator.php"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <div className="bg-lime-100 p-3">
            <div className="mb-3">
              <span className="font-bold">Height</span>
              <input
                type="number"
                name="height"
                value={body.m}
                onChange={(e) => {
                  setBody({ ...body, m: e.target.value });
                }}
                className="mx-2 w-1/4 border-2 border-lime-600 px-3 py-1"
              />
              <span>m</span>
              <input
                type="number"
                name="height2"
                value={body.cm}
                onChange={(e) => {
                  setBody({ ...body, cm: e.target.value });
                }}
                className="ml-3 mr-2 w-1/4 border-2 border-lime-600 px-3 py-1"
              />
              <span>cm</span>
            </div>
            <div className="mb-3">
              <span className="font-bold">Weight</span>
              <input
                type="number"
                name="weight"
                value={body.kg}
                onChange={(e) => {
                  setBody({ ...body, kg: e.target.value });
                }}
                className="mx-2 w-1/4 border-2 border-lime-600 px-3 py-1"
              />
              <span>kg</span>
            </div>
            <div>
              <button
                type="button"
                onClick={handleCalculate}
                className="block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
              >
                Calculate
              </button>
            </div>
          </div>
          <div className={`p-3 ${color}`}>
            <span>{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

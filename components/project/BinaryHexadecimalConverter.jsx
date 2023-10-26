"use client";

import { useState } from "react";

export default function BinaryHexadecimalConverter() {
  const [binary, setBinary] = useState("");
  const [binaryResult, setBinaryResult] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");
  const [hexadecimalResult, setHexadecimalResult] = useState("");

  function handleBinary() {
    if (!/^[0-1]+$/.test(binary)) {
      setBinaryResult("Please enter a valid binary number.");
      return;
    }

    const result = parseInt(binary, 2).toString(16).toUpperCase();
    setBinaryResult(`${result}`);
  }

  function handleHexadecimal() {
    if (!/^[0-9A-F]+$/.test(hexadecimal)) {
      setHexadecimalResult("Please enter a valid hexadecimal number.");
      return;
    }

    const result = parseInt(hexadecimal, 16).toString(2);
    setHexadecimalResult(`${result}`);
  }

  return (
    <div className="project-area">
      <div className="p-3 md:w-1/2">
        <p>
          Binary is the notation using base 2 that computers understand and
          consists of 1 and 0s as the only digits. This is in contrast to the
          decimal system that we use in our daily lives, which consists of 10
          digits (0-9).
        </p>
        <p className="m-0">
          As binary strings can get very long, hexadecimal is a 16 digit system
          that is used to represent binary strings in a shorter form.
          Hexadecimal uses the digits 0-9 and the letters A-F to represent the
          numbers 10-15.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:w-6/12">
        <div className="bg-lime-100 p-3">
          <p className="text-center">Binary to Hexadecimal</p>
          <input
            type="text"
            name="binary"
            value={binary}
            onChange={(e) => {
              setBinary(e.target.value);
            }}
            className="mb-3 w-full border-2 border-lime-600 px-3 py-1"
            placeholder="Enter binary number"
          />
          <div className="mb-3">
            <button
              type="button"
              onClick={handleBinary}
              className="block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              Calculate
            </button>
          </div>
          <div className="bg-lime-200 p-3 text-sm">Result: {binaryResult}</div>
        </div>
        <div className="bg-emerald-100 p-3">
          <p className="text-center">Hexadecimal to Binary</p>
          <input
            type="text"
            name="hexadecimal"
            value={hexadecimal}
            onChange={(e) => {
              setHexadecimal(e.target.value);
            }}
            className="mb-3 w-full border-2 border-emerald-600 px-3 py-1"
            placeholder="Enter hexadecimal number"
          />
          <div className="mb-3">
            <button
              type="button"
              onClick={handleHexadecimal}
              className="block w-full rounded-md bg-emerald-300 px-4 py-2 font-bold text-emerald-800 hover:bg-emerald-400"
            >
              Calculate
            </button>
          </div>
          <div className="bg-emerald-200 p-3 text-sm">
            Result: {hexadecimalResult}
          </div>
        </div>
      </div>
    </div>
  );
}

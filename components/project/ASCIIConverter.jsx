"use client";

import Image from "next/image";
import { useState } from "react";

export default function ASCIIConverter() {
  const [ascii, setAscii] = useState("");
  const [asciiResult, setAsciiResult] = useState("");

  function handleAscii() {
    if (!/^[0-9]+$/.test(ascii)) {
      setAsciiResult("Please enter a valid ASCII number.");
      return;
    }

    const result = String.fromCharCode(ascii);
    setAsciiResult(`${result}`);
  }

  return (
    <div className="project-area">
      <div className="p-3 md:w-1/2">
        <Image
          src="/project/ascii-table.svg"
          width={700}
          height={700}
          alt="ASCII Table"
          className="border-2 border-lime-600"
        />
      </div>
      <div className="flex w-6/12 flex-col gap-3">
        <div className="bg-lime-100 p-3">
          <p className="text-center">Enter a value from 0 to 127</p>
          <input
            type="text"
            name="ascii"
            value={ascii}
            onChange={(e) => {
              setAscii(e.target.value);
            }}
            className="mb-3 w-full border-2 border-lime-600 px-3 py-1"
            placeholder="Enter a value"
          />
          <div className="mb-3">
            <button
              type="button"
              onClick={handleAscii}
              className="block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              Submit
            </button>
          </div>
          <div className="bg-lime-200 p-3 text-sm">Result: {asciiResult}</div>
        </div>
      </div>
    </div>
  );
}

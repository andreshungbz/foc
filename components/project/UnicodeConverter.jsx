"use client";

import Image from "next/image";
import { useState } from "react";

export default function UnicodeConverter() {
  const [unicode, setUnicode] = useState("");
  const [unicodeResult, setUnicodeResult] = useState("");

  function handleUnicode() {
    const codePoint = parseInt(unicode, 16);
    if (isNaN(codePoint) || codePoint < 0 || codePoint > 0x10ffff) {
      setUnicodeResult("Please enter a valid Unicode number.");
      return;
    }

    const result = String.fromCodePoint(codePoint);
    setUnicodeResult(`${result}`);
  }

  return (
    <div className="project-area">
      <div className="p-3 md:w-1/2">
        <h2 className="text-center text-4xl font-bold uppercase">
          Unicode Table
        </h2>
        <Image
          src="/project/unicode-table.jpeg"
          width={700}
          height={700}
          alt="Unicode Table"
          className="border-2 border-lime-600"
        />
        <p className="m-0 mt-1 text-center text-sm text-neutral-600">
          Image source by Jeremy Burge from{" "}
          <a
            href="https://blog.emojipedia.org/whats-new-in-unicode-12-0/"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="flex w-6/12 flex-col gap-3">
        <div className="bg-lime-100 p-3">
          <p className="text-center">Enter Unicode Number</p>
          <input
            type="text"
            name="unicode"
            value={unicode}
            onChange={(e) => {
              setUnicode(e.target.value);
            }}
            className="mb-3 w-full border-2 border-lime-600 px-3 py-1"
            placeholder="Enter a value"
          />
          <div className="mb-3">
            <button
              type="button"
              onClick={handleUnicode}
              className="block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              Submit
            </button>
          </div>
          <div className="bg-lime-200 p-3 text-sm">Result: {unicodeResult}</div>
        </div>
      </div>
    </div>
  );
}

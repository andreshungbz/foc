"use client";

import Image from "next/image";
import { useState } from "react";

export default function XORGate() {
  const [gates, setGates] = useState([0, 0]);

  return (
    <div className="project-area">
      <div className="p-3 md:w-1/2">
        <Image
          src={
            gates[0] === 0 && gates[1] === 0
              ? "/project/logic-states/xor-0-0.png"
              : gates[0] === 0 && gates[1] === 1
              ? "/project/logic-states/xor-0-1.png"
              : gates[0] === 1 && gates[1] === 0
              ? "/project/logic-states/xor-1-0.png"
              : "/project/logic-states/xor-1-1.png"
          }
          width={852}
          height={446}
          alt="NOT Gate"
          className="border-2 border-lime-600"
        />
      </div>
      <div className="flex w-6/12 flex-col content-center gap-3">
        <div className="bg-lime-100 p-3">
          <h2 className="mb-2 text-center text-2xl font-bold uppercase">
            XOR Gate
          </h2>
          <div className="mb-3">
            <button
              type="button"
              onClick={() => setGates([0, 0])}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              0 0
            </button>
            <button
              type="button"
              onClick={() => setGates([0, 1])}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              0 1
            </button>
            <button
              type="button"
              onClick={() => setGates([1, 0])}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              1 0
            </button>
            <button
              type="button"
              onClick={() => setGates([1, 1])}
              className="block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              1 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

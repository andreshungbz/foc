"use client";

import Image from "next/image";
import { useState } from "react";

export default function NOTGate() {
  const [gates, setGates] = useState(0);

  return (
    <div className="project-area">
      <div className="p-3 md:w-1/2">
        <Image
          src={
            gates === 0
              ? "/project/logic-states/not-0.png"
              : "/project/logic-states/not-1.png"
          }
          width={852}
          height={230}
          alt="NOT Gate"
          className="border-2 border-lime-600"
        />
      </div>
      <div className="flex w-6/12 flex-col gap-3">
        <div className="bg-lime-100 p-3">
          <h2 className="mb-2 text-center text-2xl font-bold uppercase">
            NOT Gate
          </h2>
          <div className="mb-3">
            <button
              type="button"
              onClick={() => setGates(0)}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              0
            </button>
            <button
              type="button"
              onClick={() => setGates(1)}
              className="block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

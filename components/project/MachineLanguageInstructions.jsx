"use client";

import Image from "next/image";
import { useState } from "react";

export default function MachineLanguageInstructions() {
  const [step, setStep] = useState(0);

  return (
    <div className="mt-3 flex flex-col items-center gap-3 border-2 border-lime-600 bg-lime-50 p-3 md:flex-row md:justify-evenly">
      <div className="flex flex-col content-center gap-3 md:w-6/12">
        <div className="bg-lime-100 p-3">
          <h2 className="mb-2 text-center text-2xl font-bold uppercase">
            Machine Language Instructions
          </h2>
          <div className="mb-3">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              <Image
                src="/project/vole/step-1.png"
                width={400}
                height={182}
                alt="Step 1"
                className="inline-block border-2 border-lime-600"
              />
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              <Image
                src="/project/vole/step-2.png"
                width={400}
                height={182}
                alt="Step 2"
                className="inline-block border-2 border-lime-600"
              />
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              <Image
                src="/project/vole/step-3.png"
                width={400}
                height={182}
                alt="Step 3"
                className="inline-block border-2 border-lime-600"
              />
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              <Image
                src="/project/vole/step-4.png"
                width={400}
                height={182}
                alt="Step 4"
                className="inline-block border-2 border-lime-600"
              />
            </button>
            <button
              type="button"
              onClick={() => setStep(5)}
              className="mb-2 block w-full rounded-md bg-lime-300 px-4 py-2 font-bold text-lime-800 hover:bg-lime-400"
            >
              <Image
                src="/project/vole/step-5.png"
                width={400}
                height={182}
                alt="Step 5"
                className="inline-block border-2 border-lime-600"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="p-3 lg:w-1/2">
        <Image
          src={
            step === 0
              ? "/project/vole/vole-machine.png"
              : step === 1
              ? "/project/vole/vole-machine-1.png"
              : step === 2
              ? "/project/vole/vole-machine-2.png"
              : step === 3
              ? "/project/vole/vole-machine-3.png"
              : step === 4
              ? "/project/vole/vole-machine-4.png"
              : "/project/vole/vole-machine-5.png"
          }
          width={1320}
          height={1002}
          alt="Vole Machine Appendix"
          className="border-2 border-lime-600"
        />
      </div>
    </div>
  );
}

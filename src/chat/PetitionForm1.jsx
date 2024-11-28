import React, { useState } from "react";
import PetitionStep1 from "../forms/PetitionStep1";
import PetitionStep2 from "../forms/PetitionStep2";
import PetitionStep3 from "../forms/PetitionStep3";

export default function PetitionForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen lg:py-[120px] flex flex-col items-center justify-center bg-yellow-50 p-4">
      <div className="w-full max-w-[500px] bg-white rounded-lg shadow-lg p-7">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-2">
            Start Your Petition!
          </h2>
          <div className="flex justify-between mb-4">
            <div
              className={`flex-1 h-1.5 rounded-full ${
                step >= 1 ? "bg-chat-green" : "bg-gray-300"
              }`}
            ></div>
            <div className="w-2"></div>
            <div
              className={`flex-1 h-1.5 rounded-full ${
                step >= 2 ? "bg-chat-green" : "bg-gray-300"
              }`}
            ></div>
            <div className="w-2"></div>
            <div
              className={`flex-1 h-1.5 rounded-full ${
                step >= 3 ? "bg-chat-green" : "bg-gray-300"
              }`}
            ></div>
          </div>
        </div>

        {step === 1 && <PetitionStep1 nextStep={nextStep} />}
        {step === 2 && (
          <PetitionStep2 prevStep={prevStep} nextStep={nextStep} />
        )}
        {step === 3 && (
          <PetitionStep3 prevStep={prevStep} nextStep={nextStep} />
        )}
      </div>
    </div>
  );
}

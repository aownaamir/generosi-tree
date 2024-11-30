import React, { useState } from "react";
import PetitionStep1 from "../forms/PetitionStep1";
import PetitionStep2 from "../forms/PetitionStep2";
import PetitionStep3 from "../forms/PetitionStep3";
import PetitionProgress from "../ui/PetitionProgress";

export default function PetitionForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen lg:py-[120px] flex flex-col items-center justify-center bg-yellow-50 p-4">
      <div className="border w-full max-w-[500px] bg-white rounded-lg shadow-2xl p-7">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-2">
            Start Your Petition!
          </h2>
          <PetitionProgress step={step} />
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

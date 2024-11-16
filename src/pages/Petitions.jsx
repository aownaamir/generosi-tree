"use client";
import { useState } from "react";
import PetitionRegistration from "../forms/PetitionRegistration";
import PetitionDetails from "../forms/PetitionDetails";
import DocumentsForm from "../forms/DocumentsForm";

function Petitions() {
  const [step, setStep] = useState(1);
  return (
    <div className="px-7 lg:px-10 h-screen flex justify-center items-center flex-col gap-20">
      <h1 className="text-[40px] font-semibold">Start your petition!</h1>
      <div>
        {step === 1 && <PetitionRegistration setStep={setStep} />}
        {step === 2 && <PetitionDetails setStep={setStep} />}
        {step === 3 && <DocumentsForm setStep={setStep} />}
      </div>
    </div>
  );
}

export default Petitions;

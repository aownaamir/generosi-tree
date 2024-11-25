"use client";
import { useState } from "react";
import PetitionRegistration from "../forms/PetitionRegistration";
import PetitionDetails from "../forms/PetitionDetails";
import DocumentsForm from "../forms/DocumentsForm";

function Petitions() {
  const [step, setStep] = useState(1);
  return (
    <div className="pt-[106px] px-7 pb-28 lg:px-10 flex justify-center items-center flex-col gap-20">
      <h1 className="text-[40px] font-semibold">Start your petition!</h1>
      <div className="w-full lg:w-[700px] lg:h-[500px] flex flex-col gap-10 justify-center items-center border-4 border-theme-brown rounded-3xl">
        <div className="flex flex-col gap-2 justify-center items-center">
          <p>Step {step}</p>
          <p>
            {step === 1 && "Registration"}
            {step === 2 && "Petition details"}
            {step === 3 && "Documents"}
          </p>
        </div>
        {step === 1 && <PetitionRegistration setStep={setStep} />}
        {step === 2 && <PetitionDetails setStep={setStep} />}
        {step === 3 && <DocumentsForm setStep={setStep} />}
      </div>
    </div>
  );
}

export default Petitions;

import Donation from "../forms/Donation";

function DonationForm() {
  return (
    <div className="px-7 lg:px-10 flex justify-center items-center">
      <div className="w-full lg:w-[1000px] lg:h-[500px] my-20 border border-black flex flex-col lg:flex-row">
        <div className="w-full h-[500px] lg:w-[500px] lg:h-full border border-black"></div>
        <div className="w-full lg:w-[500px] lg:h-full py-20 lg:py-0 border border-black flex justify-center items-center">
          <Donation />
        </div>
      </div>
    </div>
  );
}

export default DonationForm;

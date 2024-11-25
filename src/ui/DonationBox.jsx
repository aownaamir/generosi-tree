import { Link } from "react-router-dom";
import Aown from "/images/Aown.jpg";
import Palastine from "/images/Palastine.jpg";
import { MdVerifiedUser } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { TbCalendar } from "react-icons/tb";
import { TbCalendarFilled } from "react-icons/tb";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";

function DonationBox({ item }) {
  return (
    // <div className="w-[280px] h-[400px] border-2 border-theme-brown flex flex-col  overflow-hidden rounded-xl shadow-xl">
    //   <div
    //     className={`w-full h-[180px] flex relative border border-theme-brown`}
    //   >
    //     <div className="w-full h-full px-4 bg-green-600 flex justify-center items-center">
    //       <p className="text-3xl text-center text-theme-background">
    //         {item.title}
    //       </p>
    //     </div>
    //     {/* <img src={Palastine} className="z-0 w-full h-full absolute" alt="" /> */}
    //     {/* <div className="z-10 absolute inset-0 bg-green-600 opacity-10"></div> */}
    //     {/* <div className="z-20 h-14 w-full -bottom-6 absolute bg-theme-green transform origin-bottom-left flex justify-center items-center">
    //       <p className="font-[550] text-slate-50 text-lg">
    //         Winter Donation Drive 2024
    //       </p>
    //     </div> */}
    //   </div>
    //   <div className="h-[220px]  relative w-full flex flex-col gap-[14px] border border-theme-brown items-center">
    //     <div className="w-[240px] h-[160px] mt-10 relative">
    //       <div className="w-full grid grid-cols-[90px,90px] justify-between">
    //         <div className="w-[90px] h-[40px]">
    //           <p className=" flex items-center gap-[7px]">
    //             <span className="text-lg text-green-600">
    //               <MdVerifiedUser />
    //             </span>
    //             <span className="text-[13.2px] text-theme-brown">
    //               {item.verified ? "Verified" : "N/A"}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="w-[90px] h-[40px]">
    //           <p className=" flex  gap-[7px]">
    //             <span className="text-lg text-green-600">
    //               <FaMoneyBillWaveAlt />
    //             </span>
    //             <span className="text-[13.2px] text-theme-brown">
    //               Rs {item.amount}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="w-[90px] h-[40px]">
    //           <p className=" flex  gap-[7px]">
    //             <span className="text-lg text-green-600">
    //               <TbCalendarFilled />
    //             </span>
    //             <span className="text-[13.2px] text-theme-brown">
    //               {item.startDate}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="w-[90px] h-[40px]">
    //           <p className=" flex  gap-[7px]">
    //             <span className="text-lg text-green-600">
    //               <FaRegCalendarCheck />
    //             </span>
    //             <span className="text-[13.2px] text-theme-brown">
    //               {item.endDate}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="w-[90px] h-[40px]">
    //           <p className=" flex  gap-[7px]">
    //             <span className="text-lg text-green-600">
    //               <IoLocationSharp />
    //             </span>
    //             <span className="text-[13.2px] text-theme-brown">
    //               {item.location}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="w-[90px] h-[40px]">
    //           <p className=" flex  gap-[7px]">
    //             <span className="text-lg text-green-600">
    //               <RiListSettingsFill />
    //             </span>
    //             <span className="text-[13.2px] text-theme-brown">
    //               {item.type}
    //             </span>
    //           </p>
    //         </div>
    //         {/* <div className="w-[90px] h-[40px]">
    //           <p className=" flex  gap-[7px]">
    //             <span className="text-lg text-green-600">
    //               <IoLocationSharp />
    //             </span>
    //             <span className="text-[13.2px] text-theme-brown">Monthly</span>
    //           </p>
    //         </div> */}
    //       </div>
    //       <div className="w-full flex justify-between absolute bottom-0">
    //         <p className="underline text-theme-brown">Details</p>
    //         <button className="w-[80px] h-9 bg-green-600 text-slate-50 rounded-full">
    //           Donate
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="p-6 bg-white shadow-lg border border-[#74a14e] rounded-lg">
      <h2 className="text-lg font-bold text-[#4c3a2c]">
        Help Us Make a Difference
      </h2>
      <p className="text-sm text-[#4b392b] mt-2">
        Your donation can change someone's life. Contribute today!
      </p>
      <button className="mt-4 px-4 py-2 bg-[#74a14e] hover:bg-[#4c3a2c] text-white rounded">
        Donate Now
      </button>
    </div>
  );
}

export default DonationBox;

import { MdVerifiedUser } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RiListSettingsFill } from "react-icons/ri";
import { FaRegCalendarMinus } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
import CountdownTimer from "./CountdownTimer";

function DonationBox({ item }) {
  return (
    <div className="w-[290px] border border-l-4 border-chat-green p-6 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold text-green-700">{item.name}</h3>
      <p className="h-[80px] text-sm text-gray-500 mt-2">{item.description}</p>
      <div className="flex justify-between items-center mt-5">
        <p className=" flex items-center gap-[7px]">
          <span className="text-lg text-chat-green">
            <MdVerifiedUser />
          </span>
          <span className="text-[13.2px] text-theme-brown">
            {item.verified ? "Verified" : "N/A"}
          </span>
        </p>
        <p className=" flex  gap-[7px]">
          <span className="text-lg text-chat-green">
            <FaRegCalendarMinus />
          </span>
          <span className="text-[13.2px] text-theme-brown">
            {item.startDate}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p className=" flex  gap-[7px]">
          <span className="text-lg text-chat-green">
            <ImStopwatch />
          </span>
          {item.target ? (
            <CountdownTimer
              className="text-[13.2px] text-theme-brown"
              target={item.target}
            />
          ) : (
            <span className="text-[13.2px] text-theme-brown">N/A</span>
          )}
        </p>
        <p className=" flex  gap-[7px]">
          <span className="text-lg text-chat-green">
            <FaRegCalendarCheck />
          </span>
          <span className="text-[13.2px] text-theme-brown">{item.endDate}</span>
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="w-[100px] text-gray-400 text-sm">
          Target: <br></br>Rs {item.amount}
        </span>
        <a href={item.url} target="_blank">
          <button className="bg-chat-green text-white px-3 py-1 rounded-md hover:bg-chat-greenH float-end">
            Donate Now
          </button>
        </a>
        {/* <div className="w-[150px] bg-gray-300 rounded-full h-2.5 mt-5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div> */}
      </div>
    </div>
  );
}

export default DonationBox;

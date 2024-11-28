import { Link } from "react-router-dom";

function DepartmentCard({ item }) {
  return (
    <Link to={`${item.url}`}>
      <div className="w-[290px] h-40 group bg-slate-50 flex flex-col gap-3 text-lg rounded-lg overflow-hidden justify-center items-center shadow-lg hover:scale-105 transition-all duration-[320ms] relative ">
        <div className="w-0 h-0 group-hover:w-full group-hover:h-full bg-chat-green absolute transition-all duration-[320ms] rounded-lg"></div>
        <item.svg className="w-[50px] h-[50px] fill-chat-green z-10 group-hover:fill-theme-background transition-all duration-300 group-hover:rotate-[360deg]" />
        <h1 className="text-chat-brown font-[550] text-nowrap z-10 group-hover:text-theme-background transition-all duration-[320ms]">
          {item.name}
        </h1>
      </div>
    </Link>
  );
}

export default DepartmentCard;

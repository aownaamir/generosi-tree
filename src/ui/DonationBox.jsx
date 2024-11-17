import { Link } from "react-router-dom";

function DonationBox({ item }) {
  return (
    <div className="w-[250px] h-[320px] relative  flex flex-col gap-1 items-center">
      <div className="w-[140px] h-[120px] border-4 border-green-800 bg-white mx-auto overflow-hidden rounded-md absolute z-10">
        <img src={item.img} alt={item.title} className="w-full h-full" />
      </div>
      <div className="p-2 absolute bottom-0 h-[240px] pt-10 flex  flex-col gap-[14px] border-4 border-theme-brown rounded-md justify-center items-center">
        <h2 className="text-theme-brown font-[550]">{item.title}</h2>
        <p className="text-sm text-center">{item.description}</p>

        {/* <Link to="/donate"> */}
        <a href={item.url} target="_blank">
          <button className="w-[80px] h-10 bg-green-600 text-slate-50 font-[550] rounded-[5px]">
            Donate
          </button>
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default DonationBox;

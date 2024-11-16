import { Link } from "react-router-dom";

function DonationBox({ item }) {
  return (
    <div className="w-[250px] h-[310px] relative  flex flex-col gap-1 items-center">
      <div className="w-[140px] h-[100px] border border-black bg-white mx-auto overflow-hidden rounded-md absolute z-10">
        {/* <img src={item.img} alt={item.title} className="w-[100px] h-[100px]" /> */}
      </div>
      <div className="p-2 absolute bottom-0 h-[240px] pt-10 flex  flex-col gap-[14px] border border-black rounded-md justify-center items-center">
        <h2>{item.title}</h2>
        <p className="text-sm text-center">{item.description}</p>

        <Link to="/donate">
          <button className="w-[80px] h-10 border border-black rounded-[5px]">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DonationBox;

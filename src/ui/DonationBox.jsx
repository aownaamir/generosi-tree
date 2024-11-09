import { Link } from "react-router-dom";

function DonationBox({ item }) {
  return (
    <div className="w-[250px] h-[330px] border border-black flex flex-col gap-1 items-center">
      <div>
        <img src={item.img} alt={item.title} className="w-[250px] h-[150px]" />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h2>{item.title}</h2>
        <p className="text-sm text-justify">{item.description}</p>

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

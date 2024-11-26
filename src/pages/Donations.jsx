import { donations } from "../data/data";
import DonationBox from "../ui/DonationBox";
function Donations() {
  return (
    <div className="pt-[96px] px-7 lg:px-10 flex justify-center items-center flex-col gap-10">
      <div className="my-20 grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-20">
        {donations.map((item) => (
          <DonationBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Donations;

import { donations } from "../data/data";
import DonationBox from "../ui/DonationBox";
function Donations() {
  return (
    <div className="flex justify-center items-center px-5">
      <div className="my-20 grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-16">
        {donations.map((item) => (
          <DonationBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Donations;

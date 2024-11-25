import { donations } from "../data/data";
import Card1 from "../ui/Card1";
import Card2 from "../ui/Card2";
import Card3 from "../ui/Card3";
import Card4 from "../ui/Card4";
import Card5 from "../ui/Card5";
import Card7 from "../ui/Card7";
import Card8 from "../ui/Card8";
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

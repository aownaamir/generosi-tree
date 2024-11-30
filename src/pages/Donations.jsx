import DonationTracker from "../ui/DonationTracker";
import EventsCalendar from "../ui/EventsCalendar";
import { donations } from "../data/data";
import DonationBox from "../ui/DonationBox";
import DonationCategories from "../ui/DonationCategories";
import Tiers from "../ui/DonationTiers";
import FAQs from "../ui/FAQs";
import ProgressCard from "../ui/ProgressCard";
import DonationsProgress from "../ui/DonationsProgress";
import DonationMetrics from "../ui/DonationMetrics";
import DonationTiers from "../ui/DonationTiers";
function Donations() {
  return (
    <div className="pt-[96px] pb-20 px-7 lg:px-10 flex flex-col justify-center items-center gap-10">
      <DonationCategories />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-20">
        {donations.map((item) => (
          <DonationBox key={item.id} item={item} />
        ))}
      </div>
      <DonationsProgress />
      <DonationMetrics />
      <DonationTiers />
    </div>
  );
}

export default Donations;

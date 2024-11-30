import DonationsProgress from "../ui/DonationsProgress";
import DonationMetrics from "../ui/DonationMetrics";
import DonationTiers from "../ui/DonationTiers";
import DonationCards from "../ui/DonationCards";
function Donations() {
  return (
    <div className="pt-[96px] pb-20 px-7 lg:px-10 flex flex-col justify-center items-center gap-10">
      <DonationCards />
      <DonationsProgress />
      <DonationMetrics />
      <DonationTiers />
    </div>
  );
}

export default Donations;

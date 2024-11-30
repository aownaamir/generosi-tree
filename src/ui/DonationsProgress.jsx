import ProgressCard from "./ProgressCard";

const progress = [
  {
    id: 0,
    title: "Winter Drive",
    target: 100000,
    raised: 23000,
  },
  {
    id: 2,
    title: "ThirTree Monthly",
    target: 100000,
    raised: 23000,
  },
  {
    id: 3,
    title: "Clothes Drive",
    target: 100000,
    raised: 23000,
  },
];
function DonationsProgress() {
  return (
    <div className="mt-12 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Donations Progress
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          An overview of our recent community performance
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-20">
        {progress.map((drive) => (
          <ProgressCard
            className="w-[290px"
            key={drive.id}
            title={drive.title}
            target={drive.target}
            raised={drive.raised}
          />
        ))}
      </div>
    </div>
  );
}

export default DonationsProgress;

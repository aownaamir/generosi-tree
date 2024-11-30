const DonationTiers = () => {
  const tiers = [
    {
      name: "Bronze Donor",
      amount: "Up to Rs 10,000",
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      icon: "🟤", // Replace with actual icons if you have an icon library
    },
    {
      name: "Silver Donor",
      amount: "Up to Rs 50,000",
      color: "bg-gray-200",
      textColor: "text-gray-800",
      icon: "⚪",
    },
    {
      name: "Gold Donor",
      amount: "Above Rs 50,000",
      color: "bg-yellow-500",
      textColor: "text-white",
      icon: "🌟",
    },
  ];

  return (
    <section className="mt-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Donation Tiers</h2>
        <p className="text-lg text-gray-600 mt-2">
          An overview of our recent community performance
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${tier.color}`}
          >
            <div className="text-4xl mb-4">{tier.icon}</div>
            <h3 className={`text-xl font-bold ${tier.textColor}`}>
              {tier.name}
            </h3>
            <p className={`mt-2 ${tier.textColor}`}>{tier.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationTiers;

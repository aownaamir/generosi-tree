function DonationMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8 rounded-lg ">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-20 bg-white p-8 rounded-lg shadow-lg"> */}
      {[
        { label: "Total Funds Raised", value: "Rs 1,200,000" },
        { label: "Number of Beneficiaries", value: "540+" },
        { label: "Ongoing Drives", value: "8" },
      ].map((metric, index) => (
        <div
          key={index}
          //   className="text-center py-4 px-6 border border-chat-green rounded-lg"
          className="text-center py-7 px-10 border border-chat-green rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold text-green-600">{metric.value}</h3>
          <p className="text-gray-600">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export default DonationMetrics;

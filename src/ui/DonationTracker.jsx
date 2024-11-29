import { useEffect, useState } from "react";

function DonationTracker() {
  const [donations, setDonations] = useState(75000);
  useEffect(() => {
    const interval = setInterval(() => {
      setDonations((prev) => prev + Math.floor(Math.random() * 1000)); // Mock increase
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-green-100 rounded text-center">
      <h2 className="text-2xl font-bold text-green-600">
        Total Donations: Rs {donations.toLocaleString()}
      </h2>
    </div>
  );
}

export default DonationTracker;

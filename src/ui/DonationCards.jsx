import { useEffect, useState } from "react";
// import { donations } from "../data/data";
import DonationBox from "./DonationBox";
import DonationCategories from "./DonationCategories";
import { getAllDonations } from "../api/donations";

function DonationCards() {
  const [donations, setDonations] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchDonations() {
      try {
        setIsLoading(true);
        const { donations } = await getAllDonations();
        setDonations(donations);
        console.log(donations);
      } catch (err) {
        console.log("Error recieved: ", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDonations();
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Donate to the community
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          An overview of our recent community performance
        </p>
      </div>
      <DonationCategories />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-20">
          {donations?.map((item) => (
            <DonationBox key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DonationCards;

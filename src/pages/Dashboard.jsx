"use Client";
import { useState } from "react";
import DashboardButtons from "../ui/DashboardButtons";
import MyProfile from "../ui/MyProfile";
import MyWallet from "../ui/MyWallet";
import MyPetitions from "../ui/MyPetitions";
import MyDonations from "../ui/MyDonations";

function Dashboard() {
  const [section, setSection] = useState(0);
  return (
    <div className="pt-[96px] flex py-20 justify-center items-center">
      <div className="w-[1100px] grid grid-cols-[240px,840px] gap-[10px]">
        <DashboardButtons setSection={setSection} />
        <div className="w-[850px] h-[80vh] border border-black flex justify-center items-center">
          {section === 0 && <MyProfile />}
          {section === 1 && <MyWallet />}
          {section === 2 && <MyPetitions />}
          {section === 3 && <MyDonations />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import AboutUs from "../ui/AboutUs";
import Hero from "../ui/Hero";
import JoinTeam from "../ui/JoinTeam";
import Departments from "./Departments";

function Home() {
  return (
    <div className="px-7 lg:px-10">
      <Hero />
      <Departments />
      <AboutUs />
      <JoinTeam />
      {/* <Links /> */}
    </div>
  );
}

export default Home;

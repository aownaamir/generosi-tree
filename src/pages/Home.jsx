import AboutUs from "../ui/AboutUs";
import Departments from "../ui/Departments";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import JoinTeam from "../ui/JoinTeam";
import Links from "../ui/Links";
import Navbar from "../ui/Navbar";

function Home() {
  return (
    <div>
      <Hero />
      <Departments />
      <AboutUs />
      <JoinTeam />
      <Links />
    </div>
  );
}

export default Home;

import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

function AppLayout() {
  return (
    <div className="relative bg-theme-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

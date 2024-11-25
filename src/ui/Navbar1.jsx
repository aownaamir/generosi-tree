import logoC from "/images/logo-circle-textless.png";
import logoS from "/images/logo-square.png";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full py-3 px-5 lg:px-8 flex justify-between items-center bg-transparent absolute z-10">
      <Link to="/">
        <h2 className="text-[25px] edu-au-vic-wa-nt-pre">
          <span className="text-theme-brown">Generosi</span>
          <span className="text-green-600">Tree</span>
        </h2>
      </Link>
      <ul className="raleway flex lg:gap-10 text-sm justify-center items-center">
        <div className="hidden lg:flex lg:gap-10 text-theme-brown font-[550]">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="donations">
            <li>Donations</li>
          </Link>
          <Link to="departments">
            <li>Departments</li>
          </Link>
          <a href="#footer">
            <li>Contact</li>
          </a>
        </div>
        <Link to="portal">
          <button className="w-[78px] h-8 lg:w-[70px] text-sm bg-theme-green text-theme-background rounded-lg font-[550] ">
            Login
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

import logoC from "/images/logo-circle-textless.png";
import logoS from "/images/logo-square.png";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-24 px-3 lg:px-8 flex justify-between items-center  bg-transparent absolute z-10">
      <Link to="/">
        <h2 className="text-[15px] lg:text-[25px] edu-au-vic-wa-nt-pre">
          <span className="text-theme-brown">Generosi</span>
          <span className="text-green-600">Tree</span>
        </h2>
      </Link>
      <ul className="raleway flex lg:gap-10 text-[12px] lg:text-sm justify-center items-center">
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
          <button className="w-[47px] h-[26px] lg:w-[75px]  text-[9px] lg:text-sm lg:h-9 bg-green-600 text-slate-50 rounded-lg font-[550]">
            Login
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

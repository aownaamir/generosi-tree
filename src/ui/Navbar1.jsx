import logoC from "/images/logo-circle-textless.png";
import logoS from "/images/logo-square.png";
import logo from "/images/logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full py-[21.5px] flex justify-center bg-transparent absolute z-10">
      {/* <Link to="/">
        <h2 className="text-[25px] roboto-regular">
          <span className="text-theme-brown">Generosi</span>
          <span className="text-green-600">Tree</span>
        </h2>
      </Link> */}
      <ul className="raleway flex lg:gap-10 text-sm justify-center items-center">
        <div className="hidden lg:flex lg:gap-10 font-[550]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-700 font-bold border-b-2 border-green-600"
                : "text-theme-brown"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="donations"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border-b-2 border-green-600"
                : "text-theme-brown"
            }
          >
            <li>Donations</li>
          </NavLink>
          <NavLink
            to="departments"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border-b-2 border-green-600"
                : "text-theme-brown"
            }
          >
            <li>Departments</li>
          </NavLink>
          <a
            href="#footer"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border-b-2 border-green-600"
                : "text-theme-brown"
            }
          >
            <li className="text-theme-brown">Contact</li>
          </a>
        </div>
      </ul>
      <div className="h-full absolute top-0 right-5 flex justify-center items-center">
        <Link to="portal">
          <button className="w-[78px] h-8 lg:w-[70px] text-sm bg-chat-green text-theme-background rounded-lg shadow-md font-semibold hover:bg-chat-brown ">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

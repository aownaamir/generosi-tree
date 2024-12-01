import logoC from "/images/logo-circle-textless.png";
import logoS from "/images/logo-square.png";
import logo from "/images/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { departments } from "../data/data";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen((pV) => !pV);
  };
  // console.log(location.pathname);
  return (
    <div className="w-full py-[32.5px] lg:py-[21.5px] flex justify-center bg-transparent absolute z-10">
      <ul className="raleway flex lg:gap-10 text-[13px] justify-center items-center">
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

          <li
            className="relative cursor-pointer text-theme-brown"
            onClick={toggleDropdown}
          >
            Departments
            <ul
              className={`w-[250px] grid grid-cols-2 absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md text-left ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              {departments.map((dept) => (
                <NavLink
                  key={dept.id}
                  to={dept.url}
                  className="block px-4 py-2 hover:bg-green-100 text-theme-brown"
                >
                  {dept.name}
                </NavLink>
              ))}
            </ul>
          </li>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border-b-2 border-green-600"
                : "text-theme-brown"
            }
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border-b-2 border-green-600"
                : "text-theme-brown"
            }
          >
            <li>About</li>
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
          <NavLink
            to="chat"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border-b-2 border-green-600"
                : "text-theme-brown"
            }
          >
            <li>GPT</li>
          </NavLink>
        </div>
      </ul>
      {location.pathname === "/" && (
        <div className="h-full absolute top-0 right-5 flex justify-center items-center">
          <Link to="auth">
            <button className="w-[78px] h-9 lg:h-8 lg:w-[70px] text-[13px] bg-chat-green text-theme-background rounded-lg shadow-md font-semibold hover:bg-chat-greenH">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

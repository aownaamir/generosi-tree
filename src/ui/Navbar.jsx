import logoC from "/images/logo-circle-textless.png";
import logoS from "/images/logo-square.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-28 px-7 lg:px-10 flex justify-between items-center">
      <div className="flex ">
        <Link to="/">
          <img src={logoC} alt="logo" width={85} height={85} />
        </Link>
      </div>
      <ul className="flex lg:gap-10 text-sm justify-center items-center">
        <div className="hidden lg:flex lg:gap-10">
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
          <button className="w-[75px] text-sm h-9 border border-black rounded-lg">
            Login
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

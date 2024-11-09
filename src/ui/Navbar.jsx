import logo from "/images/logo-circle-textless.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full pt-5 h-20 px-5 lg:px-10 flex justify-between items-center">
      <div className="flex ">
        <Link to="/">
          <img src={logo} alt="logo" width={70} height={70} />
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

import logo from "/images/logo.png";
import logoCircle from "/images/logo-circle.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full pt-5 h-20 px-5 lg:px-10 flex justify-between items-center">
      <div className="flex ">
        <Link to="/">
          <img src={logoCircle} alt="logo" width={70} height={70} />
        </Link>
        {/* <h1 className="text-xl">GenerosiTree</h1> */}
      </div>
      <ul className="flex lg:gap-10 text-sm justify-center items-center">
        <div className="hidden lg:flex lg:gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <button className="w-[75px] text-sm h-9 border border-black rounded-lg">
          <Link to="portal">Login</Link>
        </button>
      </ul>
    </div>
  );
}

export default Navbar;

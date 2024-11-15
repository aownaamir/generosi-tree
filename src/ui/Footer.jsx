import logo from "/images/logo.png";
import logoS from "/images/logo-square.png";
import { links } from "../data/data";
function Footer() {
  return (
    <div className="mt-20 mb-10 px-5 lg:h-[300px] flex justify-center items-center">
      <div className="grid lg:gap-10 grid-cols-1 lg:grid-cols-5">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={logoS} alt="logo" className="w-[180px] h-[180px]" />
          </div>
        </div>

        {links.map((item, i) => (
          <a key={i} href={item.url}>
            <div className="flex flex-col justify-center items-center gap-3 w-[180px] h-[180px]">
              <item.icon className="text-[60px]" />
              <p className="">{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;

import logo from "/images/logo.png";
import logoS from "/images/logo-square.png";
import { links } from "../data/data";
function Footer() {
  return (
    <div
      id="footer"
      className="px-5 lg:h-[230px] flex justify-center items-center"
    >
      <div className="flex justify-between items-center gap-10">
        <div className="flex flex-col justify-center items-center bg-theme-background">
          <div>
            <img src={logoS} alt="logo" className="w-[165px] h-[165px]" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {links.map((item, i) => (
            <a
              key={i}
              href={item.title === "gmail" ? "" : item.url}
              target={item.title === "gmail" ? "_parent" : "_blank"}
            >
              <div className="w-[130px] h-[125px] flex flex-col justify-start items-center gap-3">
                <item.icon className="text-[60px] " />
                <p className="break-words text-center text-theme-brown font-[550]">
                  {item.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

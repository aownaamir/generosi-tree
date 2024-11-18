import logo from "/images/logo.png";
import logoS from "/images/logo-square.png";
import { links } from "../data/data";
function Footer() {
  return (
    <div
      id="footer"
      className="mt-20 py-10 px-5 lg:h-[250px] flex justify-center items-center"
    >
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={logoS} alt="logo" className="w-[150px] h-[150px]" />
          </div>
        </div>

        {links.map((item, i) => (
          <a
            key={i}
            href={item.title === "gmail" ? "" : item.url}
            target={item.title === "gmail" ? "_parent" : "_blank"}
          >
            <div className="w-[150px] h-[125px] flex flex-col justify-start items-center gap-3">
              <item.icon className="text-[60px] " />
              <p className="break-words text-center text-theme-brown font-[550]">
                {item.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;

import { links } from "../data/data";
import logoS from "/images/logo-square.png";

function Footer() {
  return (
    <div
      id="footer"
      className="px-5 py-14 flex justify-center items-center bg-chat-green"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col justify-center items-center bg-theme-background">
          <div>
            <img src={logoS} alt="logo" className="w-[165px] h-[165px]" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-0">
          {links.map((item, i) => (
            <div
              key={i}
              className={`w-[170px] h-[125px] flex flex-col justify-start items-center gap-3 ${
                item.id !== links.length - 1 && "lg:border-r"
              } border-theme-background`}
            >
              <a
                href={item.title === "gmail" ? "" : item.url}
                target={item.title === "gmail" ? "_parent" : "_blank"}
              >
                <item.icon className="text-[60px] text-theme-background hover:text-chat-brown" />
              </a>
              <a
                href={item.title === "gmail" ? "" : item.url}
                target={item.title === "gmail" ? "_parent" : "_blank"}
              >
                <p className="break-words text-center text-theme-background hover:text-chat-brown">
                  {item.name.split(" ")[0]}
                  <br />
                  {item.name.split(" ")[1]}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

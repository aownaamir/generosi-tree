import { links } from "../data/data";
import logoS from "/images/logo-square.png";

function Footer() {
  return (
    <div
      id="footer"
      className="px-5 py-14 relative flex flex-col justify-center items-center bg-chat-green"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10">
        <div className="flex flex-col justify-center items-center bg-theme-background">
          <div>
            <img src={logoS} alt="logo" className="w-[165px] h-[165px]" />
          </div>
        </div>

        <div className="flex justify-center gap-2 lg:gap-0">
          {links.map((item, i) => (
            <div
              key={i}
              className={`lg:px-5 flex flex-col justify-start items-center gap-3 border-chat-brown ${
                item.id !== links.length - 1 && "lg:border-r"
              }`}
            >
              <a
                href={item.title === "gmail" ? "" : item.url}
                target={item.title === "gmail" ? "_parent" : "_blank"}
              >
                <item.icon className="text-[40px] lg:text-[70px] text-chat-brown hover:text-theme-backgroundC" />
              </a>
              {/* <a
                href={item.title === "gmail" ? "" : item.url}
                target={item.title === "gmail" ? "_parent" : "_blank"}
              >
                <p className="break-words text-center text-theme-background hover:text-chat-brown">
                  {item.name.split(" ")[0]}
                  <br />
                  {item.name.split(" ")[1]}
                </p>
              </a> */}
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-chat-brown">
            Subscribe to Our Newsletter
          </h2>
          {/* <p className="text-sm md:text-base mb-6">
            Stay updated with our latest programs and initiatives.
          </p> */}
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-auto"
            />
            <button className="bg-green-700 hover:bg-green-700 px-6 py-2 rounded-md text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-sm absolute bottom-5">
        &copy; {new Date().getFullYear()} GenerosiTree. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;

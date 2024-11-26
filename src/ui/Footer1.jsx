import { links } from "../data/data";
import logoS from "/images/logo-square.png";

function Footer() {
  return (
    <footer className="bg-[#4c3a2c] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm md:text-base mb-6">
            Stay updated with our latest programs and initiatives.
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-auto"
            />
            <button className="bg-[#74a14e] hover:bg-green-700 px-6 py-2 rounded-md text-white">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        {/* <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <div className="flex flex-col items-center md:items-start">
              <img src={logoS} alt="Generositree Logo" className="h-16 mb-4" />
              <p>Empowering communities through generosity and hope.</p>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex space-x-6">
                <a href="/about" className="hover:underline">
                  About
                </a>
                <a href="/donate" className="hover:underline">
                  Donate
                </a>
                <a href="/programs" className="hover:underline">
                  Programs
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" className="hover:text-green-500">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://instagram.com" className="hover:text-green-500">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div> */}
        <div className="flex justify-center my-20 items-center gap-10">
          <div className="flex flex-col justify-center items-center bg-theme-background">
            <div>
              <img src={logoS} alt="logo" className="w-[165px] h-[165px]" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            {links.map((item, i) => (
              <a
                key={i}
                href={item.title === "gmail" ? "" : item.url}
                target={item.title === "gmail" ? "_parent" : "_blank"}
              >
                <div
                  className={`w-[170px] h-[125px] flex flex-col justify-start items-center gap-3 ${
                    item.id !== links.length - 1 && "lg:border-r"
                  }`}
                >
                  <item.icon className="text-[60px] text-theme-background" />
                  <p className="break-words text-center text-theme-background">
                    {item.name.split(" ")[0]}
                    <br />
                    {item.name.split(" ")[1]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} Generositree. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

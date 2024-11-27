import QMark from "../svgs/QMark";
import Handshake from "../svgs/Handshake";
import Houses from "../svgs/Houses";
import Goal from "../svgs/Goal";
import { aboutUs } from "../data/data";
function AboutUs() {
  return (
    <div className="px-5 lg:px-8 my-16 flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-10 mb-20 poppins">About Us</h1>
      <div className="flex flex-col justify-center items-center gap-10">
        {aboutUs.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10"
          >
            <div
              className={`w-[360px] lg:w-[500px] lg:h-[300px] flex items-center justify-center ${
                item.inverted || "hidden"
              }`}
            >
              <item.svg size="150px" />
            </div>
            <div className="w-[360px] lg:w-[500px] lg:h-[300px] flex flex-col gap-7 items-center justify-center ">
              <p className="text-3xl ">
                <span className="text-theme-brown poppins">
                  {item.title.split(" ")[0]}
                </span>{" "}
                <span className="text-theme-green poppins">
                  {item.title.split(" ")[1]}
                </span>
              </p>
              <p className="">{item.description}</p>
            </div>
            <div
              className={`-[360px] lg:w-[500px] lg:h-[300px] flex items-center justify-center ${
                item.inverted && "hidden"
              }`}
            >
              <item.svg size="150px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;

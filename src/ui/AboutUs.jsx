import QMark from "../svgs/QMark";
import Handshake from "../svgs/Handshake";
import Houses from "../svgs/Houses";
import Goal from "../svgs/Goal";
function AboutUs() {
  return (
    <div className="px-3 lg:px-8 my-40 flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-10 mb-20 poppins">About Us</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <div className="w-[360px] lg:w-[500px] lg:h-[300px] flex flex-col gap-7 items-center justify-center ">
          <p className="text-3xl text-theme-brown poppins">
            What's Generosi<span className="text-theme-green">Tree?</span>
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim
            iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac
            felis quis ornare.Cras venenatis sapien vitae tempus vehicula.
            Mauris sollicitudin ante at libero lobortis, id lobortis metus
            ultrices. Sed sed elit mollis mi dictum volutpat.
          </p>
        </div>
        <div className="w-[360px] lg:w-[500px] lg:h-[300px] flex items-center justify-center ">
          <QMark size="150px" />
        </div>
        <div className="w-[360px] lg:w-[500px] lg:h-[300px] flex items-center overflow-hidden justify-center ">
          <Goal size="130px" />
        </div>
        <div className="w-[360px] lg:w-[500px] lg:h-[300px] flex flex-col gap-7 items-center justify-center ">
          <p className="text-3xl text-theme-brown poppins">
            Our <span className="text-theme-green">Goal</span>
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim
            iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac
            felis quis ornare. Cras venenatis sapien vitae tempus vehicula.
            Mauris sollicitudin ante at libero lobortis, id lobortis metus
            ultrices. Sed sed elit mollis mi dictum volutpat.
          </p>
        </div>
        <div className="w-[360px] lg:w-[500px] lg:h-[300px] flex flex-col gap-7 items-center justify-center ">
          <p className="text-3xl text-theme-brown poppins">
            Your <span className="text-theme-green">Contribution</span>
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim
            iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac
            felis quis ornare. Cras venenatis sapien vitae tempus vehicula.
            Mauris sollicitudin ante at libero lobortis, id lobortis metus
            ultrices. Sed sed elit mollis mi dictum volutpat.
          </p>
        </div>
        <div className="w-[360px] lg:w-[500px] lg:h-[300px] flex justify-center items-center">
          <Handshake size="160px" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

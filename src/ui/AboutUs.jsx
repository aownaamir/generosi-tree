import QMark from "../svgs/QMark";
import Handshake from "../svgs/Handshake";
import Houses from "../svgs/Houses";
function AboutUs() {
  return (
    <div className="my-40 flex justify-center items-center">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <div className="w-full lg:w-[500px] lg:h-[300px] flex flex-col gap-7 items-center justify-center ">
          <p className="text-3xl text-theme-brown">
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
        <div className="w-full lg:w-[500px] lg:h-[300px] flex items-center justify-center ">
          <QMark size="150px" />
        </div>
        <div className="w-full lg:w-[500px] lg:h-[300px] flex items-center overflow-hidden justify-center ">
          <Handshake size="150px" />
        </div>
        <div className="w-full lg:w-[500px] lg:h-[300px] flex flex-col gap-7 items-center justify-center ">
          <p className="text-3xl text-theme-brown">
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
        <div className="w-full lg:w-[500px] lg:h-[300px] flex flex-col gap-7 items-center justify-center ">
          <p className="text-3xl text-theme-brown">
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
        <div className="w-full lg:w-[500px] lg:h-[300px] flex justify-center items-center">
          <Houses size="150px" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

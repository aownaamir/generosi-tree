import QMark from "../svgs/QMark";
import Handshake from "../svgs/Handshake";
import Houses from "../svgs/Houses";
function AboutUs() {
  return (
    <div className="my-40 flex justify-center items-center">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <div className="w-full lg:w-[500px] lg:h-[380px] flex items-center">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim
            iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac
            felis quis ornare. Cras venenatis sapien vitae tempus vehicula.
            Mauris sollicitudin ante at libero lobortis, id lobortis metus
            ultrices. Sed sed elit mollis mi dictum volutpat. Integer ac porta
            ipsum. Fusce accumsan mattis venenatis. Fusce hendrerit lobortis
            dignissim. Aenean rutrum, ipsum in dapibus varius, urna dolor congue
            justo, vel pellentesque.
          </p>
        </div>
        <div className="w-full lg:w-[500px] lg:h-[380px] flex justify-center items-center">
          <QMark size="280px" />
        </div>
        <div className="w-full lg:w-[500px] lg:h-[380px] flex justify-center items-center overflow-hidden">
          <Handshake size="280px" />
        </div>
        <div className="w-full lg:w-[500px] lg:h-[380px] flex items-center">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim
            iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac
            felis quis ornare. Cras venenatis sapien vitae tempus vehicula.
            Mauris sollicitudin ante at libero lobortis, id lobortis metus
            ultrices. Sed sed elit mollis mi dictum volutpat. Integer ac porta
            ipsum. Fusce accumsan mattis venenatis. Fusce hendrerit lobortis
            dignissim. Aenean rutrum, ipsum in dapibus varius, urna dolor congue
            justo, vel pellentesque.
          </p>
        </div>
        <div className="w-full lg:w-[500px] lg:h-[380px] flex items-center">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim
            iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac
            felis quis ornare. Cras venenatis sapien vitae tempus vehicula.
            Mauris sollicitudin ante at libero lobortis, id lobortis metus
            ultrices. Sed sed elit mollis mi dictum volutpat. Integer ac porta
            ipsum. Fusce accumsan mattis venenatis. Fusce hendrerit lobortis
            dignissim. Aenean rutrum, ipsum in dapibus varius, urna dolor congue
            justo, vel pellentesque.
          </p>
        </div>
        <div className="w-full lg:w-[500px] lg:h-[380px] flex justify-center items-center">
          <Houses size="280px" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

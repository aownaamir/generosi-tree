const steps = [
  {
    id: 0,
    step: 1,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin nulla ac ligula feugiat consequat. Curabitur et enimiaculis nunc egestas lobortis quis eget sem.",
    inverted: false,
  },
  {
    id: 1,
    step: 2,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin nulla ac ligula feugiat consequat. Curabitur et enimiaculis nunc egestas lobortis quis eget sem.",
    inverted: true,
  },
  {
    id: 2,
    step: 3,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin nulla ac ligula feugiat consequat. Curabitur et enimiaculis nunc egestas lobortis quis eget sem.",
    inverted: false,
  },
  {
    id: 3,
    step: 4,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin nulla ac ligula feugiat consequat. Curabitur et enimiaculis nunc egestas lobortis quis eget sem.",
    inverted: true,
  },
];

function JoinTeam() {
  return (
    <div className="px-5 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row lg:gap-7">
        {steps.map((item) => (
          <div
            key={item.id}
            className="w-full lg:w-[250px] h-[360px] lg:h-[350px] px-4  flex flex-col justify-center items-center"
          >
            <div
              className={`w-[180px] h-[180px] lg:w-[140px] lg:h-[140px] border-[7px] border-black rounded-full flex justify-center items-center text-6xl font-bold my-2 ${
                item.inverted ? "lg:hidden" : ""
              }`}
            >
              {item.step}
            </div>
            <p className="text-md text-justify my-2">{item.description}</p>
            <div
              className={`w-[180px] h-[180px] lg:w-[140px] lg:h-[140px] border-[7px] border-black rounded-full  justify-center items-center text-6xl font-bold my-2 hidden ${
                item.inverted ? "lg:flex" : ""
              }`}
            >
              {item.step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinTeam;

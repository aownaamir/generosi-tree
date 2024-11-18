const steps = [
  {
    id: 0,
    step: 1,
    title: "Search",
    description:
      " We find cases around the internet, searching for people facing some kind of emergency situation.",
  },
  {
    id: 1,
    step: 2,
    title: "Verification",
    description:
      " In this step, we verify the cases through documents or by contacting relevent people.",
  },
  {
    id: 2,
    step: 3,
    title: "Compeigns",
    description:
      "Once verified, we publish the case on our website along with social media and do compeigns, try our best to meet the requirements.",
  },
  {
    id: 3,
    step: 4,
    title: "Thanks",
    description:
      "Once the problem is resolved, we regard our clients with a GenerosiTree appreciation certificate.",
  },
];

function JoinTeam() {
  return (
    <div className="px-3 lg:px-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-10 mb-20 poppins">How do we work?</h1>
      <div className="flex flex-col lg:flex-row lg:gap-7">
        {steps.map((item) => (
          <div
            key={item.id}
            className="w-full lg:w-[250px] h-[360px] lg:h-[300px] px-4  flex flex-col justify-start items-center"
          >
            <div
              className={`w-[180px] h-[180px] lg:w-[120px] lg:h-[120px] border-4 border-theme-brown rounded-full flex justify-center items-center text-5xl text-theme-green font-semibold my-2 join-shadow`}
            >
              {item.step}
            </div>
            <p className="text-md text-center my-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinTeam;

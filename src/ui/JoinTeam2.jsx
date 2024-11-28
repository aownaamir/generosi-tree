import { steps } from "../data/data";

function Steps1() {
  return (
    <section className="bg-theme-backgroundC py-16 px-6 flex flex-col justify-center items-center">
      <h2 className="text-center text-3xl font-bold text-[#4c3a2c] mb-10">
        How Do We Work?
      </h2>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[250px,250px,250px,250px] gap-20 lg:gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white border-chat-green p-6 rounded-lg step-shadow transition-shadow duration-300 ease-in-out"
          >
            <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 w-20 h-20 border-4 bg-white border-chat-green text-white flex items-center justify-center rounded-full">
              {step.icon}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#4c3a2c]">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps1;

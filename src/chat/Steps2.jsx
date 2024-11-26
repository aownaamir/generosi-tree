function Steps1() {
  return (
    <section className="bg-theme-background py-16 px-6 flex flex-col justify-center items-center">
      <h2 className="text-center text-3xl font-bold text-[#4c3a2c] mb-10">
        How Do We Work?
      </h2>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[250px,250px,250px,250px] gap-10">
        {[
          {
            number: "1",
            title: "Identify Cases",
            description:
              "We find cases around the internet, searching for people facing some kind of emergency situation.",
            icon: "🔍",
          },
          {
            number: "2",
            title: "Verification",
            description:
              "We verify the cases through documents or by contacting relevant people.",
            icon: "✅",
          },
          {
            number: "3",
            title: "Campaign",
            description:
              "We publish verified cases on our website and social media to raise awareness and gather help.",
            icon: "📢",
          },
          {
            number: "4",
            title: "Acknowledge",
            description:
              "We appreciate donors and recipients by providing certificates and updates.",
            icon: "🏆",
          },
        ].map((step, index) => (
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

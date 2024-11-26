function Steps1() {
  return (
    <section className="bg-[#f7f4ef] py-16 px-6">
      <h2 className="text-center text-3xl font-bold text-[#4c3a2c] mb-10">
        How Do We Work?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
            className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#74a14e] text-white text-3xl font-bold">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#4c3a2c]">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps1;

import Aown from "/images/Aown.jpg";

function Quote() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl text-gray-300">
            &ldquo;
          </div>
          <p className="italic text-gray-700 text-lg leading-relaxed">
            "Working with this organization has been the most rewarding
            experience of my life. Their dedication to the community is
            unparalleled."
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <img src={Aown} alt="Person" className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h4 className="text-gray-800 font-semibold">Sarah Walker</h4>
            <p className="text-sm text-gray-500">Long-time Volunteer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;

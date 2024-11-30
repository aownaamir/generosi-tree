function Awareness() {
  return (
    <div className="bg-theme-backgroundC min-h-screen">
      {/* Hero Section */}
      <section className="pt-[100px] py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-700">
            Together, We Can Change Lives!
          </h1>
          <p className="mt-4 text-lg text-theme-brown">
            Join us in raising awareness and support for those in need. Every
            action matters.
          </p>
          <div className="mt-6">
            <button className="bg-chat-green text-white px-6 py-3 rounded-md hover:bg-chat-greenH">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About the Cause */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why It Matters</h2>
          <p className="mt-4 text-gray-600">
            Millions of people around the world are facing hardship every day.
            Our mission is to bring change by providing essential resources and
            support to those who need it the most.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Impact So Far
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900">5,000+</h3>
              <p className="mt-2 text-gray-600">Families Supported</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900">1M+ Rs</h3>
              <p className="mt-2 text-gray-600">Funds Raised</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900">1,200+</h3>
              <p className="mt-2 text-gray-600">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-100 p-6 shadow-lg rounded-lg">
              <p className="text-gray-700">
                "Thanks to your donations, we were able to provide medical aid
                to over 3,000 children in rural areas."
              </p>
              <span className="block mt-4 text-green-900 font-semibold">
                - John Doe, Volunteer
              </span>
            </div>
            <div className="bg-green-100 p-6 shadow-lg rounded-lg">
              <p className="text-gray-700">
                "With the community's support, we built shelters for families
                affected by floods in our region."
              </p>
              <span className="block mt-4 text-green-900 font-semibold">
                - Jane Smith, Beneficiary
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800">How You Can Help</h2>
        <p className="mt-4 text-lg">
          Whether through donations, volunteering, or spreading the word, you
          can make a difference.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-8 py-3 bg-chat-green text-white font-semibold rounded-md hover:bg-chat-greenH">
            Donate Now
          </button>
          <button className="px-8 py-3 bg-theme-brown text-white font-semibold rounded-md hover:bg-chat-brown">
            Become a Volunteer
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900">
                How are donations used?
              </h3>
              <p className="mt-2 text-gray-600">
                Donations go directly towards providing resources such as food,
                medical supplies, and shelter.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900">
                Can I volunteer remotely?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes! We offer various remote volunteering opportunities. Reach
                out to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awareness;

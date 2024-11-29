import logo from "/images/logo.png";

const ChatHome = () => (
  <div>
    <Hero />
    <About />
    <FeaturedCauses />
    <Testimonials />
    <CTASection />
    <Newsletter />
  </div>
);

function Hero() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-green-700 mb-6">
            Help Us Make a Difference
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Join our mission to support communities in need. Every donation
            counts, whether it's clothes, food, or financial support. Be the
            change you wish to see in the world.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Donate Now
            </button>
            <button className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-md hover:bg-green-100">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={logo}
            alt="Helping Hands"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At HAMD, we are committed to bringing communities together to support
          those in need. From education to healthcare, we ensure that every
          donation makes a meaningful impact.
        </p>
      </div>
    </section>
  );
}

const FeaturedCauses = () => {
  const causes = [
    { title: "Winter 2024 Donation Drive", target: 100000, raised: 75000 },
    { title: "Orphanage Support Program", target: 50000, raised: 32000 },
    { title: "Plantation Drive", target: 30000, raised: 12000 },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Featured Causes
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-700">
                {cause.title}
              </h3>
              <p className="text-gray-600 mt-4">
                Target: Rs {cause.target.toLocaleString()}
              </p>
              <p className="text-gray-600">
                Raised: Rs {cause.raised.toLocaleString()}
              </p>
              <div className="bg-gray-200 w-full h-4 mt-4 rounded-full">
                <div
                  className="bg-green-600 h-4 rounded-full"
                  style={{ width: `${(cause.raised / cause.target) * 100}%` }}
                ></div>
              </div>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-12 bg-green-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">
        What Our Donors Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            "HAMD's campaigns have been incredibly impactful. I'm proud to be a
            regular donor."
          </p>
          <span className="block text-green-700 mt-4 font-semibold">
            - John Doe
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            "Seeing my small donation make such a big difference is
            heartwarming."
          </p>
          <span className="block text-green-700 mt-4 font-semibold">
            - Jane Smith
          </span>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-12 bg-green-700 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Get Involved Today!</h2>
    <p className="text-lg mb-6">
      Join us in making a difference. Your support can change lives. Whether
      it's a donation or volunteering, every action counts.
    </p>
    <button className="bg-white text-green-700 px-6 py-3 rounded-md hover:bg-green-100">
      Become a Volunteer
    </button>
  </section>
);

const Newsletter = () => (
  <section className="py-12 bg-gray-100">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Stay Updated</h2>
      <p className="text-gray-700 mb-6">
        Subscribe to our newsletter to receive updates on our latest campaigns
        and events.
      </p>
      <form className="flex flex-col sm:flex-row justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-2/3 px-4 py-2 mb-4 sm:mb-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default ChatHome;

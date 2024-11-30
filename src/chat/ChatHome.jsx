import DonationTracker from "../ui/DonationTracker";
import EventsCalendar from "../ui/EventsCalendar";
import FAQs from "../ui/FAQs";
import ProgressCard from "../ui/ProgressCard";
import Tiers from "../ui/DonationTiers";
import EventsCalendar2 from "./EventsCalendar2";
import logo from "/images/logo.png";

const ChatHome = () => (
  <div className=" flex flex-col gap-10">
    <Hero />
    <About />
    <FeaturedCauses />
    <Testimonials />
    <CTASection />
    <Newsletter />
    {/* Dontions */}
    <EventsCalendar />
    <EventsCalendar2 />
    <DonationTracker />
    <FAQs />
    <Tiers />
    <ProgressCard title="Winter Drive" target={10000} raised={23000} />
    <Metrics1 />
    <Metrics2 />
    <HorizontalScrollableMetricsBar />
    <CircularProgressMetrics />
    <BadgeMetrics />
    <VerticalMetrics />
    <DonationTiers />
    <AwarenessHero />
    <AwarenessHero2 />
    <AwarenessPage />
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

function Metrics1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-lg shadow-lg">
      {[
        { label: "Total Funds Raised", value: "Rs 1,200,000" },
        { label: "Number of Beneficiaries", value: "540+" },
        { label: "Ongoing Drives", value: "8" },
      ].map((metric, index) => (
        <div
          key={index}
          className="text-center p-4 border border-gray-200 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-green-600">{metric.value}</h3>
          <p className="text-gray-600">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function Metrics2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: "💰", label: "Total Raised", value: "Rs 1,200,000" },
        { icon: "👥", label: "Beneficiaries", value: "540+" },
        { icon: "🚀", label: "Drives Active", value: "8" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-green-50 p-6 rounded-lg shadow-md"
        >
          <div className="text-4xl mr-4">{item.icon}</div>
          <div>
            <h3 className="text-xl font-bold">{item.value}</h3>
            <p className="text-gray-700">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function HorizontalScrollableMetricsBar() {
  return (
    <div className="flex overflow-x-auto space-x-6 bg-green-100 p-4 rounded-lg shadow-md">
      {[
        { label: "Funds Raised", value: "Rs 1,200,000" },
        { label: "Beneficiaries", value: "540+" },
        { label: "Active Drives", value: "8" },
        { label: "Funds Raised", value: "Rs 1,200,000" },
        { label: "Beneficiaries", value: "540+" },
        { label: "Active Drives", value: "8" },
        { label: "Funds Raised", value: "Rs 1,200,000" },
        { label: "Beneficiaries", value: "540+" },
        { label: "Active Drives", value: "8" },
      ].map((item, index) => (
        <div
          key={index}
          className="min-w-[200px] p-4 bg-white rounded-lg shadow"
        >
          <h3 className="text-green-600 text-2xl font-bold">{item.value}</h3>
          <p className="text-gray-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function CircularProgressMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {[
        { label: "Funds Raised", value: "75%" },
        { label: "Beneficiaries", value: "65%" },
        { label: "Drives Completed", value: "80%" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-400"
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-gray-300" />
          </div>
          <h3 className="mt-4 text-2xl font-bold text-green-600">
            {item.value}
          </h3>
          <p className="text-gray-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

const BadgeMetrics = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {[
        { label: "Total Funds Raised", value: "Rs 1,200,000" },
        { label: "Beneficiaries", value: "540+" },
        { label: "Active Drives", value: "8" },
      ].map((item, index) => (
        <span
          key={index}
          className="bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow"
        >
          <strong>{item.value}</strong> {item.label}
        </span>
      ))}
    </div>
  );
};
const VerticalMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
      {[
        { icon: "💵", label: "Funds Raised", value: "Rs 1,200,000" },
        { icon: "👨‍👩‍👧‍👦", label: "Beneficiaries", value: "540+" },
        { icon: "📅", label: "Ongoing Drives", value: "8" },
        { icon: "💵", label: "Funds Raised", value: "Rs 1,200,000" },
        { icon: "👨‍👩‍👧‍👦", label: "Beneficiaries", value: "540+" },
        { icon: "📅", label: "Ongoing Drives", value: "8" },
      ].map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-2">{item.icon}</div>
          <h3 className="text-xl font-bold">{item.value}</h3>
          <p className="text-gray-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
const DonationTiers = () => {
  const tiers = [
    {
      name: "Bronze Donor",
      amount: "Up to Rs 10,000",
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      icon: "🟤", // Replace with actual icons if you have an icon library
    },
    {
      name: "Silver Donor",
      amount: "Up to Rs 50,000",
      color: "bg-gray-200",
      textColor: "text-gray-800",
      icon: "⚪",
    },
    {
      name: "Gold Donor",
      amount: "Above Rs 50,000",
      color: "bg-yellow-500",
      textColor: "text-white",
      icon: "🌟",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Donation Tiers</h2>
        <p className="text-gray-600">
          Recognizing our generous community contributions
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${tier.color}`}
          >
            <div className="text-4xl mb-4">{tier.icon}</div>
            <h3 className={`text-xl font-bold ${tier.textColor}`}>
              {tier.name}
            </h3>
            <p className={`mt-2 ${tier.textColor}`}>{tier.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AwarenessHero = () => (
  <section className="bg-chat-green py-16">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold text-theme-background">
        Together, We Can Change Lives!
      </h1>
      <p className="mt-4 text-lg text-theme-background">
        Join us in raising awareness and support for those in need. Every action
        matters.
      </p>
      <div className="mt-6">
        <button className="bg-theme-brown text-white px-6 py-3 rounded-md hover:bg-chat-brown">
          Learn More
        </button>
      </div>
    </div>
  </section>
);
const AwarenessHero2 = () => (
  <section className="bg-blue-100 py-16">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold text-blue-800">
        Together, We Can Change Lives!
      </h1>
      <p className="mt-4 text-lg text-blue-600">
        Join us in raising awareness and support for those in need. Every action
        matters.
      </p>
      <div className="mt-6">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

const AwarenessPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Together, We Can Change Lives!</h1>
        <p className="mt-4 text-lg">
          Join us in raising awareness and support for those in need. Every
          action matters.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-200">
          Learn More
        </button>
      </section>

      {/* About the Cause */}
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gray-100">
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700">
                "Thanks to your donations, we were able to provide medical aid
                to over 3,000 children in rural areas."
              </p>
              <span className="block mt-4 text-blue-900 font-semibold">
                - John Doe, Volunteer
              </span>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700">
                "With the community's support, we built shelters for families
                affected by floods in our region."
              </p>
              <span className="block mt-4 text-blue-900 font-semibold">
                - Jane Smith, Beneficiary
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">How You Can Help</h2>
        <p className="mt-4 text-lg">
          Whether through donations, volunteering, or spreading the word, you
          can make a difference.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-200">
            Donate Now
          </button>
          <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-200">
            Become a Volunteer
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
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
};

export default ChatHome;

import Hayyan from "/images/Hayyan.jpeg";
import Aown from "/images/Aown.jpg";
function Testimonials1() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Community Says
        </h2>
        <p className="text-gray-600 mt-2">
          Real stories from people we’ve helped
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 italic mb-4">
            "Volunteering with this community has been life-changing. I feel so
            connected!"
          </p>
          <div className="flex items-center gap-4">
            <img src={Aown} alt="Person 1" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-gray-800 font-semibold">Jane Doe</h4>
              <p className="text-sm text-gray-500">Volunteer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 italic mb-4">
            "They’ve made such a difference in my life. Thank you for
            everything!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={Hayyan}
              alt="Person 2"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-gray-800 font-semibold">John Smith</h4>
              <p className="text-sm text-gray-500">Community Member</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 italic mb-4">
            "A truly inspiring organization that’s transforming lives every
            day."
          </p>
          <div className="flex items-center gap-4">
            <img src={Aown} alt="Person 3" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-gray-800 font-semibold">Emma Wilson</h4>
              <p className="text-sm text-gray-500">Donor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials1;

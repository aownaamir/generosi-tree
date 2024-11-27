function Departments3() {
  return (
    <div className="grid grid-cols-3 gap-6 p-8 bg-yellow-50">
      <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="text-green-600 text-4xl mb-4">
          {/* <!-- Icon --> */}
          <i className="fas fa-hand-holding-heart"></i>
        </div>
        <h3 className="text-lg font-semibold text-green-700">Donations</h3>
      </div>
      <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="text-green-600 text-4xl mb-4">
          {/* <!-- Icon --> */}
          <i className="fas fa-file-alt"></i>
        </div>
        <h3 className="text-lg font-semibold text-green-700">Petitions</h3>
      </div>
      <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="text-green-600 text-4xl mb-4">
          {/* <!-- Icon --> */}
          <i className="fas fa-bullhorn"></i>
        </div>
        <h3 className="text-lg font-semibold text-green-700">Awareness</h3>
      </div>
      <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="text-green-600 text-4xl mb-4">
          {/* <!-- Icon --> */}
          <i className="fas fa-hands-helping"></i>
        </div>
        <h3 className="text-lg font-semibold text-green-700">
          Community Service
        </h3>
      </div>
      <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="text-green-600 text-4xl mb-4">
          {/* <!-- Icon --> */}
          <i className="fas fa-people-arrows"></i>
        </div>
        <h3 className="text-lg font-semibold text-green-700">Team Volunteer</h3>
      </div>
      <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="text-green-600 text-4xl mb-4">
          {/* <!-- Icon --> */}
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <h3 className="text-lg font-semibold text-green-700">Miscellaneous</h3>
      </div>
    </div>
  );
}

export default Departments3;

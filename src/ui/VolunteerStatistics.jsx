function VolunteerStatistics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-5xl mx-auto py-12">
      <div>
        <h3 className="text-4xl font-bold text-green-700">150+</h3>
        <p className="text-gray-600">Volunteers</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-green-700">5000+</h3>
        <p className="text-gray-600">Hours Contributed</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-green-700">50+</h3>
        <p className="text-gray-600">Projects Completed</p>
      </div>
    </div>
  );
}

export default VolunteerStatistics;

function Dept() {
  return (
    <div className="py-12 bg-[#FAF1E6]">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Our Departments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {/* Donations Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-5M11 3v18M11 3H6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Donations
          </h3>
        </div>

        {/* Petitions Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6M9 16h6M4 4h16v16H4V4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Petitions
          </h3>
        </div>

        {/* Awareness Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 2l4 4-4 4M6 2L2 6l4 4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Awareness
          </h3>
        </div>

        {/* Community Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4v4M7 8v12M3 12l4 4 4-4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Community Service
          </h3>
        </div>

        {/* Team Volunteer Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4V1m0 3h1v2h2m-2 2h1m-1 6h3m-3 6v2m4-2h2v2m-2 0v2m-1 0h-2V1M4 6h6v2H4V6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Team Volunteer
          </h3>
        </div>

        {/* Miscellaneous Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 4v16M9 4H3M9 4h6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Miscellaneous
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Dept;

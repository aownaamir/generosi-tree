function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 max-w-[1100px] mx-auto">
      <div className="h-[150px] col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 bg-[#fff] p-6 rounded-lg shadow-md">
        Project 1
      </div>
      <div className="h-[150px] col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 bg-[#fff] p-6 rounded-lg shadow-md">
        Project 2
      </div>
      <div className="h-[150px] col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 bg-[#fff] p-6 rounded-lg shadow-md">
        Project 3
      </div>
      <div className="h-[150px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 bg-[#fff] p-6 rounded-lg shadow-md">
        Project 4
      </div>
      <div className="h-[150px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 bg-[#fff] p-6 rounded-lg shadow-md">
        Project 5
      </div>
      <div className="h-[150px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 bg-[#fff] p-6 rounded-lg shadow-md">
        Project 6
      </div>
    </div>
  );
}

export default ProjectsGrid;

const departments = [
  {
    id: 0,
    name: "Donations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 1,
    name: "Petitions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 2,
    name: "Awareness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 3,
    name: "Community Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 4,
    name: "Team Volunteer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 5,
    name: "Team Volunteer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
];

function Departments() {
  return (
    <div className="my-10 flex justify-center items-center px-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-14">
        {departments.map((item) => (
          <div
            key={item.id}
            className="w-full h-[250px] lg:w-[300px] lg:h-[200px] flex flex-col gap-3 text-lg py-2 px-5 justify-center items-center border border-black rounded-xl"
          >
            <h1>{item.name}</h1>
            <p className="text-justify text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;

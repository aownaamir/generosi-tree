function DashboardButtons({ setSection }) {
  return (
    <div className="w-[240px] h-[80vh]">
      <ul className="flex flex-col gap-2">
        <li className="">
          <button
            onClick={() => setSection(0)}
            className="w-full h-16 border border-black rounded-lg"
          >
            My profile
          </button>
        </li>
        <li className="">
          <button
            onClick={() => setSection(1)}
            className="w-full h-16 border border-black rounded-lg"
          >
            My wallet
          </button>
        </li>
        <li className="">
          <button
            onClick={() => setSection(2)}
            className="w-full h-16 border border-black rounded-lg"
          >
            My petitions
          </button>
        </li>
        <li className="">
          <button
            onClick={() => setSection(3)}
            className="w-full h-16 border border-black rounded-lg"
          >
            My Donations
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DashboardButtons;

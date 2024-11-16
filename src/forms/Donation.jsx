function Donation() {
  return (
    <form action="" className="flex flex-col gap-7">
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-5 justify-center items-center">
        <div className="w-[180px] h-[58px] flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            First name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="w-[180px] h-[58px] flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            Last name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-5 justify-center items-center">
        <div className="w-[180px] h-[58px] flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            Email
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="w-[180px] h-[58px] flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            Phone
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-5 justify-center items-center">
        <div className="w-[180px] h-[58px] flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            Donation type
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="w-[180px] h-[58px] flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            Phone
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-5 justify-center items-center">
        <div className="w-[180px] h-[58px] flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            Amount
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="w-[180px] h-[58px] flex justify-center items-end">
          <button className="w-full h-10 border border-black">Donate</button>
        </div>
      </div>
    </form>
  );
}

export default Donation;

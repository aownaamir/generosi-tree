function TeamCard({ item }) {
  return (
    <div className="w-[260px] flex flex-col gap-3 justify-center items-center ">
      <div className="w-[260px] h-[260px] shadow-xl border border-black rounded-lg overflow-hidden">
        <img src={item.img} className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-slate-600 text-sm">{item.designation}</p>
      </div>
    </div>
  );
}

export default TeamCard;

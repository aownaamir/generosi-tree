function DocumentsForm({ setStep }) {
  return (
    <form action="" className="flex flex-col gap-7">
      <div className="flex flex-col gap-7 lg:gap-5 justify-center items-center">
        <div className="w-[200px] lg:w-[464px]  flex flex-col gap-2">
          <label className="text-[15px]" htmlFor="name">
            Explain your petition
          </label>
          <textarea
            type="text"
            id="name"
            name="name"
            required
            className="w-full h-[116px] text-sm bg-slate-200 border-b-2 border-black box-border focus:outline-none"
          />
        </div>
        <div className="w-[200px] lg:w-[464px] mt-[6px]  flex flex-col lg:flex-row gap-5 ">
          <div className="w-[200px] h-[58px] flex items-center gap-3">
            <p>Document 1 (required)</p>
            <input
              type="file"
              id="d1"
              name="name"
              required
              className="hidden"
            />
            <label
              htmlFor="d1"
              className="text-xs border border-black box-border w-32 h-8 flex justify-center items-center cursor-pointer"
            >
              Upload file
            </label>
          </div>
          <div className="w-[200px] h-[58px] flex items-center gap-3">
            <p>Document 2 (optional)</p>
            <input
              type="file"
              id="d2"
              name="name"
              required
              className="hidden"
            />
            <label
              htmlFor="d2"
              className="text-xs border border-black box-border w-32 h-8 flex justify-center items-center cursor-pointer"
            >
              Upload file
            </label>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="w-[200px] h-[58px] flex justify-center items-end">
          <button
            className="w-full h-10 border border-black box-border"
            onClick={() => setStep((pV) => pV - 1)}
          >
            Back
          </button>
        </div>
        <div className="w-[200px] h-[58px] flex justify-center items-end">
          <button className="w-full h-10 border border-black box-border">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default DocumentsForm;

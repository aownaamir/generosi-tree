function SignUpForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      className="w-full h-[300px] lg:w-[50%] lg:h-full border-t lg:border-t-0 lg:border-r border-black  flex flex-col gap-3 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-3 text-center font-bold text-2xl">Sign Up</h2>
      <input
        type="text"
        className="w-[200px] h-[35px] rounded-sm ring-0 bg-slate-200"
      />
      <input
        type="text"
        className="w-[200px] h-[35px] rounded-sm ring-0 bg-slate-200"
      />
      <p className="text-center text-slate-400 text-xs">
        Forgot your password?
      </p>
      <button className="w-[100px] h-[40px] rounded-full border border-black text-sm">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;

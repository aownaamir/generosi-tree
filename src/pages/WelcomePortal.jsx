function WelcomePortal({ isSignIn, setIsSignIn }) {
  return (
    <div className="w-full h-[300px] lg:w-[50%] px-5 lg:h-full flex flex-col justify-center items-center gap-3">
      <h1 className="mb-3 font-bold text-2xl">Welcome!</h1>

      <div className="h-[82px]">
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          sagittis id eros suscipit rutrum. Quisque semper et nisl et tempor.
        </p>
      </div>

      <p className="text-xs">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}
      </p>
      <button
        className="w-[100px] h-[40px] rounded-full border border-black text-sm"
        onClick={() => setIsSignIn((pV) => !pV)}
      >
        {isSignIn ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
}

export default WelcomePortal;

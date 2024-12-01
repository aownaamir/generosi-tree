function SignUpForm({ isLogIn, setIsLogIn }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <form className="mt-6 w-full max-w-sm">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        {isLogIn ? "Don't have an account?" : "Already have an account?"}
        <span
          onClick={() => setIsLogIn(!isLogIn)}
          className="ml-1 text-blue-500 cursor-pointer hover:underline"
        >
          {isLogIn ? "Sign Up" : "Sign In"}
        </span>
      </p>
    </div>
  );
}

export default SignUpForm;

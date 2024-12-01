function SignUpForm({ isLogIn, setIsLogIn }) {
  return (
    <form className="mt-6 w-full max-w-sm">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 mb-4 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-4 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full py-3 bg-chat-green text-white rounded-lg hover:bg-chat-greenH"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;

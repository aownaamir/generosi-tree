function SignInForm({ isLogIn, setIsLogIn }) {
  return (
    <form className="mt-6 w-full max-w-sm">
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
        Login
      </button>
    </form>
  );
}

export default SignInForm;

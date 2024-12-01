import { useState } from "react";
import SignInForm from "../forms/SignInForm";
import SignUpForm from "../forms/SignUpForm";

function AuthPage() {
  const [isLogIn, setIsLogIn] = useState(true);
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500">
        <h1 className="text-4xl font-bold text-white">Welcome!</h1>
        <p className="mt-4 text-white">
          Join us and experience the best service.
        </p>
      </div>
      {isLogIn ? (
        <SignInForm isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
      ) : (
        <SignUpForm isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
      )}
      {/* <p className="mt-4 text-sm text-center text-gray-600">
        {isLogIn ? "Don't have an account?" : "Already have an account?"}
        <span
          onClick={() => setIsLogIn(!isLogIn)}
          className="ml-1 text-yellow-500 cursor-pointer hover:underline"
        >
          {isLogIn ? "Sign Up" : "Sign In"}
        </span>
      </p> */}
    </div>
  );
}

export default AuthPage;

import { useState } from "react";
import SignInForm from "../forms/SignInForm";
import SignUpForm from "../forms/SignUpForm";

function AuthPage() {
  const [isLogIn, setIsLogIn] = useState(true);
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-b from-green-600 to-chat-green">
        <h1 className="text-4xl font-bold text-white">Welcome!</h1>
        <p className="mt-4 text-white">
          Join us and experience the best service.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white p-8">
        <h2 className="text-2xl font-bold">
          {isLogIn ? "Sign In" : "Sign Up"}
        </h2>
        {isLogIn ? <SignInForm /> : <SignUpForm />}
        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogIn ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogIn(!isLogIn)}
            className="ml-1 text-green-700 cursor-pointer hover:underline"
          >
            {isLogIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;

import { useState } from "react";
import SignInForm from "../ui/SignInForm";
import SignUpForm from "../ui/SignUpForm";
import WelcomePortal from "../ui/WelcomePortal";

function Portal() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="px-7 lg:px-10 pt-20 lg:pt-20 flex justify-center items-center">
      <div className="lg:hidden w-full lg:w-[800px] lg:h-[400px] border border-black flex flex-col lg:flex-row justify-center items-center">
        <WelcomePortal isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        {isSignIn ? <SignInForm /> : <SignUpForm />}
      </div>
      <div className="hidden lg:flex w-full lg:w-[800px] lg:h-[400px] border border-black flex-col lg:flex-row justify-center items-center">
        {isSignIn ? (
          <WelcomePortal isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        ) : (
          <SignUpForm />
        )}
        {isSignIn ? (
          <SignInForm />
        ) : (
          <WelcomePortal isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        )}
      </div>
    </div>
  );
}

export default Portal;

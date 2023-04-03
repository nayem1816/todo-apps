import React from "react";
import { Card } from "flowbite-react";
import LoginForm from "../components/LoginRegistration/LoginForm";
import FacebookLogin from "../components/LoginRegistration/FacebookLogin";
import GoogleLogin from "../components/LoginRegistration/GoogleLogin";

const Login = () => {
  return (
    <div className="max-w-xl my-10 container mx-auto px-2">
      <Card>
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <>
          <LoginForm />
        </>
        <div className="mt-4">
          <p className="text-center">Or</p>
          <div className="flex justify-center gap-4 mt-4">
            <FacebookLogin />
            <GoogleLogin />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;

import React from "react";
import { LoginForm } from "../_components/login-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>
      <LoginForm />
      <div className="flex items-center justify-between">
        <span className="border-t flex-grow mr-3"></span>
        <span className="text-xs text-gray-400">OR</span>
        <span className="border-t flex-grow ml-3"></span>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">
          New to our platform?
        </p>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/signup">Create an account</Link>
        </Button>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/forgot-password"
          className="underline underline-offset-4 hover:text-primary"
        >
          Forgot password?
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

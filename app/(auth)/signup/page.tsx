import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignUpForm } from "../_components/signup-form";

const SignUpPage = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Join our community
        </h1>
        <p className="text-sm text-muted-foreground">
          Create an account to get started
        </p>
      </div>
      <SignUpForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        By signing up, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">
          Already have an account?
        </p>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/signin">Sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;

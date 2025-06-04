"use client";
import React from "react";
import { CompanyHeader } from "../../components/signUp/CompanyHeader";
import { SignUpForm } from "../../components/signUp/SignUpForm";


function SignUpFormDesktop() {
  return (
    <main className="overflow-hidden pt-2.5 pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="w-[56%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0335d9c5194cd9196a1f8e995efc8ac06138b6a3?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            alt="Sign up illustration"
            className="object-contain grow w-full aspect-[0.78] max-md:mt-10 max-md:max-w-full"
          />
        </section>

        <section className="ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <CompanyHeader />
            <SignUpForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignUpFormDesktop;

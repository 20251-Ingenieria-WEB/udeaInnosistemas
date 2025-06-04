"use client";
import * as React from "react";
import { LoginHeader } from "./LoginHeader";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { LoginButton } from "./LoginButton";
import { RegistrationPrompt } from "./RegistrationPrompt";

function LoginFormDesktop() {
  return (
    <main className="flex overflow-hidden relative w-screen h-screen bg-white max-md:flex-col max-md:h-auto max-md:min-h-screen">
      <section className="relative shrink-0 h-screen left-[section] w-[756px] max-md:px-5 max-md:py-10 max-md:w-full max-md:h-auto max-md:min-h-screen max-sm:px-4 max-sm:py-5">
        <LoginHeader />

        <form className="absolute h-[368px] left-[84px] top-[380px] w-[518px] max-md:static max-md:mx-auto max-md:mt-0 max-md:mb-10 max-md:w-full max-md:max-w-[500px]">
          <EmailInput />
          <PasswordInput />
          <LoginButton />
        </form>

        <RegistrationPrompt />
      </section>

      <aside className="relative shrink-0 h-screen right-[section] w-[756px] max-md:hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/378b510a6128bc5f2135f1dbebd9569a169685a5?placeholderIfAbsent=true"
          alt=""
          className="block object-cover size-full"
        />
      </aside>
    </main>
  );
}

export default LoginFormDesktop;

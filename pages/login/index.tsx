"use client";
import * as React from "react";
import { LoginHeader } from "../../components/login/LoginHeader";
import { EmailInput } from "../../components/login/EmailInput";
import { PasswordInput } from "../../components/login/PasswordInput";
import { LoginButton } from "../../components/login/LoginButton";
import { RegistrationPrompt } from "../../components/login/RegistrationPrompt";

function LoginFormDesktop() {
  return (
    // Use flexbox to arrange content. min-h-screen ensures it takes full height.
    // md:justify-center and md:items-center can help center content on larger screens if needed.
    <main className="flex flex-col md:flex-row min-h-screen bg-white">
      {/*
        The main content section for the login form.
        On mobile (default), it takes full width.
        On medium screens and up (md:), it takes half the width (flex-1) or a specific max-width.
        Padding is added for spacing.
      */}
      <section className="flex flex-col justify-center items-center p-6 sm:p-10 md:w-1/2 lg:w-2/5 xl:w-1/3 min-h-[50vh] md:min-h-screen">
        <LoginHeader />

        {/*
          The form should be static and centered.
          Use a max-width to prevent it from becoming too wide on large screens.
          Adjust vertical margin (my-8) for spacing.
        */}
        <form className="w-full max-w-md my-8">
          <EmailInput />
          <PasswordInput />
          <LoginButton />
        </form>

        <RegistrationPrompt />
      </section>

      {/*
        The image section.
        It's hidden by default on small screens (hidden) and only shown on medium screens and up (md:block).
        It takes the remaining width on larger screens (flex-1) and ensures the image covers the area.
      */}
      <aside className="hidden md:block md:w-1/2 lg:w-3/5 xl:w-2/3 min-h-screen">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/378b510a6128bc5f2135f1dbebd9569a169685a5?placeholderIfAbsent=true"
          alt="Decorative background"
          className="object-cover w-full h-full"
        />
      </aside>
    </main>
  );
}

export default LoginFormDesktop;
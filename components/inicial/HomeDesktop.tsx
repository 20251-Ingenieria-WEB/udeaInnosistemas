"use client";
import * as React from "react";
import { Header } from "./Header";
import { ActionButtons } from "./ActionButtons";
import { Footer } from "./Footer";

export default function HomeDesktop() {
  return (
    <main className="flex overflow-hidden relative flex-col text-center min-h-[982px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31bfe3b99fe0ea79ca6de67a143bd5ca6b891f9c?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />

      <Header title="InnoSistemas" />

      <ActionButtons />

      <Footer
        tagline="De la idea al impacto. Todo empieza aquí."
        brandName="UdeA"
      />
    </main>
  );
}

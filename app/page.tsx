"use client";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="container mx-8 px-2 py-12 flex justify-center">
      <div className="prose dark:prose-h1:text-gray-50 flex flex-col">
        <h2>Unleash your Creativity with the power of</h2>
        {}
        <Chip
          color="success"
          variant="shadow"
          size="lg"
          className="text-2xl font-bold"
        >
          AI IMAGE GENERATOR
        </Chip>
      </div>
    </main>
  );
}

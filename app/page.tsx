"use client";
import ThemeToggle from "@/components/theme-toggle";
import { Button, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="container lg:mx-8 px-2 flex justify-center h-screen items-center">
      <div className=" flex flex-col gap-4 prose dark:prose-h1:text-gray-50 py-8">
        <h1 className="text-center">The All-In-One AI Creative Images</h1>
        <Button
          href="/replicate"
          as={Link}
          color="secondary"
          showAnchorIcon
          variant="solid"
        >
          Get Started
        </Button>
      </div>
    </main>
  );
}

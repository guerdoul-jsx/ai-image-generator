"use client";
import ThemeToggle from "@/components/theme-toggle";
import { Button, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="container mx-8 px-2 flex justify-center h-screen items-center">
      <div className="prose dark:prose-h1:text-gray-50 flex flex-col">
        <h1>The All-In-One AI Creative Images</h1>
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

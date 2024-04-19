import { ReplicateForm } from "@/components/forms/replicate-form";
import { Chip } from "@nextui-org/react";
import React from "react";

function ReplicatePage() {
  return (
    <main className="min-h-screen flex justify-center container px-3 mx-auto py-4">
      <div className="flex flex-col prose dark:prose-h1:text-gray-50 mt-8 w-full">
        <h1 className="text-center">Bring your creative vision to life</h1>{" "}
        <ReplicateForm />
      </div>
    </main>
  );
}

export default ReplicatePage;

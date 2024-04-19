"use client";

import { Chip } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function Chunk() {
  const { theme } = useTheme();

  return (
    <Chip
      color="warning"
      className="uppercase font-extrabold"
      size="sm"
      variant={theme === "light" ? "shadow" : "bordered"}
    >
      beta
    </Chip>
  );
}

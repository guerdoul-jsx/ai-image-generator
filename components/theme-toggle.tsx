"use client";

import { useTheme } from "next-themes";

import { Button, ButtonProps } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function ThemeToggle({ props }: { props?: ButtonProps }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-0"
      {...props}
    >
      {theme === "dark" ? <CiLight /> : <MdDarkMode />}
    </Button>
  );
}

"use client";

import { useTheme } from "next-themes";

import { ButtonProps, Switch } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Switch
        defaultSelected={false}
        size="md"
        color="secondary"
        endContent={<MoonIcon />}
        startContent={<SunIcon />}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      ></Switch>
    </>
  );
}

"use client";

import { useTheme } from "next-themes";

import { Button, ButtonProps, Switch } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";

export default function ThemeToggle({ props }: { props?: ButtonProps }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        endContent={<SunIcon />}
        startContent={<MoonIcon />}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      ></Switch>
    </>
  );
}

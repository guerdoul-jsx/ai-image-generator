"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { menuItems } from "./menu-items";
import ThemeToggle from "./theme-toggle";

import dynamic from "next/dynamic";

const Chunk = dynamic(() => import("@/components/chunk"), {
  ssr: false,
});

export function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl dark:text-gray-50">
          Ai Image Generator
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.href}-${index}`}>
            <Link
              color="foreground"
              className={item.icon ? "flex gap-x-2" : ""}
              href={item.href}
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Chunk />
        <ThemeToggle />
      </NavbarContent>
    </Navbar>
  );
}

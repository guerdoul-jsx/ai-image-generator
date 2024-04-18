"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { menuItems } from "./menu-items";
import ThemeToggle from "./theme-toggle";

export function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">Ai Image Generator</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem>
            <Link
              color="foreground"
              className={item.icon ? "flex gap-x-2" : ""}
              href={item.href}
              key={`${item.href}-${index}`}
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeToggle />
      </NavbarContent>
    </Navbar>
  );
}

import { MainNav } from "./main-nav";
import ThemeToggle from "./theme-toggle";
import { redirect } from "next/navigation";
// import ProfileMenu from "./profile-menu";

export async function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex item-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            {/* <ProfileMenu data={JSON.stringify(user)} /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

/** @format */

import Link from "next/link";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "@/app/components/ModeToggle";
import { Searchbox } from "@/app/components/Searchbox";

export default function Header() {
  return (
    <header className="sticks top-0 w-full border-b bg-[#007984] text-[#18D788]">
      <div className="h-14 container flex items-center">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & mobile */}
        <div className="flex justify-start flex-1 ml-3">
          <Searchbox />
        </div>
        <h1 className="flex items-center justify-end flex-1">
          <ModeToggle />
          <Link className="ml-2" href="/admin">
            Dashboard
          </Link>
        </h1>
      </div>
    </header>
  );
}

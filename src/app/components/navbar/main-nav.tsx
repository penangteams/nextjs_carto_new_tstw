/** @format */

import { Apple } from "lucide-react";
import Link from "next/link";

export default function MainNav() {
  return (
    <div className="hidden md:flex">
      <Link href="/">
        <Apple className="text-red-500" fill="#97d717" size={46} />
      </Link>
      <nav className="flex items-center gap-3 lg:gap-4 ml-8 ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}

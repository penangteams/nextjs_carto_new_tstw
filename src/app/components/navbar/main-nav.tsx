/** @format */
"use client";
import { Apple } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex">
      <Link href="/">
        <Apple className="text-red-500" fill="#97d717" size={46} />
      </Link>
      <nav className="flex items-center gap-3 lg:gap-4 ml-8 ">
        <Link
          className={`[&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
            pathname === "/" ? "active" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`[&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
            pathname === "/about" ? "active" : ""
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`[&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
            pathname === "/contact" ? "active" : ""
          }`}
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className={`[&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
            pathname === "/admin" ? "active" : ""
          }`}
          href="/admin"
        >
          Dashboard
        </Link>
      </nav>
    </div>
  );
}

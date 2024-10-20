/** @format */
"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { AlignJustify, Apple } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetTitle>
          <SheetDescription>
            <SheetContent
              side="left"
              className="bg-slate-700 text-green-200 mt-14"
            >
              <Link href="/">
                <Apple className="text-red-500" fill="#97d717" size={46} />
              </Link>
              <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
                <Link
                  className={`px-2 py-2 [&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
                    pathname === "/" ? "active" : ""
                  }`}
                  href="/"
                >
                  {" "}
                  Home
                </Link>
                <Link
                  className={`px-2 py-2 [&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
                    pathname === "/about" ? "active" : ""
                  }`}
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className={`px-2 py-2 [&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                  href="/contact"
                >
                  Contact
                </Link>
                <Link
                  className={`px-2 py-2 [&.active]:bg-orange-100 [&.active]:text-orange-600 [&.active]:rounded [&.active]:px-2 [&.active]:py-2 ${
                    pathname === "/admin" ? "active" : ""
                  }`}
                  href="/admin"
                >
                  Dashboard
                </Link>
              </nav>
            </SheetContent>
          </SheetDescription>
        </SheetTitle>
      </Sheet>
    </div>
  );
}

/** @format */

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

export default function MobileNav() {
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
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/admin">Dashboard</Link>
              </nav>
            </SheetContent>
          </SheetDescription>
        </SheetTitle>
      </Sheet>
    </div>
  );
}

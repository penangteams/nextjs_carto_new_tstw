/** @format */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const NavbarResp = () => {
  const [isOpen, setIsOpen] = useState(false);
  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[80px]",
        "md:top-[100px]",
        "bg-gray-800",
        "w-full",
        "p-8",
        "left-0",
        "gap-10",
        "flex-col",
        "overflow-hidden",
      ];
    } else {
      menuClasses.push("hidden", "md:flex");
    }
    return menuClasses.join(" ");
  }

  return (
    <nav className="bg-gray-800 text-white pb-10 pt-3 pr-6 pl-4">
      <div className="container flex mx-auto justify-between items-center sm:p-6 md:flex md:justify-between md:items-center">
        <a href="/" className="text-2xl font-bold">
          Penang Teams
        </a>
        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="mx-2 hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavbarResp;

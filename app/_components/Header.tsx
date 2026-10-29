"use client";

import Link from "next/link";
import Image from "next/image";
import Profile from "@/public/images/hp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "My Experience", href: "#my-experience" },
  { label: "Certificate", href: "#certificates" },
  { label: "About Me", href: "#about-me" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F8F8]/95 backdrop-blur-sm border-b border-[#e8e8e8] text-[#222222]">
      {/* Desktop Navigation */}
      <nav className="h-[5em] xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] mx-auto px-8 hidden md:flex items-center justify-center gap-12">
        <div className="kanit-font font-medium flex items-center gap-10 text-base lg:text-lg tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#222222] hover:text-[#7b7b7b] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="w-[2.5em] h-[2.5em] rounded-full bg-white shadow-md ring-1 ring-[#222222]/10 overflow-hidden shrink-0">
          <Image
            src={Profile}
            alt="Muhammad Adil Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </nav>

      {/* Mobile Bar */}
      <div className="h-[4.5em] md:hidden flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white shadow-sm ring-1 ring-[#222222]/10 overflow-hidden shrink-0">
            <Image
              src={Profile}
              alt="Muhammad Adil Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="kanit-font font-semibold text-base tracking-tight text-[#222222]">
            Muhammad Adil
          </span>
        </Link>

        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setOpen((prev) => !prev)}
          className="text-xl text-[#222222] p-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <ul
        className={`md:hidden bg-[#F8F8F8] border-b border-[#e0e0e0] shadow-lg absolute w-full left-0 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.href}
            className="border-t border-[#eaeaea] first:border-t-0"
          >
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="kanit-font block py-4 px-6 font-medium text-base text-[#222222] hover:bg-[#ededed] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

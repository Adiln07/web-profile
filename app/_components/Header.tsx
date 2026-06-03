"use client";
import Link from "next/link";
import Image from "next/image";
import Profile from "@/public/images/hp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#F8F8F8] h-[5em] md:flex items-center justify-center gap-15 hidden ">
        <div className="kanit-font font-semibold flex gap-10 text-lg">
          <Link href="/">Home</Link>
          <Link href="/">My Experience </Link>
          <Link href="/">Certificate</Link>
          <Link href="/">About Me</Link>
        </div>
        <div className="w-[2.5em] h-[2.5em] rounded-full bg-white shadow-xl overflow-hidden">
          <Image
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-[#F8F8F8] h-[5em] md:hidden flex  items-center justify-end pr-3   ">
        <div className=" text-2xl ">
          {open ? (
            <FontAwesomeIcon icon={faXmark} onClick={() => setOpen(false)} />
          ) : (
            <FontAwesomeIcon icon={faBars} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
      <ul
        className={`
        lg:hidden bg-[#f8f8f8] absolute w-full h-fit z-50 duration-500 ${
          open ? "left-0" : "-left-full"
        }
      `}
      >
        <li>
          <Link
            className=" bg-[#F8F8F8] py-7 px-3 inline-block  font-bold text-black"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className=" bg-[#F8F8F8] py-7 px-3 inline-block  font-bold text-black"
            href="/"
          >
            My Experience
          </Link>
        </li>
        <li>
          <Link
            className=" bg-[#F8F8F8] py-7 px-3 inline-block  font-bold text-black"
            href="/"
          >
            Certificate
          </Link>
        </li>
        <li>
          <Link
            className=" bg-[#F8F8F8] py-7 px-3 inline-block  font-bold text-black"
            href="/"
          >
            About me
          </Link>
        </li>
      </ul>
    </div>
  );
}

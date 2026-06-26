"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export function Card({ item }: { item: any }) {
  return (
    <div>
      <div className="bg-white w-[17em] m-auto rounded-xl shadow-xl h-[15em]">
        <div className="py-5 pl-5 text-[#222222] flex flex-col justify-center gap-y-4 ">
          <div className="h-[4.5em] w-[4.5em] object-cover">
            <Image
              src={item.logo}
              alt="Logo"
              width={500}
              height={500}
              className={`w-full h-full object-cover ${item.isRounded ? "rounded-full" : ""}`}
              loading="lazy"
            />
          </div>
          <div className="">
            <p className="kanit-font font-semibold tex-xl h-[3em]">
              {item.title}{" "}
            </p>
            <p className="roboto-font font-medium font-lg">{item.company} </p>
          </div>
          <div className="flex items-center gap-2 border w-fit px-2 py-.5 bg-[#222222]/10 rounded-full border-[#222222]">
            <Link
              href={item.certificate}
              target="_blank"
              className="roboto-font font-medium "
            >
              View Certificate
            </Link>
            <FontAwesomeIcon icon={faLink} />
          </div>
        </div>
      </div>
    </div>
  );
}

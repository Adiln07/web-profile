"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export interface CertificateItem {
  id: number;
  title: string;
  company: string;
  logo: string;
  certificate: string;
  isRounded: boolean;
}

export function Card({ item }: { item: CertificateItem }) {
  return (
    <div className="bg-white w-full rounded-2xl border border-[#e8e8e8] shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between min-h-[15.5em] text-[#222222]">
      <div>
        <div className="h-14 w-14 mb-4">
          <Image
            src={item.logo}
            alt={item.company}
            width={200}
            height={200}
            className={`w-full h-full object-contain ${
              item.isRounded ? "rounded-full object-cover" : ""
            }`}
            loading="lazy"
          />
        </div>

        <h3 className="kanit-font font-semibold text-lg leading-snug text-[#222222] line-clamp-2 min-h-[2.75em]">
          {item.title}
        </h3>
        <p className="roboto-font font-normal text-sm text-[#7b7b7b] mt-1">
          {item.company}
        </p>
      </div>

      <Link
        href={item.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border w-fit px-3.5 py-1.5 mt-5 bg-[#222222]/5 hover:bg-[#222222] text-[#222222] hover:text-white rounded-full border-[#222222] transition-colors duration-200 roboto-font text-xs font-medium"
      >
        <span>View Certificate</span>
        <FontAwesomeIcon icon={faLink} className="text-[11px]" />
      </Link>
    </div>
  );
}

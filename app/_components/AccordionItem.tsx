"use client";

import Image from "next/image";
import Link from "next/link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ExperienceItem {
  id: number;
  title: string;
  date: string;
  position: string;
  techStack: string[];
  image: string;
  description: string;
  url: string;
}

export function AccordionItem({
  item,
  activeId,
  setActiveId,
}: {
  item: ExperienceItem;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}) {
  const isExpanded = activeId === item.id;

  return (
    <div className="border-b-2 border-[#D0D0D2] py-6 transition-colors">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setActiveId(isExpanded ? null : item.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActiveId(isExpanded ? null : item.id);
          }
        }}
        className="grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-3 md:gap-4 cursor-pointer group"
      >
        {/* Title & Date */}
        <div className="md:col-span-5">
          <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold kanit-font text-[#222222] group-hover:text-[#555555] transition-colors leading-snug">
            {item.title}
          </h3>
          <p className="roboto-font text-xs md:text-sm font-medium text-[#7b7b7b] mt-0.5">
            {item.date}
            <span className="md:hidden"> • {item.position}</span>
          </p>
        </div>

        {/* Position (Aligned vertically across rows on desktop) */}
        <p className="md:col-span-4 roboto-font lg:text-base md:text-sm font-medium text-[#7b7b7b] hidden md:block">
          {item.position}
        </p>

        {/* Tech Stack Pills */}
        <div className="md:col-span-3 flex flex-wrap md:justify-end gap-1.5 roboto-font text-xs lg:text-sm font-medium">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border border-[#222222] px-3 py-1 transition-colors duration-200 ${
                isExpanded
                  ? "bg-[#222222] text-white"
                  : "bg-[#f8f8f8] text-[#222222] group-hover:bg-[#eaeaea]"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100 mt-6"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start pt-2 pb-2">
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#e5e5e5] shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="w-full h-auto block"
              />
            </div>

            <div className="w-full md:w-1/2 roboto-font flex flex-col justify-between">
              <p className="text-[#555555] xl:text-base lg:text-sm text-sm leading-relaxed">
                {item.description}
              </p>

              {item.url ? (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit bg-[#222222] hover:bg-[#3a3a3a] border border-[#222222] px-4 py-1.5 rounded-full text-white mt-6 transition-colors duration-200"
                >
                  <span className="font-medium text-xs lg:text-sm">
                    Go Website
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                </Link>
              ) : (
                <div
                  title="Website link is currently unavailable or internal"
                  className="inline-flex items-center gap-2 cursor-not-allowed w-fit bg-[#f8f8f8] border border-[#D0D0D2] px-4 py-1.5 rounded-full text-[#7b7b7b] mt-6"
                >
                  <span className="font-medium text-xs lg:text-sm">
                    Go Website
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

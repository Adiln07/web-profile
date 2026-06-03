"use client";

import Image from "next/image";
import Link from "next/link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCollapse } from "react-collapsed";

export function AccordionItem({
  item,
  activeId,
  setActiveId,
}: {
  item: any;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}) {
  const isExpanded = activeId === item.id;
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

  return (
    <div className="xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] m-auto my-5  px-3">
      <div
        className="flex justify-between items-center cursor-pointer mb-5 "
        {...getToggleProps({
          onClick: () => setActiveId(activeId === item.id ? null : item.id),
        })}
      >
        <div>
          <h1 className="lg:text-xl xl:text-2xl md:text-base text-xs w-[13em] font-bold kanit-font text-[#222222] xl:w-[20em]  md:w-[15em] ">
            {item.title}
          </h1>
          <p className="roboto-font lg:text-base md:text-sm font-bold text-[#7b7b7b] text-xs">
            {item.date}{" "}
          </p>
        </div>
        <p className="roboto-font lg:text-base md:text-sm font-bold text-[#7b7b7b] hidden md:block">
          {item.position}
        </p>
        <div
          className={`flex gap-1 roboto-font lg:text-sm text-xs ${isExpanded ? "text-white" : "text-[#222222]"} font-medium `}
        >
          <p
            className={` ${isExpanded ? "bg-[#222222]" : "bg-[#f8f8f8]"} rounded-full border border-[#222222] px-2 py-1`}
          >
            {item.techStack[0]}
          </p>
          <p
            className={` ${isExpanded ? "bg-[#222222]" : "bg-[#f8f8f8]"} rounded-full border border-[#222222] px-2 py-1`}
          >
            {item.techStack[1]}
          </p>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="md:flex gap-10 ">
          <div className="md:w-1/2 h-full rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt="Profile"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 h-full roboto-font">
            <p className="text-[#7b7b7b] xl:text-base lg:text-sm text-xs text-justify mt-3 md:mt-0">
              {item.description}
            </p>
            <Link
              href={item.url}
              target="_blank"
              className="flex items-center gap-2 cursor-pointer w-fit bg-[#222222] border border-[#222222] px-2 py-0.5 rounded-full  text-white mt-5"
            >
              <span className="font-medium lg:text-base text-xs ">
                Go Website
              </span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="lg:text-sm text-xs "
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`border-2 border-[#D0D0D2] ${isExpanded && "mt-5"}`}
      ></div>
    </div>
  );
}

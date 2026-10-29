"use client";

import { useEffect, useState } from "react";
import { AccordionItem, type ExperienceItem } from "./AccordionItem";

export function Accordion() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [data, setData] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/experiences");
        const result = await res.json();

        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="w-full h-full border-t-2 border-[#D0D0D2] xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] mx-auto px-6 md:px-8">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
}

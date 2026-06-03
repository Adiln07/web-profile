"use client";

import { useEffect, useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [data, setData] = useState([]);

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
    <div className=" w-full h-full">
      {data.map((item: any) => (
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

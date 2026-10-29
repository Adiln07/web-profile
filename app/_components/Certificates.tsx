"use client";

import { useState, useEffect } from "react";
import { Card, type CertificateItem } from "./Card";
import { Pagination } from "./Pagination";

export function Certificates() {
  const [data, setData] = useState<CertificateItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/certificates");
        const result = await res.json();

        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <section
      id="certificates"
      className="w-full bg-[#f8f8f8] text-[#222222] py-16 md:py-24"
    >
      <div className="xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="kanit-font font-bold text-4xl md:text-5xl tracking-tight text-[#222222]">
            Certificates
          </h2>
          <p className="roboto-font text-sm md:text-base text-[#7b7b7b] mt-2">
            Selected certifications and internship credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {currentPost.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <Pagination
          totalPost={data.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}

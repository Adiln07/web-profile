"use client";

import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

export function Certificates() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/certificates");
      const result = await res.json();

      setData(result);
    };

    getData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div id="certificates" className="w-full h-full bg-[#f8f8f8]">
      <div className=" xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em]   m-auto">
        <p className="kanit-font text-center font-bold text-5xl py-10">
          Certificate
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-5  pb-10 lg:w-[55em] m-auto ">
          {/* card */}
          {currentPost.map((item: any) => (
            <Card item={item} />
          ))}
        </div>
        <div>
          <Pagination
            totalPost={data.length}
            postsPerPage={postPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

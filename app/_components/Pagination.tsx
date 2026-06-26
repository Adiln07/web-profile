"use client";

export function Pagination({
  totalPost,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalPost: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  let pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pb-10">
      <div className=" flex justify-center gap-4">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`
        h-10 w-10 rounded-xl text-sm font-semibold transition-all duration-200
        ${
          currentPage === page
            ? "bg-slate-900 text-white shadow-md"
            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:shadow-md cursor-pointer"
        }
      `}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

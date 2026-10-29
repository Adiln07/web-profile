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
  const totalPages = Math.ceil(totalPost / postsPerPage);
  const pages: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <div className="pt-2">
      <div className="flex justify-center gap-3">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={`h-10 w-10 rounded-xl text-sm roboto-font font-semibold transition-all duration-200 ${
              currentPage === page
                ? "bg-[#222222] text-white shadow-sm"
                : "bg-white text-[#222222] border border-[#d0d0d0] hover:bg-[#eaeaea] cursor-pointer"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

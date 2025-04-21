// components/Pagination.tsx

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalResults,
  resultsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const maxVisiblePages = 5;

  const getPageNumbers = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 text-black border-[1px] cursor-pointer hover:bg-blue-400 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          {"<"}
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 text-black rounded-md flex items-center justify-center ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 text-black border-[1px] cursor-pointer hover:bg-blue-400 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          {">"}
        </button>
      </nav>
    </div>
  );
}

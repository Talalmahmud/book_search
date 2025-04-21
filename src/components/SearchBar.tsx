// components/SearchBar.tsx
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  disabled?: boolean;
}

export default function SearchBar({
  onSearch,
  disabled = false,
}: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex shadow-md rounded-lg overflow-hidden">
        <div className="relative flex-grow">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books by title, author, etc."
            className="w-full text-black p-4 pr-10 focus:outline-none border border-gray-300"
            aria-label="Search for books"
            disabled={disabled}
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              x
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 transition-colors cursor-pointer disabled:opacity-50"
          disabled={disabled || !query.trim()}
          aria-label="Submit search"
        >
          Search
        </button>
      </div>
    </form>
  );
}

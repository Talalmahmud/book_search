// app/page.tsx
"use client";
import { useState } from "react";
import { searchBooks } from "@/lib/api";
import { Book } from "@/types/book";
import LoadingSpinner from "@/components/LoadingSpinner";
import BookErrorMessage from "@/components/BookErrorMessage";
import BookList from "@/components/BookList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);
  const resultsPerPage = 10;

  const handleSearch = async (query: string, page: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      const { books: results, totalResults } = await searchBooks(query, page);
      setBooks(results);
      setTotalResults(totalResults);
      setCurrentPage(page);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setBooks([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Book Search
        </h1>

        <SearchBar
          onSearch={(query) => handleSearch(query, 1)}
          disabled={loading}
        />

        {loading && <LoadingSpinner />}

        {error && <BookErrorMessage message={error} />}

        <BookList books={books} loading={loading} />
      </div>
    </main>
  );
}

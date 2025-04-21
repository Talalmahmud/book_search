import { Book } from "@/types/book";
import BookCard from "./BookCard";

interface BookListProps {
  books: Book[];
  loading: boolean;
}

export default function BookList({ books, loading }: BookListProps) {
  if (loading) return null;

  if (books.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500" aria-live="polite">
        No books found. Try a different search term.
      </div>
    );
  }

  return (
    <div
      className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      aria-live="polite"
    >
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

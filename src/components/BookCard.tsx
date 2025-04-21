// components/BookCard.tsx
import { Book } from "@/types/book";
import Image from "next/image";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/no-cover.png";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="flex-grow flex">
        <div className="w-1/3 relative min-h-[180px]">
          <Image
            src={coverUrl}
            alt={`Cover of ${book.title}`}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className="w-2/3 p-4 flex flex-col">
          <h3 className="font-bold text-black text-lg mb-2 line-clamp-2">
            {book.title}
          </h3>
          {book.author_name && (
            <p className="text-gray-600 mb-1 line-clamp-2">
              by {book.author_name.join(", ")}
            </p>
          )}
          {book.first_publish_year && (
            <p className="text-gray-500 text-sm mt-auto">
              First published: {book.first_publish_year}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

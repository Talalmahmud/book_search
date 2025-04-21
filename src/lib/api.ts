// lib/api.ts
import { Book, BookSearchResult } from "@/types/book";

const API_BASE_URL = "https://openlibrary.org";
const RESULTS_PER_PAGE = 10;

export async function searchBooks(
  query: string,
  page: number = 1
): Promise<{ books: Book[]; totalResults: number }> {
  if (!query.trim()) {
    throw new Error("Search query cannot be empty");
  }

  try {
    const offset = (page - 1) * RESULTS_PER_PAGE;
    const response = await fetch(
      `${API_BASE_URL}/search.json?q=${encodeURIComponent(
        query
      )}&fields=title,author_name,first_publish_year,cover_i,key&limit=${RESULTS_PER_PAGE}&offset=${offset}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: BookSearchResult = await response.json();
    return {
      books: data.docs || [],
      totalResults: data.numFound || 0,
    };
  } catch (error) {
    console.error("Error searching books:", error);
    throw new Error("Failed to fetch books. Please try again later.");
  }
}

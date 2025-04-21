export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}
export interface BookSearchResult {
  docs: Book[];
  numFound: number;
  start: number;
}

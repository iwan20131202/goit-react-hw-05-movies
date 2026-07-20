import { Link } from "react-router-dom";

const books = [
  { id: "e3q76gm9lzk", title: "Clean Code" },
  { id: "a1b2c3d4e5f", title: "React Fundamentals" },
  { id: "z9y8x7w6v5u", title: "Eloquent JavaScript" },
];

export const Catalog = () => {
  return (
    <div>
      <h1>Каталог книг</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {/* относительная ссылка: catalog + /:bookId */}
            <Link to={`/catalog/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

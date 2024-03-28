import Book from "../Book/Book";

import { useEffect, useState } from "react";

const BookSection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('books.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return(
    <div className="mt-24">
        <div className="text-center mb-10">
            <h2 className="font-bold text-4xl">Books</h2>
        </div>
    <div className="grid lg:grid-cols-3 gap-6">
      {
        books.map(book => <Book book={book} key={book.bookId}></Book>)
      }
    </div>
    </div>
  )
};

export default BookSection;

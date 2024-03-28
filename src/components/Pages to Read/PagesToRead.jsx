import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { getStoredReadedBooks } from "../../Utility/LocalStorage";

const PagesToRead = () => {
 

  const books = useLoaderData();
  // console.log(books);
  const [readListedBooks, setReadListedBooks] = useState([]);
 

  useEffect(() => {
    const storedBookIds = getStoredReadedBooks();
    if (books.length > 0) {
      const readedBooks = [];
      for (const bookId of storedBookIds) {
        // console.log(books);
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          readedBooks.push(book);
        }
        // console.log(readedBooks)
        setReadListedBooks(readedBooks);
      }
    }
  }, [books]);

  const { bookName, totalPages } = readListedBooks;
  console.log(bookName, totalPages)



  return (
    <div className="container mx-auto mt-9 py-28 px-24">
      <BarChart width={1000} height={400} data={readListedBooks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"bookName"}></XAxis>
        <YAxis dataKey={""}></YAxis>
        <Bar dataKey={"totalPages"} fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default PagesToRead;

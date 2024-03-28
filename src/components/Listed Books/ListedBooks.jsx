import { GoChevronDown } from "react-icons/go";
import BooksThatListed from "../Books That Listed/BooksThatListed";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getStoredReadedBooks,
  getStoredWishlistBooks,
} from "../../Utility/LocalStorage";
import BooksThatWishisted from "../Books That Wishisted/BooksThatWishisted";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readListedBooks, setReadListedBooks] = useState([]);
  const [readWishlistedBooks, setReadWishlistedBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredReadedBooks();
    if (books.length > 0) {
      const readedBooks = [];
      for (const bookId of storedBookIds) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          readedBooks.push(book);
        }
        // console.log(readedBooks)
        setReadListedBooks(readedBooks);
      }
    }
  }, []);
  useEffect(() => {
    const storedWishBookIds = getStoredWishlistBooks();
    if (books.length > 0) {
      const wishedBooks = [];
      for (const bookId of storedWishBookIds) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          wishedBooks.push(book);
        }
        // console.log(readedBooks)
        setReadWishlistedBooks(wishedBooks);
      }
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mt-9 bg-[#1313130D] h-24 flex items-center justify-center rounded-2xl mb-8">
        <h2>Books</h2>
      </div>
      <div className="flex justify-center">
        <button className="btn mb-14">
          Short By
          <GoChevronDown className="text-xl" />
        </button>
      </div>
      <div className="flex">
        <h1 className="p-4 border-t border-x">Read Books</h1>
        <h1 className="p-4 border-b">Wishlist Books</h1>
        <p className="border-b grow"></p>
      </div>
      <div className="mt-2">
        {readListedBooks.map((book) => (
          <BooksThatListed 
          key={book.bookId} 
          book={book}></BooksThatListed>
        ))}
      </div>
      <div className="mt-2">
        {readWishlistedBooks.map((book) => (
          <BooksThatWishisted
            key={book.bookId}
            book={book}
          ></BooksThatWishisted>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;

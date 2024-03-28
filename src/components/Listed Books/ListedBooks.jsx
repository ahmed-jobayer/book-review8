import { GoChevronDown } from "react-icons/go";
import BooksThatListed from "../Books That Listed/BooksThatListed";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredReadedBooks,
  getStoredWishlistBooks,
} from "../../Utility/LocalStorage";
import BooksThatWishisted from "../Books That Wishisted/BooksThatWishisted";

const ListedBooks = () => {
  const books = useLoaderData();
  // console.log(books);
  const [readListedBooks, setReadListedBooks] = useState([]);
  const [readWishlistedBooks, setReadWishlistedBooks] = useState([]);

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
  useEffect(() => {
    const storedWishBookIds = getStoredWishlistBooks();
    if (books.length > 0) {
      const wishedBooks = [];
      for (const bookId of storedWishBookIds) {
        console.log(books);
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          wishedBooks.push(book);
        }
        // console.log(readedBooks)
        setReadWishlistedBooks(wishedBooks);
      }
    }
  }, [books]);

  return (
    <div className="container mx-auto">
      <div className="mt-9 bg-[#1313130D] h-24 flex items-center justify-center rounded-2xl mb-8">
        <h2 className="font-bold text-3xl">Books</h2>
      </div>

      <div className="flex justify-center">
        <details className="dropdown mb-14">
          <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <GoChevronDown className="text-xl" /></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-2">
            {readListedBooks.map((book) => (
              <BooksThatListed key={book.bookId} book={book}></BooksThatListed>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-2">
            {readWishlistedBooks.map((book) => (
              <BooksThatWishisted
                key={book.bookId}
                book={book}
              ></BooksThatWishisted>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

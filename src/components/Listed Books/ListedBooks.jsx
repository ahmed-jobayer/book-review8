import { GoChevronDown } from "react-icons/go";
import BooksThatListed from "../Books That Listed/BooksThatListed";

const ListedBooks = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-9 bg-[#1313130D] h-24 flex items-center justify-center rounded-2xl mb-8">
                <h2>Books</h2>
            </div>
            <div className="flex justify-center">
                <button className="btn mb-14">Short By<GoChevronDown className="text-xl" /></button>
            </div>
            <div className="flex">
                <h1 className="p-4 border-t border-x">
                Read Books
                </h1>
                <h1 className="p-4 border-b">
                Wishlist Books
                </h1>
                <p className="border-b grow"></p>
            </div>
            <div className="mt-2">
                <BooksThatListed></BooksThatListed>
            </div>
        </div>
    );
}; 

export default ListedBooks;
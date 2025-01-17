import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredReadedBooks,
  getStoredWishlistBooks,
  saveReadedBooks,
  saveWishlistBooks,
} from "../../Utility/LocalStorage";


const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const intBookId = parseInt(bookId);
  const book = books.find((book) => book.bookId === intBookId);
  //   console.log(book);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleAddToReadList = () => {
    const storedBookIds = getStoredReadedBooks();

    if (storedBookIds.includes(intBookId)) {
      toast.warn("This Book is already in your Reading List");
    } else {
      saveReadedBooks(intBookId);
      toast.success("This Book is added to your Reading List");
    }
  };
  

  const handleAddToWishlist = () => {
    const storedBookIds = getStoredReadedBooks();
    const storedWishBookIds = getStoredWishlistBooks();
    if (storedBookIds.includes(intBookId)) {
      toast.warn("This Book Is in Your Reading List, Now You Can't Add This to your Wishlist");
    }else if (storedWishBookIds.includes(intBookId) ) {
      toast.warn("This Book is already in your Wishlist");
    } else {
      saveWishlistBooks(intBookId);
    toast.success("This Book Is Added to Your Wishlist");
    }
  };

  return (
    <div className="container mx-auto my-16 lg:flex ">
      <div className="w-full bg-[#1313130D] flex items-center justify-center rounded-2xl">
        <img src={image} alt="" />
      </div>
      <div className="w-full pl-12">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="my-5 text-xl font-medium text-[#131313CC]">By : {author}</p>
        <p className="py-4 border-y text-xl font-medium text-[#131313CC]">{category}</p>
        <p className="my-6"><span className="font-bold">Review</span> : {review}</p>
        <p className="pb-6 mt-6 border-b font-bold">
          Tag <span className="ml-8 font-medium text-[#23BE0A]">#{tags[0]}</span>{" "}
          <span className="ml-11 font-medium text-[#23BE0A]">#{tags[1]}</span>
        </p>
        <div className="overflow-x-auto">
          <table className="table mt-6">
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="text-[#131313CC]">Number of Pages:</td>
                <td className="font-semibold">{totalPages}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td className="text-[#131313CC]">Publisher:</td>
                <td className="font-semibold">{publisher}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td className="text-[#131313CC]">Year of Publishing:</td>
                <td className="font-semibold">{yearOfPublishing}</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td className="text-[#131313CC]">Rating:</td>
                <td className="font-semibold">{rating}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleAddToReadList} className="btn bg-white mr-4 border">
            Read
          </button>
          <button onClick={handleAddToWishlist} className="btn bg-[#50B1C9] text-white">
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;

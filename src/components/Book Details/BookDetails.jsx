import { useLoaderData, useParams } from "react-router-dom";

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

  return (
    <div className="container mx-auto my-16 lg:flex ">
      <div className="w-full bg-[#1313130D] flex items-center justify-center rounded-2xl">
        <img src={image} alt="" />
      </div>
      <div className="w-full pl-12">
        <h2>{bookName}</h2>
        <p className="my-5">By : {author}</p>
        <p className="py-4 border-y">{category}</p>
        <p className="my-6">Review : {review}</p>
        <p className="pb-6 mt-6 border-b">
          Tag <span className="ml-8 ">#{tags[0]}</span>{" "}
          <span className="ml-11 ">#{tags[1]}</span>
        </p>
        <div className="overflow-x-auto">
          <table className="table mt-6">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Number of Pages:</td>
                <td>{totalPages}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Publisher:</td>
                <td>{publisher}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Year of Publishing:</td>
                <td>{yearOfPublishing}</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>Rating:</td>
                <td>{rating}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn mr-4">Read</button>
          <button className="btn">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

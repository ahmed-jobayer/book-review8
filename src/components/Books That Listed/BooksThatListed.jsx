import { CiLocationOn } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { GiPapers } from "react-icons/gi";
import { Link } from "react-router-dom";
const BooksThatListed = ({book}) => {
    const {
        bookId,
        image,
        bookName,
        author,
        tags,
        yearOfPublishing,
        publisher,
        totalPages,
        rating
      } = book;
    //   console.log(book)
  return (
    <div className="card lg:card-side bg-base-100 p-6 border my-6">
      <div className=" rounded-2xl py-7 px-12 border flex justify-center items-center">
        <img className="h-40" src={image} alt="Album" />
      </div>
      <div className=" pl-6 flex flex-col gap-4">
        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <div className="flex gap-5">
          <p>
            <span className="mr-4">Tag</span> 
            <span className="mr-3">#{tags[0]}</span>
            <span>#{tags[1]}</span>
          </p>
          <p>
            <CiLocationOn className="inline mr-3" />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex">
          <p>
            <IoMdPeople className="inline mr-2" />
            Publisher: {publisher}
          </p>
          <p className="ml-5">
            <GiPapers className="inline mr-2" />
            Page {totalPages}
          </p>
        </div>
        <div className="flex gap-3 py-4 border-t items-center">
          <p>Category: Classic</p>
          <p>Rating: {rating}</p>
          <Link to={`/bookDetails/${bookId}`}>
          <button className="btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksThatListed;

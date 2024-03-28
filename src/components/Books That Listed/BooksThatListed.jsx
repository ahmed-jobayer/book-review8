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
        rating,
        category
      } = book;
    //   console.log(book
  return (
    <div className="card lg:card-side bg-base-100 p-6 border my-6">
      <div className=" rounded-2xl py-7 px-12 border flex justify-center items-center">
        <img className="h-40" src={image} alt="Album" />
      </div>
      <div className=" pl-6 flex flex-col gap-4">
        <h2 className="card-title font-bold text-2xl">{bookName}</h2>
        <p className="font-medium text-[#131313CC]">By : {author}</p>
        <div className="flex gap-5">
          <p>
            <span className="mr-4 font-bold">Tag</span> 
            <span className="mr-3 font-medium text-[#23BE0A]">#{tags[0]}</span>
            <span className="font-medium text-[#23BE0A]">#{tags[1]}</span>
          </p>
          <p className="text-[#131313CC]">
            <CiLocationOn className="inline mr-3" />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex text-[#131313CC]">
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
          <p className="text-[#328EFF] bg-[#328EFF26] p-2 rounded-[30px]">Category: {category}</p>
          <p className="p-2 rounded-[30px] text-[#FFAC33] bg-[#FFAC3326]">Rating: {rating}</p>
          <Link className="p-2 rounded-[30px] bg-[#23BE0A] text-white" to={`/bookDetails/${bookId}`}>
           View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksThatListed;

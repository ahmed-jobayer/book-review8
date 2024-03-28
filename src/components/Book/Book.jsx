import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, tags, author, category, rating, bookId } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card p-6 border">
        <figure>
          <img src={image} alt={bookName} />
        </figure>
        <div className="flex gap-11 mt-8 font-medium text-[#23BE0A] ">
          <p>#{tags[0]}</p>
          <p>#{tags[1]}</p>
        </div>
        <h2 className="my-4 font-bold text-2xl">{bookName}</h2>
        <p className="mb-5 text-[#131313CC] font-medium">By : {author}</p>
        <div className="flex justify-between pt-5 border-t border-dashed text-[#131313CC] font-medium">
          <p>{category}</p>
          <p className="flex items-center gap-2">
            {rating}
            <CiStar />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;

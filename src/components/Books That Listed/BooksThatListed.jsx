import { CiLocationOn } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { GiPapers } from "react-icons/gi";
const BooksThatListed = () => {
  return (
    <div className="card lg:card-side bg-base-100 p-6 border my-6">
      <div className=" rounded-2xl py-7 px-12 border flex justify-center items-center">
        <img className="h-40" src="https://imgur.com/q1O6nEu.png" alt="Album" />
      </div>
      <div className=" pl-6 flex flex-col gap-4">
        <h2 className="card-title">New album is released!</h2>
        <p>By : Awlad Hossain</p>
        <div className="flex gap-5">
          <p>
            <span className="mr-4">Tag</span> <span className="mr-3"></span>
            <span></span>
          </p>
          <p>
            <CiLocationOn className="inline mr-3" />
            Year of Publishing: 1924
          </p>
        </div>
        <div className="flex">
          <p>
            <IoMdPeople className="inline mr-2" />
            Publisher: Scribner
          </p>
          <p className="ml-5">
            <GiPapers className="inline mr-2" />
            Page 192
          </p>
        </div>
        <div className="flex gap-3 py-4 border-t">
          <p>Category: Classic</p>
          <p>Rating: 4.5</p>
          <p>View Details</p>
        </div>
      </div>
    </div>
  );
};

export default BooksThatListed;

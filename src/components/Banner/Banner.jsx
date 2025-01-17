import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero  bg-base-200  p-28 mt-12">
      <div className="hero-content flex-col lg:flex-row justify-between w-full ">
        <div className="">
          <h1 className="text-[56px] font-bold mb-12 playfair-display">Books to freshen <br /> up your bookshelf</h1>
          <Link to='/listedBooks' className="btn font-bold text-xl btn-primary bg-[#23BE0A] border-none text-white ">View The List</Link>
        </div>
        <img
          src="https://imgur.com/q1O6nEu.png"
          className="max-w-sm rounded-lg shadow-4xl"
        />
      </div>
    </div>
  );
};

export default Banner;

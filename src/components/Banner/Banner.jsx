import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero  bg-base-200 container mx-auto p-28 mt-12">
      <div className="hero-content flex-col lg:flex-row justify-between w-full ">
        <div className="">
          <h1 className="text-5xl font-bold mb-12">Books to freshen <br /> up your bookshelf</h1>
          <Link to='/listedBooks' className="btn btn-primary ">View The List</Link>
        </div>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;

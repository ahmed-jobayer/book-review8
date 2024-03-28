import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {
 
  const links = (
    <>
      <li className="text-[#23BE0A] border border-[#23BE0A] rounded-2xl"><NavLink to="/">Home</NavLink></li>
      <li className="mx-4 text-[#23BE0A] border border-[#23BE0A] rounded-2xl"><NavLink to="/listedBooks">Listed Books</NavLink></li>
      <li className="text-[#23BE0A] border border-[#23BE0A] rounded-2xl"><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <RiMenu2Line />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">{links}</ul>
        </div>
        <Link className="text-xl work-sans"> Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-4 bg-[#23BE0A] ">Sign In</a>
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;

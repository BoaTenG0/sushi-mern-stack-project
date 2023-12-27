// import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/LOGO.png";
// import { IoMdBasket, IoIosSearch } from "react-icons/io";
// import { LuPhoneCall } from "react-icons/lu";
// const Links = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "Menu",
//     path: "/menu",
//   },
//   {
//     name: "About Us",
//     path: "/about",
//   },
//   {
//     name: "Services",
//     path: "/services",
//   },
// ];
// const Navbar = () => {
//   return (
//     <nav className='container mx-auto flex justify-around font-krona items-center text-black dark:text-white'>
//       <NavLink to='/'>
//         <img src={logo} alt='sushi logo' className='w-1/2' />
//       </NavLink>
//       <div className='flex items-end'>
//         {Links.map((link, index) => (
//           <NavLink to={link.path} key={index} className='mr-4 text-sm '>
//             {link.name}
//           </NavLink>
//         ))}
//       </div>
//       <div className='flex gap-5'>
//         <IoMdBasket />
//         <IoIosSearch />
//       </div>
//       <NavLink className='bg-green-500 px-2 py-1.5 rounded-xl text-center inline-flex hover:scale-75 hover:shadow-2xl hover:rounded-2xl transition delay-75 duration-300 ease-in-out'>
//         <LuPhoneCall className='mr-2 mt-1' /> Contact
//       </NavLink>
//     </nav>
//   );
// };
// export default Navbar;

// import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/LOGO.png";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink } from "react-router-dom";
const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
];
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <details>
          <summary>
            <NavLink to='/menu'>Menu</NavLink>
          </summary>
          <ul className='p-2'>
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <NavLink to='/services'>Services</NavLink>
          </summary>
          <ul className='p-2'>
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to='/offers'>Offers</NavLink>
      </li>
    </>
  );
  return (
    <header className='container mx-auto max-w-screen-2xl font-base fixed top-0 right-0 left-0 transition-all duration-300 ease-in-out'>
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItems}
            </ul>
          </div>
          <NavLink>
            <img src={logo} alt='sushi logo' className=' lg:w-1/3' />
          </NavLink>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navItems}</ul>
        </div>
        <div className='navbar-end'>
          <button className='btn btn-ghost btn-circle hidden lg:flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle mr-3 hidden lg:flex'
          >
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>8</span>
            </div>
          </div>
          <NavLink className='h-7 w-28 flex items-center justify-center gap-2 py-4 bg-customGreen text-white rounded-full lg:btn lg:bg-customGreen lg:w-32 lg:rounded-full lg:text-white'>
            <LuPhoneCall /> Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

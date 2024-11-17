import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="nav absolute top-0 z-10 flex w-full justify-start font-poppins sm:px-10 md:justify-center lg:px-20">
      <div className="text-light-50 px-2 py-2 md:hidden">
        {!isOpen ? (
          <RiMenu2Fill onClick={() => setIsOpen(true)} className="h-8 w-8" />
        ) : (
          <MdClose onClick={() => setIsOpen(false)} className="h-8 w-8" />
        )}
      </div>
      <ul
        className={`mr-10 mt-2 w-full bg-dark-200 sm:rounded-none sm:bg-light-100  rounded-lg font-semibold text-white sm:m-0 md:flex md:justify-center md:border-b-2 md:border-dark-200 md:gap-5 lg:gap-0 md:py-2 md:text-dark-200 ${isOpen ? "py-2" : "hidden"}`}
      >
        <div className="flex flex-col items-center gap-2 md:w-1/4 md:flex-row md:justify-end md:gap-5">
          <li>
            <Link
              to="#About"
              className="hover:border-b hover:border-dark-50 hover:text-dark-50/80"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#Gallery"
              className="hover:border-b hover:border-dark-50 hover:text-dark-50/80"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="#Awwards"
              className="hover:border-b hover:border-dark-50 hover:text-dark-50/80"
            >
              Awwards
            </Link>
          </li>
        </div>
        <div className="hidden text-dark-50 lg:block md:grow md:text-center md:text-xl">
          <Link to="/">
            <h1>Teknik Informatika Uika</h1>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 md:w-1/4 md:flex-row md:gap-5">
          <li>
            <Link
              to="#Organization"
              className="hover:border-b hover:border-dark-50 hover:text-dark-50/80"
            >
              Organization
            </Link>
          </li>
          <li>
            <Link
              to="#Event"
              className="hover:border-b hover:border-dark-50 hover:text-dark-50/80"
            >
              Event
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

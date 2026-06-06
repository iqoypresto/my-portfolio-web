import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-white/60 backdrop-blur-xl text-gray-600 text-[16px] sticky top-0 w-full z-50 shadow-sm">
      <nav className="flex justify-center">
        <div className="flex justify-between items-center max-w-7xl w-full">
          <a href="/#home" className="h-17 w-38" >
            <img src="./logo.png" className="h-full w-full object-cover" alt="" />
          </a>

          <div className="flex">
            <div className="lg:flex hidden">
              <a href="/#about" className="p-5">
                About
              </a>
              <a href="/#work" className="p-5">
                Work
              </a>
              <a href="/#testimonials" className="p-5">
                Testimonials
              </a>
              <a href="/#contact" className="p-5">
                Contact
              </a>
            </div>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="p-5 lg:hidden relative w-5 h-5"
            >
              <RxHamburgerMenu
                className={`absolute inset-0 m-auto transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}
              />
              <IoClose
                className={`absolute inset-0 m-auto transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-0 scale-75"}`}
              />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`shadow-md absolute bg-white w-full transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col">
          <a href="/#about" className="p-5">
            About
          </a>
          <a href="/#work" className="p-5">
            Work
          </a>
          <a href="/#testimonials" className="p-5">
            Testimonials
          </a>
          <a href="/#contact" className="p-5">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  let [categories, setCategories] = useState(false);
  const handleClick = (e) => {
    setCategories(!categories);
    e.preventDefault();
  };
  return (
    <div className="shadow-md bg-slate-700 w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 text-orange-300 mr-1 pt-2">
          e-commerce
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {/* <ion-icon name="menu"></ion-icon> */}
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex header-menu md:items-center md:pb-0 pb-12 absolute md:static bg-slate-700 md:z-auto z-[-1] left-0  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px] "
          } `}
        >
          {/* {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 md:my-0 my-7">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))} */}
          <li className="md:ml-8 md:my-0 my-7">
            <a
              href="/"
              className="text-gray-200 hover:text-gray-400 duration-500"
            >
              Home
            </a>
          </li>
          <button onClick={handleClick}>
            <li className="md:ml-8 md:my-0">
              <a className="text-gray-200 hover:text-gray-400 duration-500">
                Categories
              </a>
              {categories && (
                <div
                  className="origin-top-right absolute mt-2 mr:8 w-56 p-5 bg-slate-700 rounded-md shadow"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <li className="md:my-4 my-4">
                      <a
                        href="/"
                        className="text-gray-200 hover:text-gray-400 duration-500"
                      >
                        Fish
                      </a>
                    </li>
                    <li className="md:my-4 my-4">
                      <a
                        href="https://www.mehedialam.netlify.app"
                        className="text-gray-200 hover:text-gray-400 duration-500"
                      >
                        Chicken
                      </a>
                    </li>
                    <li className="md:my-4">
                      <a
                        href="/"
                        className="text-gray-200 hover:text-gray-400 duration-500"
                      >
                        Meat
                      </a>
                    </li>
                  </div>
                </div>
              )}
            </li>
          </button>
          <li className="md:ml-8 md:my-0 my-7">
            <a
              href="/"
              className="text-gray-200 hover:text-gray-400 duration-500"
            >
              About
            </a>
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <a
              href="/"
              className="text-gray-200 hover:text-gray-400 duration-500"
            >
              Contact
            </a>
          </li>
          <button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

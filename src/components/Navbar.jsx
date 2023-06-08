import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";


const Navbar = () => {
  const router = useRouter();
  let Links = [
    { name: "Blogs", link: "/blog/blogmain" },
    { name: "Newsletters", link: "/newsletter" },
    { name: "Projects", link: "#" },
    { name: "Gallery", link: "/gallery" },
    { name: "Team", link: "#" },
    { name: "Contact Us", link: "#" },
  ];
  // sticky top-0 w-full flex items-center justify-between flex-wrap bg-white p-6
  let [open, setOpen] = useState(false);
  return (
    <nav className="fixed z-10 shadow-md top-0 w-full flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-y mr-6 md:flex md:px-10 ">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute z-20 right-8 top-6 cursor-pointer md:hidden"
        >
          <svg
            className={open ? "close" : "menu"}
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"
              fill="#373737"
            />
          </svg>
        </div>
        <span className="font-semibold text-3xl text-black tracking-tight">
          Assets
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow font-mono flex justify-end">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link 
                  href={link.link}
                  className="w-50 inline-block rounded-full  py-2 px-4 bg-white text-black hover:bg-yellow hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav class="flex items-center justify-between flex-wrap bg-slate-950 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Assets</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow font-mono">
          <ul class="flex ">
            <li class="mr-3">
              <a
                class="inline-block border border-slate-950 rounded py-2 px-4 bg-slate-950 hover:bg-amber-300 text-white"
                href="#"
              >
                Blogs
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block border border-slate-950 rounded py-2 px-4 bg-slate-950 hover:bg-amber-300 text-white"
                href="#"
              >
                Newsletter
              </a>
            </li>
            <li class="mr-3">
              <div>
                <button className="peer px-5 py-2 bg-slate-950 rounded hover:bg-amber-300 text-white">
                  Projects
                </button>
                {/* the menu here */}
                <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-slate-950 drop-shadow-lg">
                  <a className="px-5 py-3 hover:bg-amber-300" href="#">
                    Project1
                  </a>
                  <a className="px-5 py-3 hover:bg-amber-300" href="#">
                    PROJECT2
                  </a>
                </div>
              </div>
            </li>
            <li class="mr-3">
              <a
                class="inline-block border border-slate-950 rounded py-2 px-4 bg-slate-950 hover:bg-amber-300 text-white"
                href="#"
              >
                Gallery
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block border border-slate-950 rounded py-2 px-4 bg-slate-950 hover:bg-amber-300 text-white"
                href="#"
              >
                Team
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block border border-slate-950 rounded py-2 px-4 bg-slate-950 hover:bg-amber-300 text-white"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React,{useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
{/*sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl*/}
{/*flex items-center justify-between flex-wrap bg-white p-6 sticky top-0*/}
return(
<nav className="sticky top-0 w-full flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-y mr-6 ">
        
        <span class="font-semibold text-3xl text-black tracking-tight">Assets</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow font-mono flex justify-end">
          <ul class="flex ">
            <li class="mr-3">
              <a
                class="w-50 inline-block rounded-full py-2 px-4 bg-white text-black hover:bg-yellow hover:text-white"
                href="blog/blogmain"
              >
                Blogs
              </a>
            </li>
            <li class="mr-3">
              <a
                class="w-50 inline-block rounded-full  py-2 px-4 bg-white text-black hover:bg-yellow hover:text-white"
                href="/newsletter"
              >
                Newsletter
              </a>
            </li>
            <li class="mr-3">
              <div>
                <button className="w-50 peer px-5 py-2 rounded-full bg-white text-black hover:bg-yellow hover:text-white">
                  Projects
                </button>
                
               {/*<div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-slate-950 drop-shadow-lg">
                  <a className="px-5 py-3 hover:bg-amber-300" href="#">
                    Project1
                  </a>
                  <a className="px-5 py-3 hover:bg-amber-300" href="#">
                    PROJECT2
                  </a>
  </div>*/}
              </div>
            </li>
            <li class="mr-3">
              <a
                class="w-50 inline-block rounded-full py-2 px-4 bg-white text-black hover:bg-yellow hover:text-white"
                href="/gallery"
              >
                Gallery
              </a>
            </li>
            <li class="mr-3">
              <a
                class="w-50 inline-block rounded-full py-2 px-4 bg-white text-black hover:bg-yellow hover:text-white"
                href="#"
              >
                Team
              </a>
            </li>
            <li class="mr-3">
              <a
                class="w-50 inline-block rounded-full py-2 px-4 bg-white text-black hover:bg-yellow hover:text-white"
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

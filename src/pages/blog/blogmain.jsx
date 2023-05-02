import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Blogmain() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen max-h-fit bg-amber-300">
        <h1 class="text-4xl text-center w-96 max-auto leading-normal font-bold mb-12">
          BLOG
        </h1>

        <div className="text-center text-black py-10">
          <div className="flex max-w-7xl h-96 mx-auto gap-8 group">
            <div className="bg-white hover:bg-amber-200 cursor-pointer p-8 ">
              <img src="demo.jpg" alt="" className="h-20 mx-auto"></img>
              <h2 className="uppercase text-xl font-bold">TITLE</h2>
              <p className="text-sm leading-7 my-3 font light opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full hover:bg-white">
                READ
              </button>
            </div>
            <div className="bg-white hover:bg-amber-200 cursor-pointer p-8 ">
              <img src="demo.jpg" alt="" className="h-20 mx-auto"></img>
              <h2 className="uppercase text-xl font-bold">TITLE</h2>
              <p className="text-sm leading-7 my-3 font light opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full hover:bg-white">
                READ
              </button>
            </div>
            <div className="bg-white hover:bg-amber-200 cursor-pointer p-8 ">
              <img src="demo.jpg" alt="" className="h-20 mx-auto"></img>
              <h2 className="uppercase text-xl font-bold">TITLE</h2>
              <p className="text-sm leading-7 my-3 font light opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full hover:bg-white">
                READ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

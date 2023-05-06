import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Blogmain() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen max-h-fit h-14 bg-gradient-to-r from-pink-500 to-amber-500">
     <div className="flex items-center justify-center h-screen"> <header>
  <h2 className="text-5xl text-center w-96 max-auto leading-normal font-bold mb-12">ASSETS</h2>
  <h1 className="text-5xl text-center w-96 max-auto leading-normal font-bold mb-12">
    <span>“</span> Blog <span>”</span>
  </h1>
  <p className="text-3xl">
    awesome place to make oneself <br /> productive and entertained through
    daily updates.
  </p>
</header></div>
        <div className="text-center text-black py-10">
          <div className="flex max-w-7xl h-96 mx-auto gap-8 group">
            <div className="bg-white hover:bg-amber-500 cursor-pointer p-8 ">
              <img src="demo.jpg" alt="" className="h-20 mx-auto"></img>
              <h2 className="uppercase text-xl font-bold">TITLE</h2>
              <p className="text-sm leading-7 my-3 font light opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
                <a href="/blog/blogpage" className="bg-btn_primary py-2.5 px-8 rounded-full hover:bg-white"> READ</a>
             
            </div>
            <div className="bg-white hover:bg-amber-500 cursor-pointer p-8 ">
              <img src="demo.jpg" alt="" className="h-20 mx-auto"></img>
              <h2 className="uppercase text-xl font-bold">TITLE</h2>
              <p className="text-sm leading-7 my-3 font light opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/blog/blogpage" className="bg-btn_primary py-2.5 px-8 rounded-full hover:bg-white"> READ</a>
            </div>
            <div className="bg-white hover:bg-amber-500 cursor-pointer p-8 ">
              <img src="demo.jpg" alt="" className="h-20 mx-auto"></img>
              <h2 className="uppercase text-xl font-bold">TITLE</h2>
              <p className="text-sm leading-7 my-3 font light opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/blog/blogpage" className="bg-btn_primary py-2.5 px-8 rounded-full hover:bg-white"> READ</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

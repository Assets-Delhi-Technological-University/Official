import React from "react";
import Instagram from "instagram-web-api";

const Socials = () => {
  return (
    <div className="font-mono bg-amber_custom text-white">
      <div className="text-center py-10">
        <h1 className="text-2xl text-slate-950 w-96 mx-auto leading-normal font-mono mb-12">
          SOCIAL MEDIA HANDELS
        </h1>
        <div className="flex max-w-5xl mx-auto gap-8 group ">
          <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-200 cursor-pointer p-8 rounded-xl ">
            <img src="demo.jpg" alt="" className="h-48 mx-auto" />
            <h4 className="uppercase text-xl text-slate-950 font-bold">
              TITLE
            </h4>
            <p className="text-sm text-slate-950 leading-7 my-3 font-light opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-btn_primary text-slate-950 py-2.5 px-8 rounded-full">
              Visit
            </button>
          </div>
          <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-200 cursor-pointer p-8 rounded-xl ">
          <img src="demo.jpg" alt="" className="h-48 mx-auto" />
            <h4 className="uppercase text-xl text-slate-950 font-bold">
              TITLE
            </h4>
            <p className="text-sm leading-7 my-3 text-slate-950 font-light opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-btn_primary text-slate-950 py-2.5 px-8 rounded-full">
              Visit
            </button>
          </div>
          <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-200 cursor-pointer p-8 rounded-xl ">
          <img src="demo.jpg" alt="" className="h-48 mx-auto " />
            <h4 className="uppercase text-xl text-slate-950 font-bold">
              TITLE
            </h4>
            <p className="text-sm leading-7 my-3 text-slate-950 font-light opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-btn_primary text-slate-950 py-2.5 px-8 rounded-full">
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;

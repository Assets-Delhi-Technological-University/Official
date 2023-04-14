import React from 'react'
import Image  from 'next/image';
import {useRouter} from 'next/router';

const Navbar = () => {

    const router = useRouter();


  return (
    <div className=" bg-white flex mx-auto justify-between w-full bg-transparent ">
        
        <img
        alt="logo"
        src="/Logo.png"
       className="w-[80px] aspect-auto"
        />

      
            <ul className="flex font-semibold text-darkYellow">
            <li 
            onClick={() => {
                router.push("/");
            }}
            className={`cursor-pointer mx-4 m-auto mt-0 py-6 px-2 rounded-b-sm ${(router.pathname === "/") ? "bg-darkYellow text-white" : ""}`}>Home</li>
            <li 
            onClick={() => {
                router.push("/about");
            }}
            className={`cursor-pointer mx-4 m-auto mt-0 py-6 px-2 rounded-b-sm ${(router.pathname === "/about") ? "bg-darkYellow text-white" : ""}`}>About</li>
            <li 
            onClick={() => {
                router.push("/contact");
            }}
            className={`cursor-pointer mx-4 m-auto mt-0 py-6 px-2 rounded-b-sm ${(router.pathname === "/contact") ? "bg-darkYellow text-white" : ""}`}>Contact</li>

<li 
            onClick={() => {
                router.push("/newsletter");
            }}
            className={`cursor-pointer mx-4 m-auto mt-0 py-6 px-2 rounded-b-sm ${(router.pathname === "/newsletter") ? "bg-darkYellow text-white" : ""}`}>Newsletter</li>


            </ul>
      
    </div>
  )
}

export default Navbar
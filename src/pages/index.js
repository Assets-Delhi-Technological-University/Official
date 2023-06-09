import Head from 'next/head'
import {useRef, useEffect} from 'react'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Navbar from './../components/Navbar';
import Main from './Main';
import Typed from "typed.js";
import Socials from './../components/Socials';
import Intro from './../components/Intro';
import Footer from './../components/Footer';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["LEARN", "BUILD", "GROW"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen min-h-screen -z-10 bg-white relative">

         <div className="h-fit text-slate-700 w-10/12 mx-auto">
             <div className="">
             <h1 className="text-center text-[3.5rem] font-bold text-[#141F2F] mx-auto tracking-[-0.02em] max-w-[740px] pt-[100px]">
            Together we {" "}
            <span ref={el} className="text-darkYellow" />
          </h1>
             </div>

             <Intro/>
              
             <Socials/>
             <Footer/>
             
         </div>
         
      </div>
    </>
  )
}

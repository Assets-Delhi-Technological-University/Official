import react, { Component } from "react";
import reactDom from "react-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function newsletter() {
  const data = [
    {
      id: 1,
      title: "Newsleter March 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil",
      link: "",
    },
    {
      id: 2,
      title: "Newsleter March 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil",
      link: "",
    },
    {
      id: 3,
      title: "Newsleter March 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil",
      link: "",
    },
  ];

  return (
    <>
      <div className="min-h-screen max-h-fit bg-white grid grid-cols-1 gap-4 justify-center font-poppins  ">
        <Carousel responsive={responsive}>
          {data.map((item) => (
            <div 
            key = {item.key}
            className="grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-yellow justify-center opacity-85 py-6 p-8 h-fit md:h-[500px] w-4/5 mx-auto  ">
              <div className="justify-center">
                <img
                  src="demog.jpg"
                  className="aspect-auto  md:h-3/4 md:w-3/4 p-4 justify-items-center rounded-t-full rounded-b-md m-auto"
                ></img>
              </div>
              <div className="text-black justify-center">
                <h1 className="text-4xl p-4">{item.title}</h1>
                <svg
                  className=""
                  fill="#000000"
                  width="40px"
                  height="40px"
                  viewBox="0 0 8 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z"
                    transform="translate(0 1)"
                  />
                </svg>
                <p className="text-lg md:text-xl p-4">
                 {item.description}
                </p>
                <a href="#">
                  <div className="mt-4 p-4 inline-flex items-center gap-2 text-black sm:mt-12 lg:mt-16">
                    <p className="font-medium sm:text-lg">READ</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}

          {/* <div className="grid grid-cols-2 rounded-[40px] bg-yellow justify-center opacity-85 py-12 p-8 h-[600px] w-4/5 m-8  ">
          <div className="justify-center">
            <img src="demog.jpg" className="h-3/4 w-3/4 py-8 px-8 justify-items-center rounded-t-full rounded-b-md "></img>
          </div>
          <div className="text-black justify-center">
          
            <h1 className="text-4xl p-4">Newsleter March 2023</h1>
            <svg className="" fill="#000000" width="40px" height="40px" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z" transform="translate(0 1)" />
</svg>
            <p className="text-2xl p-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.</p>
        <a href="#">
    <div className="mt-4 p-4 inline-flex items-center gap-2 text-black sm:mt-12 lg:mt-16">
 <p className="font-medium sm:text-lg">READ</p>
 <svg
   xmlns="http://www.w3.org/2000/svg"
   className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
   fill="none"
   viewBox="0 0 24 24"
   stroke="currentColor"
 >
   <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     d="M17 8l4 4m0 0l-4 4m4-4H3"
   />
 </svg>
</div></a>
        
          </div>
          
        </div> */}

          {/* <div className="grid grid-cols-2 rounded-[40px] bg-yellow justify-center opacity-85 py-12 p-8 h-[600px] w-4/5 m-8  ">
          <div className="justify-center">
            <img src="demog.jpg" className="h-3/4 w-3/4 py-8 px-8 justify-items-center rounded-t-full rounded-b-md "></img>
          </div>
          <div className="text-black justify-center">
          
            <h1 className="text-4xl p-8">Newsleter March 2023</h1>
            <svg className="" fill="#000000" width="40px" height="40px" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z" transform="translate(0 1)" />
</svg>
            <p className="text-2xl p-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.</p>
        <a href="#">
    <div className="mt-8 p-8 inline-flex items-center gap-2 text-black sm:mt-12 lg:mt-16">
 <p className="font-medium sm:text-lg">READ</p>
 <svg
   xmlns="http://www.w3.org/2000/svg"
   className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
   fill="none"
   viewBox="0 0 24 24"
   stroke="currentColor"
 >
   <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     d="M17 8l4 4m0 0l-4 4m4-4H3"
   />
 </svg>
</div></a>
        
          </div>
          
        </div> */}
        </Carousel>
      </div>
    </>
  );
}

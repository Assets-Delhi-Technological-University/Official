import React from "react";
import Instagram from "instagram-web-api";

const Socials = () => {


  const data = [
    {
      id: 1,
      date: "MARCH 18,2023", 
      title: "FINBOOK",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      link: "#",
    },
    {
      id: 2,
      date: "MARCH 18,2023", 
      title: "FINBOOK",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      link: "#",
    },
    {
      id: 3,
      date: "MARCH 18,2023", 
      title: "FINBOOK",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      link: "#",
    }
  ]
  return (
    <div>
      <div className="flex h-fit p-6 my-6">
        <div className="m-auto">
          <h1 className=" text-5xl my-2 p-4 text-left">
            OUR PROJECTS
          </h1>
          <h1 className="text-xl md:text-2xl p-4 text-left">
            Some of the projects we did in the feild of Finance and Investing:
          </h1>
        </div>
      </div>
      <div className="grid space-y-5 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:grid-cols-1 mx-2 lg:gap-3 text-black justify-item-center pb-24 ">
        
        
        {
        data.map((item) => (
          <div 
          key={item.id}
          className="w-4xl p-4 h-4xl bg-white border-l-2 border-black font">
          <h2 className="p-4 text-2xl">{item.date}</h2>
          <h1 className="p-4 text-5xl hover:text-yellow">{item.title}</h1>
          <p className="p-4 text-xl">
            {item.description}
          </p>
          <a href="#">
            <div className="mt-8 p-4 inline-flex items-center gap-2 text-black sm:mt-12 lg:mt-16">
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
        ))}
        
        

        {/* <div className="w-4xl p-4 h-4xl bg-white border-l-2 border-black font">
          <h2 className="p-4 text-2xl">MARCH 18,2023</h2>
          <h1 className="p-4 text-5xl hover:text-yellow">FINBOOK</h1>
          <p className="p-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <a href="#">
            <div className="mt-8 p-4 inline-flex items-center gap-2 text-black sm:mt-12 lg:mt-16">
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
        </div> */}

        {/* <div className="w-4xl p-4 h-4xl bg-white border-l-2 border-black font">
          <h2 className="p-4 text-2xl">MARCH 18,2023</h2>
          <h1 className="p-4 text-5xl hover:text-yellow">FINBOOK</h1>
          <p className="p-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <a href="#">
            <div className="mt-8 p-4 inline-flex items-center gap-2 text-black sm:mt-12 lg:mt-16">
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
        </div> */}
      </div>
    </div>
  );
};

export default Socials;

import React from 'react'
import Image from 'next/image'


const Intro = () => {
  return (
    <div className="mx-2 text-slate-700">
        <div className="max-w-[800px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col p-2 w-full">
              <h1 className="text-[3rem] mb-2">
                Who we are?
              </h1>

              <h1 className="border-r-[4px] text-[1.5rem] h-full border-darkYellow mt-2 w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorem facilis dolorum impedit maxime tenetur rem deserunt nobis recusandae. Accusamus eveniet reprehenderit ducimus?
              </h1>
            </div>

            <div>
                <Image
                className="aspect-auto mx-auto max-w-[500px] px-4 md:w-[400px] w-[300px] sm:w-[200px]"
                    src="/team.png"
                    width={300}
                    height={300}
                />
            </div>
        </div>
        


    </div>
  )
}

export default Intro
import React from 'react'

const Intro = () => {
  return (
    <div className="mx-2">
        <div className="max-w-[740px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col p-2">
              <h1 className="text-[2.5rem] mb-2">
                Who we are ?
              </h1>

              <h1 className="border-r-[4px] border-darkYellow mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorem facilis dolorum impedit maxime tenetur rem deserunt nobis recusandae. Accusamus eveniet reprehenderit ducimus?
              </h1>
            </div>

            <div>
                <img
                className="aspect-auto w-[250px] mx-auto"
                    src="team.png"
                />
            </div>
        </div>
    </div>
  )
}

export default Intro
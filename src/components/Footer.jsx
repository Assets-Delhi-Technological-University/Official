import React from 'react'

const Footer = () => {
  return (
    <div className="p-4 absolute min-h-fit w-screen bg-darkYellow shadow-t-md bottom-0">
       <h1 className="text-center text-[2rem] font-semibold">
        Stay in Touch
       </h1>
       
       <input 
         className="w-3/5 mt-4 p-2 rounded-md border-2 border-white focus:outline-none focus:border-darkYellow mx-auto"
       />
    </div>
  )
}

export default Footer
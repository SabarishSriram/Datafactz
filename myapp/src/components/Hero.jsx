import React from 'react'
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div class='text-white '>
        <div className='justify-center max-w-[800px] w-full h-screen mt-[-90px] mx-auto text-center flex flex-col'>
            <p className='font-bold text-[#00df9a]'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 py-4'>Grow With Data</h1>
            <div>
              <p className='md:text-3xl sm:text-2xl text-xl m-2 font-bold'>Fast, flexible financing for 
              <ReactTyped className='font-bold pl-2' strings={["BTB","BTC","SASS",]}
                typeSpeed={120} backSpeed={140} loop
               /></p>
            </div>
            <p className='text-xl mx-8 sm:text-xl md:text-2xl my-3 mt-4 font-bold text-[#6B7280]'>Monitor your data anlaytics to increase revenue for BTB, BTC & SASS platforms</p>
            <button className='bg-[#00df9a] text-black font-bold rounded-full mt-5 w-52 py-4 mx-auto transition hover:-translate-1 hover:scale-110'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
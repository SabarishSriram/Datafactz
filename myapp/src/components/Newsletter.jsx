import React from 'react'

function Newsletter() {
  return (
    <div className='bg-black w-full py-20 px-8 '>
        <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto'>

          <div className='lg:col-span-2' >
            <p className='text-white font-bold text-2xl md:text-4xl md:text-left text-center '>Want tips and tricks to optimize your flow?</p>
            <p className='mt-3 text-white text-center md:text-left'>Sign up to our newsletter and stay up to date</p>
          </div>

          <div className='flex flex-col md:flex-row'>
                <input type="text" placeholder='Enter Email' className='py-3 max-w-full w-full md:w-60 rounded-lg px-5 mt-8' />
                <button className='bg-[#00df9a] text-black font-bold rounded-full mt-8 w-52 md:w-36 py-3 mx-auto transition hover:-translate-1 hover:scale-110  '>Notify me</button>
          </div>
          
          <div>

          </div>
            
        </div>
    </div>
  )
}

export default Newsletter
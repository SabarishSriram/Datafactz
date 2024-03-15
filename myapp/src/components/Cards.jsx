import React from 'react'
import Single  from "../assets/single.png";

function Cards() {
  return (
    <div className='bg-white p-5 grid md:grid-cols-3'>
          <div className='flex bg-[#ffffff] flex-col drop-shadow-2xl rounded-2xl items-center py-12 mb-6'>
              <img className='w-20' src={Single} alt="" />
              <p className='font-bold w-full text-center py-9 text-2xl'>Single User</p>
              <p className='font-bold w-full text-center px-16 text-4xl'>$149</p>
              <p className='font-semibold p-2 w-[290px] border-b border-b-slate-400  text-center mt-4 '>500 GB Storage</p>
              <p className='font-semibold p-2 w-[290px] border border-b-slate-400 text-center '>1 User Allowed</p>
              <p className='font-semibold p-2 w-[290px] border-b border-b-slate-400  text-center '>Send up to 2 GB</p>
              <button className='bg-black text-[#00df9a] w-52 py-4 font-bold rounded-full transition hover:-translate-1  mt-7 hover:scale-110'>Start Trial</button>
          </div>

          <div className='flex bg-[#ffffff] flex-col drop-shadow-2xl rounded-2xl items-center py-12 mb-6'>
              <img className='w-20' src={Single} alt="" />
              <p className='font-bold w-full text-center py-9 text-2xl'>Partnership</p>
              <p className='font-bold w-full text-center px-16 text-4xl'>$199</p>
              <p className='font-semibold p-2 w-[290px] border-b border-b-slate-400  text-center mt-4 '>1 TB Storage</p>
              <p className='font-semibold p-2 w-[290px] border border-b-slate-400 text-center '>3 User Allowed</p>
              <p className='font-semibold p-2 w-[290px] border-b border-b-slate-400  text-center '>Send up to 10 GB</p>
              <button className='bg-black text-[#00df9a] w-52 py-4 font-bold rounded-full transition hover:-translate-1  mt-7 hover:scale-110'>Start Trial</button>
          </div>

          <div className='flex bg-[#ffffff] flex-col drop-shadow-2xl rounded-2xl items-center py-12 mb-6'>
              <img className='w-20' src={Single} alt="" />
              <p className='font-bold w-full text-center py-9 text-2xl'>Group Account</p>
              <p className='font-bold w-full text-center px-16 text-4xl'>$299</p>
              <p className='font-semibold p-2 w-[290px] border-b border-b-slate-400  text-center mt-4 '>5 TB Storage</p>
              <p className='font-semibold p-2 w-[290px] border border-b-slate-400 text-center '>5 User Allowed</p>
              <p className='font-semibold p-2 w-[290px] border-b border-b-slate-400  text-center '>Send up to 20 GB</p>
              <button className='bg-black text-[#00df9a] w-52 py-4 font-bold rounded-full transition hover:-translate-1  mt-7 hover:scale-110'>Start Trial</button>

              
          </div>
    </div>
  )
}

export default Cards
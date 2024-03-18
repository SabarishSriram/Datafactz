import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className='bg-white w-full py-20 px-8'> 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' >
            <img className='w-[500px] mx-auto' src={Laptop} alt="" />

            <div className='flex flex-col items-center md:mt-14 md:items-start' >

            <p className='font-bold  text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>

            <h1 className='font-bold text-center text-2xl mt-2 md:text-4xl' >Manage Data Analytics Centrally</h1>

            <p className='mt-3 font-normal text-center md:text-left'>Welcome to our Data Analytics Dashboard, where data management becomes effortless and insights flow seamlessly. With centralized access to diverse data sources, you can enhance organizational efficiency by eliminating data silos. Gain real-time insights, visualize trends, and foster collaboration within your team. The power to make informed decisions is just a click away. Get started and embark on a journey of streamlined data analytics.</p>
            <button className='bg-black text-[#00df9a] w-52 mt-6 py-4 font-bold rounded-full transition hover:-translate-1 hover:scale-110'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
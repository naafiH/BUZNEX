import React from 'react'
import bgimg from "../assets/bgimg.png"

export default function body() {
  return (
    <div>

    <div className='grid sm:grid-cols-2 max-w-[1240px] mx-auto'>
        <div className='flex  items-center sm:items-start sm:px-12 justify-center flex-col max-w-[400px] mx-auto'>
            <h1 className='text-[25px] sm:text-[39px] font-bold '>Our services</h1>
            <p className='text-[10px] sm:text-[13px]'>pressure rationally encounter consequences extremely painful grat opertunity</p>
        </div>
        <div className='max-w-[200px] mx-auto sm:max-w-none '>
            <img  src={bgimg} alt="" />
        </div>

    </div >
    <div className='flex justify-center items-center flex-col text-center max-w-[400px] mx-auto'>
        <h2 className='text-[12px] uppercase text-zinc-400 tracking-tighter'>Services</h2>
        <h1 className='text-[19px] font-bold sm:text-[29px]'>Check <span className='text-green-400'> our</span> services</h1>
        <p className='text-[10px] text-zinc-400 sm:px-12'>pressure rationally encounter councequences that are painful nor again is ther anyone who purses</p>
    </div>
    </div>
  )
}

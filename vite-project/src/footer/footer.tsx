import React from 'react'
import diagram from "../assets/graph.png"
import bacground from "../assets/societ.png"
import chess from "../assets/chess.png"

export default function footer() {
  return (
    <div className='grid sm:grid-cols-3 py-10'>
        <div className='flex flex-col sm:flex-row max-w-[200px] sm:max-w-[300px] mx-auto'>
        <div className='flex justify-center items-start'>
            <div className='flex items-center justify-center'>
            <img className='w-10 h-10  mx-3' src={diagram} alt="" />
            </div>
            <div className='px-2'>
            <h1 className='capitalize text-[19px] sm:text[22px] font-font1 pb-4 text-zinc-700'>Digital solutions</h1>
            <p className='text-zinc-400 tracking-tighter text-[12px]'>pleasure rationally service are anyone who persuses</p>
            </div>
            </div>
        </div>
        <div>
            <img className='max-w-[250px] mx-auto' src={bacground} alt="" />
        </div>
        <div className='flex flex-col sm:flex-row max-w-[200px] sm:max-w-[300px] mx-auto'>
            <div className='flex justify-center items-start'>
            <div className='flex items-center justify-center'>
            <img className='w-10 h-10  mx-3' src={chess} alt="" />
            </div>
            <div className='px-2'>
            <h1 className='capitalize text-[19px] sm:text[22px] font-font1 pb-4 text-zinc-700'>Branding</h1>
            <p className='text-zinc-400 tracking-tighter text-[12px]'>pleasure rationally service are anyone who persuses</p>
            </div>
            </div>
        </div>

    </div>
  )
}

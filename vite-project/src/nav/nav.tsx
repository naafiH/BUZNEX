import React from 'react'
import logo from "../assets/logo.png"

export default function nav() {
  return (
    <div>
        <div className='flex bg-emerald-50 px-8 flex-col font-font1 sm:flex-row sm:justify-between items-center text-center justify-center py-2 max-w-[1240px] mx-auto'>
            <h1 className='flex justify-center items-center text-[25px]'>
                <img className='w-10' src={logo} alt="" />Buznex</h1>
            <ul className='flex flex-col sm:flex-row justify-between ic sm:justify-center gap-1 sm:gap:2 text-[13px] uppercase'>
                <li>Home</li>
                <li>Service</li>
                <li>About us</li>
                <li>Out work</li>
                <li>Blog</li>
                <li>contact us</li>
            </ul>
        </div>

    </div>
  )
}

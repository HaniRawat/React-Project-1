import React from 'react'

function NavBar() {
  return (
    <nav className="flex justify-around flex-wrap max-w-[1280px] m-auto h-[72px] items-center">
      <div className="">
        <img src=".\public\brand_logo.png"/>
      </div>

      {/* Menu Options */}

        <ul className="decoration-none flex flex-wrap gap-[24px] uppercase font-bold" >
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      

      
        <button className="rounded-sm hover:bg-red-500 px-[16px] py-[6px] text-white bg-red-600 h-[32px]">Login</button>
     
    </nav>
  )
}

export default NavBar
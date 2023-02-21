import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
       <div className=' logoDiv'>
        <h1 className=' logo text-[25px] text-teal-500'><strong>Job</strong>Finder</h1>
       </div>

       <div className='menu flex gap-8'>
        <li className="menuList text-[#6f6f6f] hover:text-teal-500">Jobs </li>
        <li className="menuList text-[#6f6f6f] hover:text-teal-500">Companies </li>
        <li className="menuList text-[#6f6f6f] hover:text-teal-500">About </li>
        <li className="menuList text-[#6f6f6f] hover:text-teal-500">Contact </li>
        <li className="menuList text-[#6f6f6f] hover:text-teal-500">Blog </li>
        <li className="menuList text-[#6f6f6f] hover:text-teal-500">Login </li>
        <li className="menuList text-[#6f6f6f] hover:text-teal-500">Register </li>
       </div>
    </div>
  )
}

export default Navbar

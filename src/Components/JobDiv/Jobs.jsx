import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-teal-500 shadow-lg shadow-gray-300/500 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-teal-700 group-hover:text-white'>Web Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive />Now
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
           Looking for software developers with 5 years of experience
          </p>
          <div className='company flex items-center gap-2'>
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>NeuLabs Co.</span>
          </div>
          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-teal-800 hover:bg-white group-hover/item:text-black group-hover:text-white'>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Jobs

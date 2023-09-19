import React from 'react'
import women from '../assets/womenwithtab.png'

function Free() {
  return (
    <div className='flex'>
    <div className='relative top-4 z-20 w-[100vw] m-auto'>
      
<a href="#" className="flex  flex-col items-center h-[80vh] xl:h-[60vh] m-auto w-[80vw] sm:h-[90vh]  bg-blue-600 border border-black border-5px rounded-3xl shadow md:flex-row ">
    <img className="object-cover w-[50%] bg-blue-600 h-[100%] rounded-3xl " src={women} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
      
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Book A Free Demo Class Now </h1>
<p className="mb-6 text-black font-normal ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" className="inline-flex m-auto items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 xl:w-[60%] sm:w-[auto]">
    Book Now
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

    </div>
</a>

    </div>

    </div>
  )
}

export default Free

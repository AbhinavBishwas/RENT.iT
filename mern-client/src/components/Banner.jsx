import React from 'react'
import Bannercard from '../home/Bannercard'

const Banner = () => {
  return (  
    <div className='px-4 lg:px-24 bg-[#F0EBE3] bg-gradient-to-b from-[#F0EBE3] to-[#c0a270] flex items-center'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40 w-full'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-6xl font-bold leading-snug text-gray-700'>Rent and Sell your Books </h2>
            <p className='font-serif text-xl'>Students can save money by purchasing or renting used books, and those who sell their books can recoup some of their costs. This practice ensures that educational resources are fully utilized, promotes environmental sustainability by reducing the demand for new books, and fosters a sense of community by encouraging resource sharing among students.</p>
            {/* creating a search bar here  lest go abhi bnade bhai*/}
            <div>
                <input type="search" name="search" id="search"  placeholder="Search a book" className='py-2 px-2 rounded-s-sm outline-none' />
                <button className='bg-green-700 outline-none px-6 py-2 mx-2  rounded-sm text-white font-medium  hover:bg-blue-700 transition-all ease-in duration-200'>Search</button>
            </div>
        </div>
        {/* right side */}
        <div>
          <Bannercard></Bannercard>
        </div>
      </div>
    </div>
  )
}

export default Banner
  
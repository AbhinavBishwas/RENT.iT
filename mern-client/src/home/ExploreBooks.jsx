import React from 'react'
import { Link } from 'react-router-dom'
const ExploreBooks = () => {
  return (
    <div className='bg-[#e4bae4]  bg-gradient-to-t from-[#F0EBE3] to-[#c0a270] py-4 flex flex-col  md:flex-row' >
        {/* half side of the exploring all the books from the listed books jaha se user chun skta hai ki usko konsa book padhna hai  */}
      <div className='md:w-1/2 mt-28 px-2 lg:px-24 space-y-6'>
        <h2 className='text-5xl text-gray-700 font-semibold'>Explore Your Favorite <span className='font-bold text-blue-600'>Book Here !</span> </h2>
        <p className='py-12 text-xl font-serif'>Welcome to our book collection! Dive into a world of knowledge and adventure with our diverse range of books. Swipe through the collection to find titles that pique your interest. Whether you're looking for a gripping novel, an insightful non-fiction read, or a handy reference guide, we have something for everyone. Take your time to explore and find the perfect book to immerse yourself in. Happy reading!</p>
      </div>
    {/* next half side of the books where all the coount of the listed books and concurrent readers and all the other stuufs will be getting highlited */}
    <div>
    <div className=' md:w-1/2 gap-3 sm:gap-8 lg:gap-32 md:mt-44 px-2 lg:px-24   flex md:flex-row '>
        <div>
            <h3 className='text-5xl font-bold text-gray-800'>0+</h3>
            <p className='font-semibold text-xl'>Books Listed</p>
        </div>
        <div>
            <h3 className='text-5xl font-bold text-gray-800'>0+</h3>
            <p className='font-semibold text-xl'>Books Listed</p>
        </div>
        <div>
            <h3 className='text-5xl font-bold text-gray-800'>0+</h3>
            <p className='font-semibold text-xl'>Books Listed</p>
        </div>
        
    </div>
    <div className='py-20 flex  px-20 '>
      <Link to='http://localhost:5000/all-books' ><button className= ' text-white p-4 rounded-lg bg-green-700 hover:bg-blue-700 font-semibold' >Explore All</button></Link>
    </div>
    </div>
    </div>
  )
}

export default ExploreBooks

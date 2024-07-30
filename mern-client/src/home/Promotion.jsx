// This is the starting for promoting renting the products too or selling the products

import React from 'react'

const Promotion = () => {
  return (
    <div className='my-16 px-4 lg:px-24 '>
        
      <p className='text-xl mb-4 font-serif text-gray-700'>
        As the name suggests RENT.iT is not only your one-stop solution for renting, buying, and selling books. You can explore various other products, we have you covered. Additionally, if you have items you no longer need, you can list them for rent or sale, making it easy to earn extra income. Discover the convenience and flexibility of Rent.it, where you can find everything you need without the hassle of ownership. Join our community today and start renting, buying, or selling with ease.
      </p>
      <p className='text-xl mb-4 font-serif text-gray-700'>
      In a college setting, there are numerous products that can be sold or rented, especially as students transition out of their academic life. Often, final-year students leave behind valuable items that can benefit others. Rent.it aims to create a seamless platform where students can rent or sell items such as calculators, software, hardware parts, and even practical files. By offering these items for rent or sale, students can not only earn extra income but also contribute to a culture of sharing and collaboration. Our platform also allows students to demand access to projects associated with the rented hardware, fostering a deeper understanding and a richer educational experience. Additionally, Rent.it focuses on supporting students from all backgrounds, including those from less privileged situations, by reinvesting its revenue to help those in need. Join us in building a supportive community where resources are shared, knowledge is exchanged, and every student has the opportunity to succeed.
      </p>
      <div className='flex flex-col md:flex-row justify-between items-center mt-8'>
        <div className=' bg-blue-100 p-4 rounded-2xl shadow-lg  m-2'>
          <h2 className='text-2xl font-semibold text-gray-800'>Rent Your Products</h2>
          <p className='mt-2'>List your products for rent and earn extra income. Set your own rental terms and reach a wide audience.</p>
        </div>
        <div className=' bg-green-100 p-4 rounded-2xl shadow-lg  m-2'>
          <h2 className='text-2xl font-semibold text-gray-800'>Buy or Rent</h2>
          <p className='mt-2'>Explore a vast collection of products available for rent or purchase. Enjoy the flexibility to choose what suits you best.</p>
        </div>
        <div className=' bg-yellow-100 p-4 rounded-2xl shadow-lg  m-2'>
          <h2 className='text-2xl font-semibold text-gray-800'>Sell Your Products</h2>
          <p className='mt-2'>Have items you no longer need? List them for sale on our platform and connect with potential buyers effortlessly.</p>
        </div>
      </div>

    </div>
  )
}

export default Promotion

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl } = useLoaderData();
  const [action, setAction] = useState(null); // State to track which button is clicked
  const [days, setDays] = useState(7); // State to track the number of rental days

  const handleRentClick = () => {
    setAction('rent');
    setDays(7); // Reset days to minimum value on click
  };

  const handleBuyClick = () => {
    setAction('buy');
  };

  const handleDaysChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 7 && value <= 30) {
      setDays(value);
    }
  };

  const calculateRentPrice = (days) => {
    // Example calculation: $10 per day
    return days * 10;
  };

  const reviews = [
    {
      image: 'https://i.redd.it/5mjdvatrh15a1.jpg',
      review: 'Great condition, loved the book!',
      reviewer: 'John Doe'
    },
    {
      image: 'https://blog.thryft.asia/content/images/2021/07/01_Pages.jpg',
      review: 'Slightly worn but still good.',
      reviewer: 'Jane Smith'
    },
    {
      image: 'https://i.redd.it/listed-on-abebooks-as-good-condition-ordered-from-discover-v0-4amnl15yz5da1.jpg?width=1200&format=pjpg&auto=webp&s=621c409f580b2a983937ce905e7fa4d74892fdfe',
      review: 'Pages were clean, no marks.',
      reviewer: 'Sam Wilson'
    }
  ];

  return (
    <div>
      <div className='flex flex-col md:flex-row w-screen h-screen'>
        {/* image div for image and details of the book in image form */}
        <div className='w-10/12 lg:w-1/3 flex flex-col mt-28 px-4 lg:px-24 '>
          <div><img className='w-fit h-fit' src={imageUrl} alt="" /></div>
          <div><h2 className='font-bold mt-2 lg:text-4xl md:text-2xl text-xl text-gray-700'>{bookTitle}</h2></div>
        </div>
        {/* content div for the book details about the story in the book and the content */}
        <div className='mt-28'>
          <h2 className='text-2xl text-gray-700 font-semibold p-2'>Author: <span className='font-normal'>{authorName}</span></h2>
          <h2 className='text-2xl text-gray-700 font-semibold p-2'>Description:</h2>
          <p className='px-4'>{bookDescription}</p>
          <div className='flex mt-4'>
            <button className='bg-blue-700 text-white px-4 py-2 mr-2' onClick={handleRentClick}>RENTiT</button>
            <button className='bg-green-700 text-white px-4 py-2' onClick={handleBuyClick}>BUYiT</button>
          </div>
          {action === 'rent' && (
            <div className='mt-4'>
              <label className='text-xl text-gray-700'>Number of days (7-30): </label>
              <input
                type='number'
                value={days}
                onChange={handleDaysChange}
                min={7}
                max={30}
                className='border px-2 py-1 ml-2 w-20'
              />
              <p className='text-lg text-gray-700 mt-2'>Total Price: ${calculateRentPrice(days)}</p>
            </div>
          )}
          {action === 'buy' && (
            <div className='mt-4'>
              <p className='text-xl text-gray-700'>Price: $50</p>
              <p className='text-lg text-gray-700 mt-2'>Number of days: Permanent</p>
            </div>
          )}
          <div className='mt-8'>
            <h3 className='text-xl text-gray-700 font-semibold'>Book Conditions & Reviews from Previous Owners:</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
              {reviews.map((review, index) => (
                <div key={index} className='border p-4 rounded-lg shadow-lg'>
                  <img src={review.image} alt={`Review ${index + 1}`} className='w-[340px] h-[440px] object-cover mb-2' />
                  <p className='text-gray-700 italic'>" {review.review} "</p>
                  <p className='text-gray-700 mt-2 text-center'>- {review.reviewer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;

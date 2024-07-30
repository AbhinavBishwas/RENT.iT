import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './BookCards.css';
// import required modules
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
//importing shooping react icons
import { FaCartShopping } from "react-icons/fa6";
const BookCards = ({ books }) => {
  return (
    <div className='my-16 px-4 lg:px-24 '>
      <Swiper
        className="book-swiper"
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Pagination]}
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
            <div>
            <div className='relative  '>
              <img src={book.imageUrl} alt={book.title} />
              <div className= ' absolute top-3 right-3 bg-green-700 hover:bg-blue-700 hover:text-white rounded p-2'>
              <FaCartShopping />
              </div>
            </div>
            <div>
              <div className='text-gray-700'>
              <h3>{book.bookTitle}</h3>
              <h3>{book.authorName}</h3>
              </div>
              <div>
                <p className='text-black'>Rs.240</p>
              </div>
            </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookCards;

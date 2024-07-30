import React, { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
//feth kr rhw hai all-books me se saare books objects ko 
const Shop = () => {
  const [books, setBooks] = useState([]);
  const [expandedBooks, setExpandedBooks] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  // ye toggle books wala function chat gpt se hai isko smjhna hai 

  const toggleReadMore = (index) => {
    setExpandedBooks(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  //smjhne ka try kiya nhi smjh lga 

  return (
    <div className='px-4 mt-28 lg:px-24'>
      <div>
        <h2 className='text-6xl font-bold text-center text-gray-700'>All Books are Here.</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-16'>
        {books.map((book, index) => (
          <Card
            key={index}
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={book.imageUrl}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
              {expandedBooks[index]
                ? book.bookDescription
                : `${book.bookDescription.substring(0, 100)}...`}
            </p>
            <Button size="small" onClick={() => toggleReadMore(index)}>
              {expandedBooks[index] ? 'Read Less' : 'Read More'}
            </Button>
            <Link to={`/book/${book._id} `}><button className='font-semibold rounded-lg py-1 bg-blue-700 hover:bg-blue-800 text-white w-full '>Buy Now</button></Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;

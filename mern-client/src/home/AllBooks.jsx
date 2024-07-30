import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const AllBooks = () => {
    const [books,setbooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setbooks(data))
    },[])
  return (
    <div className=''> 
      <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default AllBooks

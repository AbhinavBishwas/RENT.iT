import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const Manage = () => {
  const [allBooks,setallBooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setallBooks(data));
  },[])
//deleteing ke liye hamndl;e delete dfunction likh rhe hai 
const handleDelete=(id)=>{
  console.log(id);
  fetch(`http://localhost:5000/book/${id}`,{
    method:"DELETE",
  }).then(res=>res.json()).then(data=>{alert("Book is Deleted Now")
    history.go()
    // setallBooks(data);
  })
}
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl text-gray-700 font-bold'>Manage-Book</h2>
      {/* table for the books data u are uploading  */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>S.No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit/Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book,index)=> <Table.Body className='divide-y' key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$29</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" to={`/admin/dashboard/edit/${book._id}`}>
              Edit
              </Link>
              <button onClick={()=>handleDelete(book._id)} className='p-2  bg-red-600 text-white mx-2 font-semibold rounded-lg hover:bg-red-500'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
        
      </Table>
    </div>
  )
}

export default Manage   

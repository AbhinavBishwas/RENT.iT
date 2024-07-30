import React, { useState } from 'react'

import { Button, Checkbox, Label, TextInput,Textarea } from "flowbite-react";
// this one is for upload a book 
const Upload1 = () => {
// array for book category 
 const bookCategory=[
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Programming",
  "Science-Fiction",
  "Fantasy",
  "Horror",
  "Bibliography",
  "Autobiography",
  "Art",
  "History",
  "Self-help",
  "Business",
  "Children",
  "Travel",
  "Romance",
  "Religion"
 ]
//  handle selected book category 
 const [selectedBookCategory,setselectedBookCategory]=useState(bookCategory[0]);
const handlechangeselectedValue=(event)=>{
  // console.log(event.target.value);
  setselectedBookCategory(event.target.value)
}
// handle book submission 
const handlebookSubmit=(event)=>{
  event.preventDefault();
  const form=event.target;
  const bookTitle=form.bookTitle.value;
  const authorName=form.authorName.value;
  const imageUrl=form.imageUrl.value;
  const category=form.category.value;
  const bookDescription=form.bookDescription.value;
  const bookPdfUrl=form.bookPdfUrl.value;
  // making an book object
  const bookObj={
    bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
  }
  console.log(bookObj);

  fetch("http://localhost:5000/upload-book",{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(bookObj)
  }).then(res=>res.json()).then(data=>{
    // console.log(data);
    alert("Book Uploaded Succesfully!!")
    form.reset();
  })
}
  return (
      <div className='px-4 my-12 '>
      {/* book ke liye bna rhe hai pehle  */}
      <h2 className='mb-8 text-3xl text-gray-700 font-bold'>Upload Your Book</h2>
      {/* form jo ki book ka object bnayega submission pe  */} 
      {/* by flowbite react  */}
      <form onSubmit={handlebookSubmit} className="flex flex-wrap lg:w-[1180px] md:w-[860px] flex-col gap-4">

        {/* first row */}
      <div className='gap-8 flex'>
        {/* Book name  */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
      </div>
      {/* Author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name " required />
      </div>
      </div>

      {/* Second row */}
      <div className='gap-8 flex'>
        {/* Book imageUrl  */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Book Image Url" />
        </div>
        <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book Image Url " required />
      </div>
      {/* Category */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select name='category'  id='inputState' className='w-full rounded' value={selectedBookCategory} onChange={handlechangeselectedValue}>
          {
            bookCategory.map((option)=><option key={option} value={option}>{option}</option>)
          }
        </select>
      </div>
      </div>
      {/* Third row */}
      {/* Book description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
      <Textarea id="bookDescription" name='bookDescription' placeholder="Write your Book Description..." className='w-full' required rows={5} />
      </div>
      {/* Fourth row */}
      {/* Book pdf url */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
        </div>
        <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book Pdf Url" required shadow />
      </div>


      <Button type="submit">Upload-Book</Button>
    </form>
    </div>
    
    
  )
}

export default Upload1

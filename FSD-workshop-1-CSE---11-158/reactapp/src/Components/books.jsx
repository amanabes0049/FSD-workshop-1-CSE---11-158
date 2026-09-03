import React from 'react'
import booksData from '../assets/books.js'
const books = () => {
  return (
    <div>
    <div>
        <p style={{ color: '#ff1594', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>Book Details</p>
    </div>
    <div>
      <p> Title: {booksData[0].bookTitle}</p>
      <p> Author: {booksData[0].author}</p>
      <p> Publication: {booksData[0].publication}</p>
      <p> Price: ₹{booksData[0].price}</p>
      <p> Edition: {booksData[0].edition}</p>
    </div>
    </div>
  )
}

export default books

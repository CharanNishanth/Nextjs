'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';


const BookCardCon = () => {
  const enteredBooks = useSelector((state) => state.book.enteredbooks || {});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(enteredBooks);
  }, [enteredBooks]);

  console.log('bookcardcon', books);

  return (
    <div>
      <BookCard books={books} />
    </div>
  );
};

export default BookCardCon;
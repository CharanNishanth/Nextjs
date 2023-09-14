'use client'
import React from 'react';
import BookListApiCon from './BookListApiCon';
import { Provider } from 'react-redux';
import store from '../store'

const BookList = () => {
  return (
    <Provider store={store}>
         <BookListApiCon />
    </Provider>
  )
}

export default BookList
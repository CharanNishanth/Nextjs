'use client'
import React from 'react'
import { Provider} from 'react-redux';
import store from '../store';
import BookCardCon from './BookCardCon'
import '../Home/Home.css'

const book = () => {
  return (
    <Provider store={store}>
       <BookCardCon />
    </Provider>
  )
}

export default book
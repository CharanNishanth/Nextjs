'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './store';
import HomePage from './Home/page';
import Link from 'next/link';


export default function Home() {
  
  return (
   <Provider store={store}>
   
      <nav>
        <Link href="/"> Home </Link>
        <Link href='/bookcard' > Bookcard </Link>
        <Link href='/booklist' > BookList </Link>
      </nav>
   
    <HomePage/>
   </Provider>
  )
}

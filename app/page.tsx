'use client';
import React from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  // const pageStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100vh',
  //   backgroundColor: '#f0f0f0',
  //   fontFamily: 'Arial, sans-serif',
  //   color: '#333',
  //   textAlign: 'center', // Center-align text within the container
  // };

  const headingStyle = {
    fontSize: '5rem', // Custom font size for the heading
    marginBottom: '10px', // Spacing between heading and paragraph
    color: '#007bff', // Custom text color for the heading
  };

  const paragraphStyle = {
    fontSize: '1.2rem', // Custom font size for the paragraph
    lineHeight: '1.6', // Custom line height for better readability
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleOnClick = () => {
    toast.success('Button Clicked!', {
      position: 'top-right',
      autoClose: 2000, // Close the notification after 2 seconds
    });
  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',backgroundColor:'#f0f0f0',fontFamily:'Arial, sans-serif',color:'#333',textAlign:'center'}}>
       <h1 style={headingStyle}>
         Read <Link href="posts">this page!</Link>
        </h1>
      <p style={paragraphStyle}>
        This is the homepage of my Next.js sample app. You can add more content here.
      </p>
      <button style={buttonStyle} onClick={handleOnClick}>Click Me</button>
      <ToastContainer />
    </div>
  );
};

export default HomePage;

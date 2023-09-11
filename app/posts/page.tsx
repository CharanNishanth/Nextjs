import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        textAlign: 'center', // Center-align text within the container
      };
      const headingStyle = {
        fontSize: '5rem', // Custom font size for the heading
        marginBottom: '10px', // Spacing between heading and paragraph
        color: '#007bff', // Custom text color for the heading
      };
      const headin2Style = {
        fontSize: '5rem', // Custom font size for the heading
        marginBottom: '10px', // Spacing between heading and paragraph
        color: '#e69202', // Custom text color for the heading
      };
    return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',backgroundColor:'#f0f0f0',fontFamily:'Arial,sans-serif',color:'#333',textAlign:'center'}}>
     <Head>
        <title>First Post</title>
    </Head>
    <h1 style={headingStyle}>First Post</h1>
    <h2 style={headin2Style}>
        <Link href="/">Back to home</Link>
    </h2>
    </div>
    )
}
import Link from "next/link";
import HomePage from "./HomePage";

export default function Page() {
  return (
    <>
      <nav>
        <Link href="/"> Home </Link>
        <Link href='/bookcardcon' > Bookcard </Link>
        <Link href='/booklistcon' > BookList </Link>
      </nav>
   
    <HomePage/>
    </>
  )
}

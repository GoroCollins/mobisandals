import React, { useState } from 'react'
import Shoes from './Shoes/Shoes'
import Footer from './Footer';

export default function HomePage() {
  const [count, setCount] = useState(8);
  return (
    <>
     <h1>Welcome to Mobi Sandals</h1>
     <Shoes count={count} setCount={setCount}/>
     <Footer />
     <footer>&copy; {new Date().getFullYear()}</footer>
    </>

  )
}
import React, { useState } from 'react'
import Shoes from './Shoes/Shoes'

export default function HomePage() {
  const [count, setCount] = useState(8);
  return (
    <>
     <h1>Welcome to the awesome shoe shop</h1>
     <Shoes count={count} setCount={setCount}/>
     <footer>&copy; {new Date().getFullYear()}</footer>
    </>

  )
}
import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from './Components/Navbar';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  // const [first, setFirst] = useState(0)
  // const [color, setColor] = useState(0)
  // for always refreshing pop up generate
  // useEffect(()=> {
  //   alert('Welcome');
  // },[])


  useEffect (()=>{
    alert('color changed');
    setColor(color + 1);
  },[count])

  // when value change pop up generate
  // useEffect (()=>{
  //   alert('Count is Changed');
  // },[count])

  // another
  // useEffect (()=>{
  //   alert('First is Changed');
  // },[first])
 // another
//  useEffect (()=>{
//   alert('Collor is Changed');
// },[color])


  return (
    <>     
      <Navbar color = { + color} />
      <h> This is a {count}</h>


      <h1>This is {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     
       
        {/* <button onClick={() => setFirst((first) => first + 1)}>
          First is {first}
        </button>

        <button onClick={() => setColor((color) => color + 1)}>
          Color is {color}
        </button> */}
    </>
  )
}

export default App
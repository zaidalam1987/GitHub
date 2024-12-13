import { useState } from 'react'
import './App.css'

function App() {
  const[color , setColor] = useState("black")
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(randomColor);

  
  // const generateRandomColor = function() {
  //     const hex = '0123456789ABCDEF';
  //     let color = '#';
  //     for (let i = 0; i < 6; i++) {
  //       color += hex[Math.floor(Math.random() * 16)];
  //     }
      
      // return generateRandomColor;
  
  }

  return (
    <>
      <div className = 'w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className = 'fixed flex flex-wrap justify-center shadow-lg bottom-4 inset-x-0 px-2'>
      <div className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-5xl'>
      
      <button onClick = {() => setColor("red")}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "red"}}>
      Red
      </button>
   
      <button onClick = {() => setColor("orange")}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "Orange"}}>
      Orange
      </button>
      
      <button onClick = {() => setColor("yellow")}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "Yellow"}}>
      Yellow
      </button>
      
      <button onClick = {() => setColor("Green")}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "Green"}}>
      Green
      </button>
      
      <button onClick = {() => setColor("purple")}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "Purple"}}>
      Purple
      </button>

      <button onClick = {() => setColor("Blue")}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "Blue"}}>
      Blue
      </button>

      <button onClick = {() => setColor("Pink")}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "Pink"}}>
      Pink
      </button>
      
      <button onClick = {generateRandomColor}
      className = 'px-4 py-3 rounded-full text-white shadow-lg'
      style ={{ backgroundColor: "black"}}>
      Generate Color 
      </button>
      
</div>
</div>
</div>
</>
  )
}

export default App

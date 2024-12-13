import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from "./Component/Card";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card name = "Zaid Alam" designation = "Senior Manager"/>
     <br />
     <Card name = "Subhan" designation = "Student"/>
    </>
  )
}

export default App

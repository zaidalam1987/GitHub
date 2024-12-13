import React from 'react'
// import ReactDom from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Aboutus from './Components/Aboutus/Aboutus.jsx'
import Contactus from './Components/Contactus/Contactus.jsx'
import User from './Components/User/User.jsx'


  // const router = createBrowserRouter([
  //  {
  //    path: '/',
  //    element: <Layout/>,
  //    children: [
  //  {
  //    path: '/',
  //    element: <Home/>
  //  },
  //  {
  //    path: 'about',
  //    element: <Aboutus/>
  //  },
  //  {
  //    path: 'contact',
  //    element: <Contactus/>
  //  },
  //    ] 
  //  } 
  // ])



  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/user/:userid" element={<User />} />
       <Route
       />
    </Route>  // Replace <App /> with your root component
  ))





createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router = {router} />
      
      // Replace  with your root component
  // </StrictMode>,
)
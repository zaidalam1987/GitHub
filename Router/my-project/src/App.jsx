import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Aboutus from './Components/Aboutus'
import Gallary from './Components/Gallary'
import Contactus from './Components/Contactus'
import Login from './Components/Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
function App () {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home/></>
  },
  {
    path: '/aboutus',
    element: <><Navbar/><Aboutus/></>
  },
  {
    path: '/contactus',
    element: <><Navbar/><Contactus/></>
  },
  {
    path: '/login/:username',
    element: <><Navbar/><Login/></>
  },
  {
    path: '/gallary',
    element: <><Navbar/><Gallary/></>
  },
 ])

  return (
    <>
     
      <RouterProvider router={router}/>
        

    </>
  )
}
export default App
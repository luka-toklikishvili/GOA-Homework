import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBroswerRouter,RouterProvider} from "react-router-dom"
import Navbar from './Navbar.jsx'


const router =createBroswerRouter([
  {path:"/",element:<App/>},
  {path:"/about",element:<Navbar /> },
  {path:"/create",element:<create/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
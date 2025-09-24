import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBroswerRouter,RouterProvider} from "react-router-dom"
import AboutCreate from './AboutCreate.jsx'
import HomeCreate from './HomeCreate.jsx'

const router =createBroswerRouter([
  {path:"/",element:<HomeCreate/>},
  {path:"/about",element:<AboutCreate /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

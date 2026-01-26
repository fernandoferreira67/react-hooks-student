import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from "./pages/Home.jsx"
import UseStatePage from "./pages/UseState.jsx"
import UseEffectPage from "./pages/UseEffect.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/useState',
    element: <UseStatePage />,
  },
   {
    path: '/useEffect',
    element: <UseEffectPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import '@/index.css'
import Layout from '../components/layout/Layout'
import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/HomePage'
import FanArt from '@/pages/FanArt'
import Redes from '@/pages/Redes'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "fan-art",
                element: <FanArt />
            },
            {
                path: "redes",
                element: <Redes />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

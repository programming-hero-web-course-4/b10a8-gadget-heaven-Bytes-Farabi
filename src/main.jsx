import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Errorpage from './Components/Errorpage.jsx';
import Home from './Components/Home.jsx';
import Statistics from './Components/Statistics.jsx';
import DashBoard from './Components/DashBoard.jsx';
import AllDeviceCard from './Components/AllDeviceCard.jsx';
import ProductDetails from './Components/ProductDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/public/Categories.json'),
        children: [
          {
            path: "/",
            element: <AllDeviceCard></AllDeviceCard>,
            loader: () => fetch('/public/Products.json')
          },
          {
            path: "/category/:category",
            element: <AllDeviceCard></AllDeviceCard>,
            loader: () => fetch('/public/Products.json')
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authenticate from './Components/Authenticate.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Categories.json'),
        children: [
          {
            path: "/",
            element: <AllDeviceCard></AllDeviceCard>,
            loader: () => fetch('/Products.json')
          },
          {
            path: "/category/:category",
            element: <AllDeviceCard></AllDeviceCard>,
            loader: () => fetch('/Products.json')
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
        loader: () => fetch('/Products.json')
      },
      {
        path: "/authenticate",
        element: <Authenticate></Authenticate>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </HelmetProvider>
  </StrictMode>,
)

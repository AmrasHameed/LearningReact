import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from './components/About';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Instamart from "./components/Instamart";


const Instamart = lazy(()=>import("./components/Instamart"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }, 
      {
        path: '/instamart',
        element: <Suspense><Instamart /></Suspense>
      }, 
      {
        path: 'restaurant/:resId',
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)
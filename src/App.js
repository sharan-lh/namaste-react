

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/AboutUs'));

const AppLayout = () => {
    return (<div className='app' >
        <Header/>
        <Outlet/>
    </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout />,
        children: [
            {
                path : "/",
                element: <Body />
            },
            {
                path : "/about",
                element: <Suspense fallback={<h1> loading screen</h1>}><About /></Suspense>
            },
            {
                path : "/contact",
                element: <Contact />
            },{
                path : "/resturants/:resId",
                element: <ResturantMenu />
            },
            {
                path : "/grocery",
                element: <Suspense fallback={<h1> loading screen</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/AboutUs'));
const Cart = lazy(() => import('./components/Cart'));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name : "Sharan L",
        };
        setUserName(data.name);
    },[]);

    
    return (
    <Provider store={appStore} >
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className='app' >
            <Header/>
            <Outlet/>
        </div>
    </UserContext.Provider>
    </Provider>
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
            },
            {
                path : "/cart",
                element: <Suspense fallback={<h1> loading screen</h1>}><Cart /></Suspense>
            }
        ],
        errorElement: <Error />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
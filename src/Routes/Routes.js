import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import CheckOut from "../Pages/CheckOut/CheckOut"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Order from "../Pages/Orders/Order"
import SignUp from "../Pages/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute"


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/checkout/:id',
                element:<CheckOut/>,
                loader : ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element:<PrivateRoute><Order/></PrivateRoute>
            }
        ]
    },
])
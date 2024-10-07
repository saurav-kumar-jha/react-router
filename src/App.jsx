import React, { createContext, useState } from "react";
import './index.css'
import Header from "./components/header/header";
import { Header2 } from "./components/header/Header2";
import { BrowserRouter as Router, Route, Routes, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Todo } from "./components/project/todo";
import { Trail } from "./components/protfolio/trail";
import { About } from "./components/protfolio/about";
import { Contact } from "./components/protfolio/contact";
import { Home } from "./components/protfolio/home";
import { Addskill } from "./components/protfolio/addskill";
import { useToast } from "react-toastify";
import { Showcart } from "./components/contextAPi/Showcart";
import { Cart, Cartprovider } from "./components/contextAPi/Cart";
import { Certificate } from "./components/protfolio/certificate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Trail />,
    children: [{
      path: "/about",
      element:<About/>
    },
    {
      path:"/skill",
      element:<Addskill/>
    },
    {
      path:'/contact',
      element:<Contact/>
     },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:"/certificate",
      element:<Certificate/>
    }
  ]
  }
])




// Cart Router ....................................
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Cart/>
//   },
//   {
//     path:"/cart",
//     element:<Showcart/>
//   }
// ])

function App() {
  return (
    <>
    {/* <Personname.Provider value={{Name,id , age}} > 
      <Context /> 
      <Show/>
      </Personname.Provider> */}
      <RouterProvider router={router} />

    </>
  )
}


export default App
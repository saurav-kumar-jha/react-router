import React from "react";
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
    }
  ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App

import React from "react";
import './index.css'
import Header from "./components/header/header";
import { Header2 } from "./components/header/Header2";
import { BrowserRouter as Router, Route, Routes, NavLink  } from "react-router-dom";
import { Todo } from "./components/project/todo";

function App(){
  return(
    <>
      <Todo/>
    </>
  )
}

export default App

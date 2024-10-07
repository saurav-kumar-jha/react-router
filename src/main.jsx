import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './components/home/home.jsx'
import { About } from './components/about/about.jsx'
import { Contect } from './components/Contant/contact.jsx'
import { Cartprovider } from './components/contextAPi/Cart.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>
  // <Cartprovider>
  //   <App/>
  // </Cartprovider>
)

import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import { Header2 } from "./components/header/Header2"
import { Outlet } from "react-router"

export const Layout = ()=>{
    return(
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
}
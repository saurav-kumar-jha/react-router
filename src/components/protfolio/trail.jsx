import { useState } from "react"
import { BiAdjust } from "react-icons/bi"
import { Nav } from "./nav"
import { About } from "./about"
import { Leftsection } from "./leftsection"
import { Outlet } from "react-router"
import { Bgbutton } from "./bgbutton"
import { Home } from "./home"


export const Trail = () => {
    const [bg, setbg] = useState('night')
    const [Class, setclass] = useState()
    const [bgclass, setbgclass] = useState()
    const handlebg = () => {
        setbg(bg != 'day' ? 'day' : 'night')
        setclass(bg)
        setbgclass(bg)
    }
    return (
        <>
            <main className={`h-[100vh] w-[100%] ${Class}`}>
                <Bgbutton handlebg={handlebg} />
                <section className="h-[90vh] w-[100%] flex items-center">
                    <div className="flex h-[90%] w-[100%]  gap-[30px] justify-center">
                        <Leftsection />
                        <main className="h-[400px] w-[60%] border border-transparent rounded px-6 py-4 blurd ">
                            <Outlet />
                        </main>
                        <Nav width='20%' />
                    </div>
                </section>
            </main>
        </>
    )
}
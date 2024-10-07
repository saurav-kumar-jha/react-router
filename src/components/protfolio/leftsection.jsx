import { BsGithub, BsThreads } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { HiDocumentText } from "react-icons/hi2"
import { RiTwitterXFill } from "react-icons/ri"

export const Leftsection = (props) => {
    return (
        <>
            <main className="h-[480px] w-[15%] border rounded border-transparent mx-[10px] glassmor">
                <div className="h-[114px] w-[110px] border border-[#44444400] mx-auto mt-[-20px] rounded object-cover ">
                    <img src="../profileimg.webp" alt="" className="rounded h-[114px] w-[110px] " />
                </div>
                <h1 className={`h-8 text-[20px] font-medium text-center`} >SAURAV KUMAR JHA</h1>
                <div className="h-[200px] w-[80%] m-auto my-[10px]  "></div>
                <div className="h-[40px] w-[80%] mx-auto my-[10px]  ">
                    <a href="#1" download><button className="h-[44px] w-[140px] px-[6px] py-1 border rounded-[20px] bg-blue-600 border-transparent font-semibold text-xl hover:underline hover:scale-105 flex items-center justify-center" ><HiDocumentText/> Resume</button></a>
                </div>
                <div className="h-[40px] w-[80%] my-[20px] mx-auto flex justify-between items-center gap-[10px] text-2xl ">
                    <a href=""><FaInstagram className="insta"/></a>
                    <a href=""><RiTwitterXFill className="x"/></a>
                    <a href=""><BsThreads className="thread"/></a>
                    <a href=""><BsGithub className="git"/></a>
                    <a href=""><FaLinkedin className="link" /></a>
                </div>
            </main>
        </>
    )
}
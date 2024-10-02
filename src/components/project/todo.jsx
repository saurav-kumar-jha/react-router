import { useState } from "react"
import { ImCross } from "react-icons/im"
import { TiTick } from "react-icons/ti"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { getLocalStorage, setLocalStorage } from "./localStorage";

export const Todo = () => {
    const [taskinput, settaskinput] = useState('')
    const [task, settask] = useState(()=> getLocalStorage())
    const handletask = (event) => {
        event.preventDefault()
        if (taskinput.trim() === "") return
        settask([
            ...task,
            taskinput
        ])
        settaskinput("")
    }
    if(task == null) return
     setLocalStorage(task)
    
    const handleremove = (index) => {
            const newtask = task.filter((_, k) => k !== index)
            toast.error("Task remove")
            settask(newtask)
    }
    const handledone = (index) => {
            const newTask = task.filter((_, k) => k !== index)
            toast.success("Task done!")
            settask(newTask)
    }
    return (
        <main className="h-auto  w-4/5 border border-zinc-800 rounded  py-3 px-2 my-5 bg-zinc-400 md:w-80 ">
            <h1 className="md:text-3xl text-xl font-semibold md:mx-16 mx-4">TODO APP</h1>
            <form className="h-auto border border-transparent rounded w-72 px-2 py-3">
                <div>
                    <input type="text" value={taskinput} onChange={(e) => settaskinput(e.target.value)} placeholder="Enter task: " className="md:w-32 w-20 border h-8 px-2 py-1.5 text-black bg-slate-200 rounded " />
                    <button onClick={handletask} className="h-auto outline-none md:w-28 w-20 mx-2 border rounded bg-green-800 text-white font-semibold text-base px-2 py-1 cursor-pointer">ADD</button>
                </div>
                <ul>
                    {task.map((tasks, index) => (
                        <li className="flex justify-evenly items-center w-44 md:w-64 h-8 text-left bg-zinc-600 text-black border rounded my-2 px-2 py-1.5 font-semibold from-neutral-800 text-lg" key={index} title={tasks}>
                            <div className="md:w-44 w-24">
                            {tasks}
                            </div>
                            <span className="cursor-pointer md:h-6 h-4 w-4 md:w-6 border rounded bg-green-600  flex justify-center items-center hover:border-black text-white" onClick={() => handledone(index)}><TiTick /></span>
                            <span className="cursor-pointer md:h-6 h-4 w-4  md:w-6 border rounded bg-red-600  flex justify-center items-center hover:border-black text-white" onClick={() => handleremove(index)}><ImCross /></span>
                        </li>
                    ))}

                </ul>
            </form>
            <ToastContainer />
        </main>
    )
}
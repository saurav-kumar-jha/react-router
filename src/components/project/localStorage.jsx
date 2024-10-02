const todokey = 'reactTODO'

export const getLocalStorage = ()=>{
    const newData = localStorage.getItem(todokey)
    if (!newData) return [];
    return JSON.parse(newData)
}

export const setLocalStorage = (task)=>{
    return localStorage.setItem(todokey,JSON.stringify(task))
}
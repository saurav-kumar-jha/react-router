import { createContext, useContext, useState } from "react"
import { Link } from "react-router-dom"

const Cartcontext = createContext()

export const Cartprovider = ({children})=>{
    const [cartitem ,setCartItems] = useState([])
    const addtocart = (product,price,quantity)=>{
        const newitem = {product,price,quantity}
        setCartItems((prev)=>[...prev,newitem])
        alert(`${product} added to cart`)
    }

    return(
        <Cartcontext.Provider value={{cartitem,addtocart}}>
            {children}
        </Cartcontext.Provider>
    )
}

export const Cart = () => {
    const { addtocart } = useContext(Cartcontext)
    const Product = "Toffee"
    const Price = 100
    const quantity = 2
    

    return (
        <Cartcontext.Provider value={{ Product, Price, quantity }}>
            <main className="h-[200px] w-[200px] bg-[#5c5a5a] text-white border border-wite rounded ">
                <p>{Product}</p>
                <p>{Price}</p>
                <p>{quantity}</p>
                <button onClick={()=>addtocart(Product,Price,quantity)} className="h-8 w-auto border border-black rounded cursor-pointer bg-[#ffffff2c]">Add to cart</button>
                <Link to="/cart"><button className="h-8 w-auto border border-black rounded cursor-pointer bg-[#a16e6e2c]">show cart</button> </Link>
            </main>
        </Cartcontext.Provider>
    )
}

export { Cartcontext }
import { React,useContext } from "react"
import { Cartcontext } from "./Cart"


export const Showcart = ()=>{
    const { cartitem } = useContext(Cartcontext)
    
    return(
        <main>
          <h1>Your cart</h1>
          {cartitem.length === 0?(
            <p>no item </p>
          ):(
            cartitem.map((item,index)=>(
                <div key={index}>
                    <p>{item.product}</p>
                    <p>{item.price} </p>
                    <p>{item.quantity} </p>
                </div>
            ))
          )}
        </main>
    )
}
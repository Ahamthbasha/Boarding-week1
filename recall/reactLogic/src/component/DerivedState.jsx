import React, { useState } from 'react'

const DerivedState = () => {
const [price, setPrice] = useState(100);
const [quantity, setQuantity] = useState(2);

const increment  = ()=>{
    setPrice((price)=>price+1)
}

const quantityIncrement = ()=>{
    setQuantity((quantity)=>quantity+1)
}

  return (
    <div>
        <h1>Price is : {price}</h1>
        <h1>Quantity is : {quantity}</h1>
        <h1>TotalPrice:{price * quantity}</h1>
        <button onClick={increment}>incrementCount</button>
        <button onClick={quantityIncrement}>Quantity</button>
    </div>
  )
}

export default DerivedState

import React, { useEffect, useState } from 'react'

const Cart = () => {
    const products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Mouse",
    price: 800,
    image: "https://via.placeholder.com/150",
  },
];

const getIntialState = ()=>{
    let data = localStorage.getItem('cartItems')
    return  JSON.parse(data) || []
}

const [items,setItems] = useState(getIntialState)

const addToCart = (productId)=>{
    const product = products.find((p)=>p.id == productId)

    setItems((items)=>{
        const exists = items.find((val)=>val.id == productId)

        if(exists){
            return items.map((val)=>val.id == productId ? {...val,quantity:val.quantity+1} : val)
        }

        return [...items,{...product,quantity:1}]
    })
}

const remove = (productId)=>{
    setItems((items)=>{
        return items.filter((val)=>val.id != productId)
    })
}

const increase = (productId)=>{
    setItems((items)=>{
        return items.map((val)=>val.id == productId ? {...val,quantity:val.quantity+1} : val)
    })
}

const decrease = (productId)=>{
    setItems((items)=>{
        return items.map((val)=>val.id == productId ? {...val,quantity : val.quantity-1} : val).filter((val)=>val.quantity > 0)
    })
}

useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(items))
},[items])

const totalAmount = ()=>{
    let sum = 0
    for(let i=0;i<items.length;i++){
        sum += items[i].quantity * items[i].price
    }
    return sum
}

  return (
    <div>
        <table border='1'>
            <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>actions</td>
            </tr>
            </thead>
            <tbody>
                {
                    products.map((val)=>{
                        return(
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>
                                <button onClick={()=>addToCart(val.id)}>AddToCart</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <h1>Cart Items</h1>

        <>
        <table border='1'>
            <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>IncreaseQty</td>
                <td>DecreaseQty</td>
                <td>Remove</td>
                <td>Amount</td>
            </tr>
            </thead>
            <tbody>
                {
                    items.map((val)=>{
                        return(
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.quantity}</td>
                                <td>
                                <button onClick={()=>increase(val.id)}>IncreaseQty</button>
                                </td>
                                <td>
                                <button onClick={()=>decrease(val.id)}>DecreaseQty</button>
                                </td>
                                <td>
                                <button onClick={()=>remove(val.id)}>Remove</button>
                                </td>
                                <td>{val.quantity * val.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h1>TotalAmount:{totalAmount()}</h1>
        </>

    </div>
  )
}

export default Cart

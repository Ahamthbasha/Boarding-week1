import React, { useEffect, useState } from "react";

const ShoppingCart = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 60000,
      qty: 1,
      stock: 5,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      qty: 1,
      stock: 10,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      qty: 1,
      stock: 15,
    },
  ];

  const getInitialState = ()=>{
    const data = localStorage.getItem('cart')
    return JSON.parse(data) || []
  }

  const [productsArr,setProducts] = useState(products)
  const [items, setItems] = useState(getInitialState);

  useEffect(()=>{
    let data = JSON.stringify(items)
    localStorage.setItem('cart',data)
  },[items])


  const addToCart = (productId) => {
    const filteredItem = productsArr.find((val) => val.id == productId);

    console.log(filteredItem)

    if(!filteredItem || filteredItem.stock == 0){
        alert('stock is over')
        return
    }

    setItems((prevItems) => {
      const check = prevItems.find((val) => val.id == productId);
      if (check) {
        return prevItems.map((val) =>
          val.id == productId ? { ...val, qty: val.qty + 1 } : val,
        );
      }

      return [...prevItems, {id:filteredItem.id,name:filteredItem.name,price:filteredItem.price,qty:filteredItem.qty}];
    });


    setProducts((prevProducts)=>{
       return prevProducts.map((val)=>val.id == productId ? {...val,stock:val.stock-1} : val)
    })


    
  };

  const decrease = (productId) => {
    setItems((prevItems) => {
      return prevItems
        .map((val) =>
          val.id == productId ? { ...val, qty: val.qty - 1 } : val,
        )
        .filter((val) => val.qty > 0);
    });

    setProducts((prevProducts)=>{
        return prevProducts.map((val)=>val.id == productId ? {...val,stock:val.stock+1} : val)
    })
  };

  const totalPrice = () => {
    let sum = 0;
    for (let val of items) {
      sum += val.qty * val.price;
    }

    return sum;
  };

  return (
    <div>
      <h1>Products</h1>
      <table border="1">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
            <td>quantity</td>
            <td>stock</td>
            <td>addToCart</td>
          </tr>
        </thead>
        <tbody>
          {productsArr.map((val) => (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.qty}</td>
              <td>{val.stock}</td>
              <td>
                <button onClick={() => addToCart(val.id)}>AddtoCart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>User Table</h1>
      {items.length > 0 ? (
        <>
          <table border="1">
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>price</td>
                <td>quantity</td>
                <td>finalPrice</td>
                <td>action</td>
              </tr>
            </thead>
            <tbody>
              {items.map((val) => (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <td>{val.qty}</td>
                  <td>{val.qty * val.price}</td>
                  <td>
                    <button onClick={() => decrease(val.id)}>Decrease</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>TotalPrice of your cart : {totalPrice()}</h1>
        </>
      ) : (
        <p>your cart is empty now</p>
      )}
    </div>
  );
};

export default ShoppingCart;

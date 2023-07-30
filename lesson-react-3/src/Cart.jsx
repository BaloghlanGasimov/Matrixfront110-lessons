import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
const Cart = () => {
    const { cartTotal } = useCart();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
  return (
    <div>Cart

<h1>Cart ({totalUniqueItems})</h1>
        
<ul>
        {items.map((item) => (
          <li key={item.id}>
            <img height={80} src={item.image} alt="" />
             {item.name} &mdash;
            <button className='btn btn-primary'
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className='btn btn-primary'
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className='btn btn-danger' onClick={() => removeItem(item.id)}>&times;</button>

            Mehsullarin sayi: {item.quantity}     
            ------
            Mehsulun umumi qiymeti : {item.quantity * item.price} $
          </li>
        ))}
      </ul>

      <h2>Cart total price : {cartTotal} $</h2>


    </div>
  )
}

export default Cart
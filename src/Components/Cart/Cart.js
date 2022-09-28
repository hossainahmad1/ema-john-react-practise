import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);


    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart-container'>
            <h3> Order Summary </h3>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total shipping: ${shipping}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;
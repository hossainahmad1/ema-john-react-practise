import React from 'react';
import './Product.css'
const Product = ({product,handleCart}) => {
    // console.log(props)
    // const { product, handleCart } = props;
    const { name, price, img, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>price: ${price} </p>
                <p><small>seller:{seller}</small></p>
                <p><small>ratings: {ratings}</small></p>
            </div>
            <button className='btn-cart'
                onClick={() => handleCart(product)}
            ><p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;
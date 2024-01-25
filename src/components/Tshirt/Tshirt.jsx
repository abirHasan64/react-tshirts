import React from 'react';
import './Tshirt.css'

const Tshirt = ({tShirt}) => {
    const {picture, name, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="product image" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;
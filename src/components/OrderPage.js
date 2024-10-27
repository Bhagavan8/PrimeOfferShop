import React, { useState } from 'react';
import '../css/OrderPage.css';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
 


    const products = [
        {
            id:1,
            title: 'Traditional wear',
            subtitle: 'Under ₹1,000',
            img: require('../images/IMG-20241014-WA0016.jpg'),
            link: '/orderpage'
        },
        {
            id:2,
            title: 'Women western wear',
            subtitle: 'Under ₹999',
            img: require('../images/IMG-20241014-WA0016.jpg'),
        },
        {
            id:3,
            title: 'Kids wear',
            subtitle: 'Under ₹500',
            img: require('../images/IMG-20241014-WA0016.jpg'),
        },
        {
            id:4,
            title: 'Mens traditional wear',
            subtitle: 'From ₹999',
            img: require('../images/IMG-20241014-WA0016.jpg'),
        },
        {
            id:5,
            title: 'Mens fashion wear',
            subtitle: 'From ₹999',
            img: require('../images/IMG-20241014-WA0016.jpg'),
        },
        {
            id:6,
            title: 'Kids fashion wear',
            subtitle: 'Shop Now!',
            img: require('../images/IMG-20241014-WA0016.jpg'),
        },
    ];

    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-page">
        <img src={product.img} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.subtitle}</p>
        <p>{product.subtitle}</p>
    </div>
    );
};

export default OrderPage;

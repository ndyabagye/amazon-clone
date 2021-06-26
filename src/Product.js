import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>UGX</small>
                    <strong>20000</strong>
                </p>
                <div className="product__rating">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Product

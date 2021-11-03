import React from 'react'

export default function Product(props) {
    const {
        // product_id,
        product_name,
        category_name,
        image_url,
        product_description,
        product_inventory,
        product_price
    } = props.product

    return (
        <div>
            <div>
                <img style={{ width: '100px', height: '100px' }} src={image_url} alt='cake' />
            </div>
            <div>
                <h3>{product_name}</h3>
                <div>
                    <div>category: {category_name}</div>
                    <div>description: {product_description}</div>
                    <div>price: {product_price}</div>
                    <div>inventory: {product_inventory}</div>
                </div>
            </div>
        </div>
    )
}
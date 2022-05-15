import React from 'react'

const CartItem = ({ item }) => {
    const {product, quantity} = item

    return(
        {product.product.name}
    )
}

CartItem.propTypes = {}

export default CartItem

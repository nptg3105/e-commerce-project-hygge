import React from 'react'

const CartItem = ({ item }) => {
	const { product, quantity } = item

	return (
		<div>
			<p>{product.name}</p>
		</div>
	)
}

CartItem.propTypes = {}

export default CartItem

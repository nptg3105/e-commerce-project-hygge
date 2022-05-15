/*eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'

const CartItem = ({ item }) => {
	const { product, quantity } = item

	return (
		<div>
			<p>{product.name}</p>
		</div>
	)
}

CartItem.propTypes = {
	item: PropTypes.object
}

export default CartItem

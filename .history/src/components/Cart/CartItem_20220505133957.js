/*eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'

const CartItem = ({ product }) => {
	return (
		<div>
			<p>{product.product.name}</p>
		</div>
	)
}

CartItem.propTypes = {
	product: PropTypes.object
}

export default CartItem

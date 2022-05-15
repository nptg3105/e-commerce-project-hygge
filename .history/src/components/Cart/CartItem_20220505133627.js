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
	item: PropTypes.object
}

export default CartItem

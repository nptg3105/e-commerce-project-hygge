/*eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'

const CartItem = ({ item }) => {
	const cartItems = useSelector(cartItemsCountSelector)

	return (
            {cartItems.map((cartItem) => (
                <div key={cartItem.product.id}>
                    <p>{cartItem.product.name}</p>
                </div>
            )}
	)
}

CartItem.propTypes = {
	item: PropTypes.object
}

export default CartItem

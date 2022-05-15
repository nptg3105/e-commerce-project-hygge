/*eslint-disable */
import QuantityField from 'components/FormControls/QuantityField'
import PropTypes from 'prop-types'
import React from 'react'

const CartItem = ({ product }) => {
	console.log(product)
	return (
		<div>
			<div className="cart__item">
				<div className="cart__img">
					<img src={product.product.product.img} />
				</div>
				<div className="cart__details">
					<div className="cart__product">{product.product.product.name}</div>
					<div className="cart__price">{product.product.product.price.actual}</div>
					<div className="cart__control">
						<QuantityField name="quantity" control={control} className="form-quantity" />
						<button>X</button>
					</div>
				</div>
			</div>
		</div>
	)
}

CartItem.propTypes = {
	product: PropTypes.object
}

export default CartItem

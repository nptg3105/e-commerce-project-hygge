/*eslint-disable */
import withLayout from 'components/withLayout'
import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.scss'
import CartItem from './CartItem'
import { cartTotalSelector } from './selector'

const CartFeature = () => {
	const cartTolal = useSelector(cartTotalSelector)
	const cartItems = useSelector(state => state.cart.cartItems)
	console.log(cartItems)

	return (
		<div>
			<div className="container">
				<div className="breadcum">
					<div className="breadcum__item">
						<a href="/">Home Page</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Categories</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Shopping Cart</a>
					</div>
				</div>
				<div className="cart__head">
					<div className="cart__box">
						<i className="sub-heading">- Your Cart</i>
						<h2 className="heading-primary">Shopping Cart</h2>
					</div>
					<a href="/" className="cart__btn btn btn-secondary">
						Clear All
					</a>
				</div>
				<div className="cart__list">
					<div className="cart__items">
						{cartItems.map(product => (
							<CartItem key={product.id} product={product} />
						))}
					</div>
					<div className="cart__checkout">
						<h3 className="cart__category">Cart Total</h3>
						<p className="cart__line">Shipping</p>
						<p className="cart__line cart__line--total">Total</p>
					</div>
				</div>
			</div>
		</div>
	)
}

CartFeature.propTypes = {}

export default withLayout(CartFeature)

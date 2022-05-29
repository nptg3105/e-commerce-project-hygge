import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatVND } from '../../utils/formatCurrency'
import Newsletter from '../Newsletter/Newsletter'
import withLayout from '../withLayout'
import './Cart.scss'
import CartItem from './CartItem'
import { removeAllItem } from './CartSlice'
import { cartTotalSelector } from './selector'

const CartFeature = () => {
	const cartTolal = useSelector(cartTotalSelector)
	const cartItems = useSelector(state => state.cart.cartItems)
	// console.log(cartItems)

	const dispatch = useDispatch()

	return (
		<div>
			<div className="container">
				<div id="breadcum">
					<div className="breadcum__item">
						<Link to="/">Home Page</Link>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<Link to="/products">Products</Link>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<span>Shopping Cart</span>
					</div>
				</div>
				<div className="cart__head">
					<div className="cart__box">
						<i className="sub-heading">- Your Cart</i>
						<h2 className="main-heading">Shopping Cart</h2>
					</div>
					<button
						type="button"
						onClick={() => {
							dispatch(removeAllItem())
						}}
						className="btn__cart btn btn--secondary"
					>
						Clear All
					</button>
				</div>
				<div className="cart__list">
				{cartItems = [] ? <p>Shopping now</p>}
					<div className="cart__items">
						{cartItems.map(product => (
							<CartItem key={product.id} product={product} />
						))}
					</div>
					<div className="cart__checkout">
						<div className="cart__checkout-box">
							<h3 className="cart__category">Cart Total</h3>
							<p className="cart__line">
								<p className="cart__text">Shipping:</p>
								<p className="cart__text" />
							</p>
							<p className="cart__line cart__line--total">
								<h4 className="cart__text">Total:</h4>
								<h4 className="cart__text">{formatVND(cartTolal)}</h4>
							</p>
						</div>
						<Link to="/checkout" className="btn btn--primary btn--full">
							Checkout
						</Link>
					</div>
				</div>

				<Newsletter />
			</div>
		</div>
	)
}

CartFeature.propTypes = {}

export default withLayout(CartFeature)

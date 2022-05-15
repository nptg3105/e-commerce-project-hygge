/*eslint-disable */
import withLayout from 'components/withLayout'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from './selector'

const CartFeature = () => {
	const cartTolal = useSelector(cartTotalSelector)

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
						<p className="sub-heading">- Your Cart</p>
						<h2 className="heading-primary">Shopping Cart</h2>
					</div>
					<a href="/" className="btn btn-secondary">
						Clear All
					</a>
				</div>
				<div className="cart__list">{cartTolal}</div>
			</div>
		</div>
	)
}

CartFeature.propTypes = {}

export default withLayout(CartFeature)

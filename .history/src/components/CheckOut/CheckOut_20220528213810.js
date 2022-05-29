import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'

const Checkout = () => {
	console.log(1)
	return (
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
					<Link to="/cart">Shopping Cart</Link>
					<i className="fa-solid fa-angle-right" />
				</div>
				<div className="breadcum__item">
					<span>Checkout</span>
				</div>
			</div>
			<div className="checkout">
				<div className="checkout__box">
					<i className="sub-heading">- Almost There</i>
					<h2 className="main-heading">Checkout</h2>
				</div>
			</div>
		</div>
	)
}

export default withLayout(Checkout)

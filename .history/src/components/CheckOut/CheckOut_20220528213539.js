import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'

const CheckOut = () => {
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
		</div>
	)
}

export default withLayout(CheckOut)

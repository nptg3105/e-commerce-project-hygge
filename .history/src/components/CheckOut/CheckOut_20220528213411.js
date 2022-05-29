import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'

const CheckOut = () => {
	console.log(1)
	return (
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
	)
}

export default withLayout(CheckOut)

import React from 'react'
import { Link } from 'react-router-dom'

const Breadcum = () => (
	<div className="breadcum">
		<div className="breadcum__item">
			<a href="/">Home Page</a>
			<i className="fa-solid fa-angle-right" />
		</div>
		<div className="breadcum__item">
			<Link to="/products">Categories</Link>
			<i className="fa-solid fa-angle-right" />
		</div>
		<div className="breadcum__item">
			<a href="/">{productDetail.product?.category}</a>
			<i className="fa-solid fa-angle-right" />
		</div>
		<div className="breadcum__item">
			<a href="/">{productDetail.product?.name}</a>
		</div>
	</div>
)

Breadcum.propTypes = {}

export default Breadcum

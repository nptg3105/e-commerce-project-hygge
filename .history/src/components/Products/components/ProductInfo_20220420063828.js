import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => (
	<div className="container">
		<div className="breadcum">
			<div className="breadcum__item">
				<a href="/">Home Page</a>
				<i className="fa-solid fa-angle-right" />
			</div>
			<div className="breadcum__item">
				<a href="/">Navigation</a>
				<i className="fa-solid fa-angle-right" />
			</div>
			<div className="breadcum__item">
				<a href="/">Products</a>
			</div>
		</div>
		<p>{productDetail.product?.name}</p>
		<p>{productDetail.product?.category}</p>
	</div>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

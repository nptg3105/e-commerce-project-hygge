import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => (
	<section className="product-detail">
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
					<a href="/">{productDetail.product?.category}</a>
					<i className="fa-solid fa-angle-right" />
				</div>
				<div className="breadcum__item">
					<a href="/">{productDetail.product?.name}</a>
				</div>
			</div>
			<div className="product-detail__box" />
		</div>
	</section>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

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
			<div className="product-detail__infor">
				<div className="product-detail__photo">
					<img className="product-detail__image" src={productDetail.product?.img} alt={productDetail.product?.name} />
				</div>
				<div className="product-detail__box">
					<p className="sub-heading">- {productDetail.product?.category} </p>
					<h2 className="heading-primary">{productDetail.product?.name}</h2>
				</div>
			</div>
		</div>
	</section>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

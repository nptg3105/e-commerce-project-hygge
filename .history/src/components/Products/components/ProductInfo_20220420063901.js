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
				<a href="/">Categories</a>
				<i className="fa-solid fa-angle-right" />
			</div>
			<div className="breadcum__item">
				<a href="/">
					{productDetail.product?.category}
					<i className="fa-solid fa-angle-right" />
				</a>
			</div>
			<div className="breadcum__item">
				<a href="/">
					{productDetail.product?.name}
					<i className="fa-solid fa-angle-right" />
				</a>
			</div>
		</div>
	</div>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => (
	<div className="container">
		<p>123</p>
		<p>{productDetail.product?.name}</p>
		<p>{productDetail.product?.category}</p>
	</div>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

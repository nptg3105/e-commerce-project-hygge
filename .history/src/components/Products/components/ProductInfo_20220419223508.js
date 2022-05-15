import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => (
	<>
		<p>{productDetail.category}</p>
		<p>{productDetail?.desc}</p>
		<p>123456</p>
	</>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

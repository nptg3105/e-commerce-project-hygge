import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => (
	<>
		<p>{productDetail.product.category}</p>
		<p>{productDetail.desc}</p>
		{console.log(`${productDetail.desc}`)}
		<p>123456</p>
	</>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

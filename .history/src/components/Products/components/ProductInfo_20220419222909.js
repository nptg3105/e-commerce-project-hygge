import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ product }) => (
	<>
		<p>{product.category}</p>
		<p>{product?.desc}</p>
		<p>123456</p>
	</>
)

ProductInfo.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductInfo

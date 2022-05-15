import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ product }) => (
	<>
		<p>{product.name}</p>
		<p>{product?.desc}</p>
	</>
)

ProductInfo.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductInfo

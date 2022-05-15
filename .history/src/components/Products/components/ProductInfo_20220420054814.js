import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => (
	<>
		<p>{productDetail.product.category}</p>
		<p>{productDetail.desc}</p>
	</>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

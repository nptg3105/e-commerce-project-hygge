import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => (
	<>
		<p>{productDetail.name}</p>
		<p>{productDetail.desc}</p>
	</>
)

ProductInfo.propTypes = {
	result: PropTypes.object.isRequired
}

export default ProductInfo

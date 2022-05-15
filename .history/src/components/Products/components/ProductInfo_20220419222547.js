import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetails }) => (
	<>
		<p>{productDetails.name}</p>
		<p>{productDetails.desc}</p>
	</>
)

ProductInfo.propTypes = {
	productDetails: PropTypes.object.isRequired
}

export default ProductInfo

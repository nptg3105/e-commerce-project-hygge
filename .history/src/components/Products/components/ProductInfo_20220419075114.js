import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ product }) => {
	const { desc } = product
	return <p>{desc}</p>
}

ProductInfo.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductInfo

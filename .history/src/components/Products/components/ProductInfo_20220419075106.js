import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ product, message }) => {
	const { desc } = product
	console.log(message)
	return <p>{desc}</p>
}

ProductInfo.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductInfo

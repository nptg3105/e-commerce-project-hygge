import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ product, message }) => {
	const { desc, name } = product
	return (
		<>
			<p>{name}</p>
			<p>{desc}</p>
			<p>{message}</p>
		</>
	)
}

ProductInfo.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductInfo

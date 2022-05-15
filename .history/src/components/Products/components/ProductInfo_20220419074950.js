import React from 'react'

const ProductInfo = ({ product }) => {
	const { desc } = product
	return <p>{desc}</p>
}

ProductInfo.propTypes = {
	product: PropTypes.object
}

export default ProductInfo

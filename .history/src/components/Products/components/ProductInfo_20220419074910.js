import React from 'react'

const ProductInfo = ({ product }) => {
	const { desc } = product
	return <p>{desc}</p>
}

ProductInfo.propTypes = {}

export default ProductInfo

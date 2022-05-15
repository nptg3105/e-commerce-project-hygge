import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ productDetail }) => {
	const { desc, name } = productDetail
	return (
		<>
			<p>{name}</p>
			<p>{desc}</p>
		</>
	)
}

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo

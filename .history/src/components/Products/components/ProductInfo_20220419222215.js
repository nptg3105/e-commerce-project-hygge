import PropTypes from 'prop-types'
import React from 'react'

const ProductInfo = ({ result }) => {
	const { desc, name } = result
	return (
		<>
			<p>{name}</p>
			<p>{desc}</p>
		</>
	)
}

ProductInfo.propTypes = {
	result: PropTypes.object.isRequired
}

export default ProductInfo

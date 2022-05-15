import PropTypes from 'prop-types'
import React from 'react'

const Product = ({ product }) => {
	console.log(product)
	return <div>{product.name}</div>
}

Product.propTypes = {
	product: PropTypes.object
}

export default Product

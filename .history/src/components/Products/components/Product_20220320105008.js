import PropTypes from 'prop-types'
import React from 'react'

const Product = ({ product }) => (
	// console.log(product)
	<div>{product.name}</div>
)

Product.propTypes = {
	product: PropTypes.object
}
Product.defaultProps = {
	product: {}
}
export default Product

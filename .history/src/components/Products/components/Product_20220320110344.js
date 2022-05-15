import PropTypes from 'prop-types'
import React from 'react'

const Product = ({ products }) => (
	// console.log(product)
	<div>{products.name}</div>
)

Product.propTypes = {
	products: PropTypes.object
}
Product.defaultProps = {
	products: {}
}
export default Product

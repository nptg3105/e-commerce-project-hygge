import PropTypes from 'prop-types'
import React from 'react'

const Product = ({ product }) => (
	// console.log(product)
	<>
		<img src={product.img} alt={product.name} className="product_img" />
		<div>{product.name}</div>
		<p>{product.desc}</p>
	</>
)

Product.propTypes = {
	product: PropTypes.object
}
Product.defaultProps = {
	product: {}
}
export default Product

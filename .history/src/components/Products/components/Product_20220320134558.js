import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'

const Product = ({ product }) => (
	// console.log(product)
	<div className="product_item">
		<img src={product.img} alt={product.name} className="product_img" />
		<div>{product.name}</div>
	</div>
)

Product.propTypes = {
	product: PropTypes.object
}
Product.defaultProps = {
	product: {}
}
export default Product

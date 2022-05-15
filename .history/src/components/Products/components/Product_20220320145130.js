import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'

const Product = ({ product }) => (
	// console.log(product)
	<div className="product_item">
		<div className="product_img">
			<img src={product.img} alt={product.name} />
		</div>
		<div className="product_name">{product.name}</div>
		<div className="product_detail">
			<div className="product_category">{product.category}</div>
			<div className="product_price product_price--old">{product.price.old}</div>
			<div className="product_price product_price--actual">{product.price.actual}</div>
		</div>
	</div>
)

Product.propTypes = {
	product: PropTypes.object
}
Product.defaultProps = {
	product: {}
}
export default Product

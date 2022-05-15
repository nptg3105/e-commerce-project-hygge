import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'

const Product = ({ product }) => (
	// console.log(product)
	<div className="product_item">
		<div className="product_img">
			<img src={product.img} alt={product.name} />
		</div>
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

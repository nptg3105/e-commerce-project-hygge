import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'

const Product = ({ product }) => (
	// console.log(product)
	<div className="product_item">
		<div className="product_img">
			<img src={product.img} alt={product.name} />
			<p className="product_img-text">Add to Cart</p>
		</div>
		<div className="product_desc">
			<div className="product_name ">{product.name}</div>
			<div className="product_detail">
				<div className="product_category green">{product.category}</div>
				<div className="product_price product_price--old">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price.old)}</div>
				
				<div className="product_price product_price--actual">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price.actual)}</div>
			</div>
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

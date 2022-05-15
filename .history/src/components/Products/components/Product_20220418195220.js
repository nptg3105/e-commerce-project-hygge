import PropTypes from 'prop-types'
import React from 'react'
import { formatVND } from 'utils/formatCurrency'
import '../Product.scss'

const Product = ({ product }) => {
	const handleClick = () => {
		// Navigate to DetailPage: /products/:productId
	}

	return (
		<div className="product_item" onClick={handleClick}>
			<div className="product_img">
				<img src={product.img} alt={product.name} />
				<p className="product_img-text">Add to Cart</p>
			</div>
			<div className="product_desc">
				<div className="product_name ">{product.name}</div>
				<div className="product_detail">
					<div className="product_category green">{product.category}</div>
					<div className="product__price">
						{!product.newest && (
							<div className="product__price product__price--old">{formatVND(product.price.old)}</div>
						)}
						<div className="product__price product__price--actual">{formatVND(product.price.actual)}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Product.propTypes = {
	product: PropTypes.object
}
Product.defaultProps = {
	product: {}
}
export default Product

import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatVND } from 'utils/formatCurrency'
import '../Product.scss'

const RelatedProduct = ({ product }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		// Navigate to DetailPage: /products/:productId

		navigate(`/products/${product.id}`)
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

RelatedProduct.propTypes = {
	product: PropTypes.object
}
RelatedProduct.defaultProps = {
	product: {}
}
export default RelatedProduct

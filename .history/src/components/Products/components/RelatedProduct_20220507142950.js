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
		<div className="related-product_item" onClick={handleClick}>
			<div className="related-product">
				<img src={product.img} alt={product.name} />
				<p className="related-product_img-text">Add to Cart</p>
			</div>
			<div className="related-product_desc">
				<div className="related-product_name ">{product.name}</div>
				<div className="related-product_detail">
					<div className="related-product_category green">{product.category}</div>
					<div className="related-product__price">
						{!product.newest && (
							<div className="related-product__price related-product__price--old">{formatVND(product.price.old)}</div>
						)}
						<div className="related-product__price related-product__price--actual">
							{formatVND(product.price.actual)}
						</div>
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

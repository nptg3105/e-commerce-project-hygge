import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatVND } from 'utils/formatCurrency'
import '../RelatedProduct.scss'

const RelatedProduct = ({ product }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		// Navigate to DetailPage: /products/:productId

		navigate(`/products/${product.id}`)
	}

	return (
		<div className="related__item" onClick={handleClick}>
			<div className="related__img">
				<img src={product.img} alt={product.name} />
				<p className="related_img-text">Add to Cart</p>
			</div>
			<div className="related__desc">
				<div className="related__name ">{product.name}</div>
				<div className="related__detail">
					<div className="related__category green">{product.category}</div>
					<div className="related__price">
						{!product.newest && (
							<div className="related__price related__price--old">{formatVND(product.price.old)}</div>
						)}
						<div className="related__price related__price--actual">{formatVND(product.price.actual)}</div>
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

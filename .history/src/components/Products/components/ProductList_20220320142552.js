import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'

const ProductList = ({ data }) => (
	<section className="product">
		<div className="container">
			<div className="product_list">
				{data.map(product => (
					<div item key={product.id}>
						<Product product={product} />
					</div>
				))}
			</div>
		</div>
	</section>
)
ProductList.propTypes = {
	data: PropTypes.array
}

ProductList.defaultProps = {
	data: []
}

export default ProductList

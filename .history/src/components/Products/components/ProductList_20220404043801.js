import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'

const ProductList = ({ data }) => (
	<div className="container">
		{/* <ProductFilter filters={filters} oncChange={handleFiltersChange} /> */}
		<div className="product_list">
			{data.map(product => (
				<div key={product.id}>
					<Product product={product} />
				</div>
			))}
		</div>
	</div>
)
ProductList.propTypes = {
	data: PropTypes.array
}

ProductList.defaultProps = {
	data: []
}

export default ProductList

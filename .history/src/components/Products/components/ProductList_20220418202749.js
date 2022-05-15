import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'

const ProductList = ({ productList }) => (
	<div className="container">
		{/* <ProductFilter filters={filters} oncChange={handleFiltersChange} /> */}
		<div className="product_list">
			{productList.map(product => (
				<div key={product.id}>
					<Product product={product} />
				</div>
			))}
		</div>
	</div>
)
ProductList.propTypes = {
	productList: PropTypes.array
}

ProductList.defaultProps = {
	productList: []
}

export default ProductList

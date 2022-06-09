import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'

const ProductList = ({ productList }) => (
	<div>
		{/* <ProductFilter filters={filters} oncChange={handleFiltersChange} /> */}
		<div className="product_list mb-112">
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

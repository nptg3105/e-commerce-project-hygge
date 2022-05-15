import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'

const RelatedProduct = ({ productList, productDetail }) => (
	<div className="container">
		{/* <ProductFilter filters={filters} oncChange={handleFiltersChange} /> */}
		<div className="product_list">
			{productList.filter(product => product.name === productDetail.product.name ).map(product => (
				<div key={product.id}>
					<Product product={product} />
				</div>
			))}
		</div>
	</div>
)
RelatedProduct.propTypes = {
	productList: PropTypes.array
	productDetail: PropTypes.object.isRequired

}

RelatedProduct.defaultProps = {
	productList: []
}

export default RelatedProduct

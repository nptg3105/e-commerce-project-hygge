import { Grid } from '@mui/material/index'
import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'

const ProductList = ({ data }) => (
	<section className="product">
		<div className="container">
			<div className="product_list">
				{data.map(product => (
					<Grid item key={product.id} xs={12} sm={6} md={3} lg={4}>
						<Product product={product} />
					</Grid>
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

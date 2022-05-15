import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'
import ProductFilter from './ProductFilter'

const ProductList = ({ data }) => {
	console.log(1)

	return (
		<section className="product">
			<div className="container">
				<div className="breadcum">
					<div className="breadcum__item">
						<a href="/">Home Page</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Navigation</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Products</a>
					</div>
				</div>
				<ul className="login__text">
					<i>- Products</i>
				</ul>
				<h3 className="login__create">Explore the Products</h3>
				<ProductFilter filters={filters} oncChange={handleFiltersChange} />
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
}
ProductList.propTypes = {
	data: PropTypes.array
}

ProductList.defaultProps = {
	data: []
}

export default ProductList

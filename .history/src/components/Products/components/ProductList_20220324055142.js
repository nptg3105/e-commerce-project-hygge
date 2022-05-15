import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'
import Product from './Product'

const ProductList = ({ data }) => (
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
			<div className="filters-sorting">
				<div className="filters">
					<div className="filter__color">Color</div>
					<div className="filter__category">Category</div>
					<div className="filter__price">Price Range</div>
					<div className="filter__sort">Sort By</div>
				</div>
			</div>

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

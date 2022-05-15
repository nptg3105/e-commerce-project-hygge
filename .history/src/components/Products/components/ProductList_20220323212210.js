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
					<a href="/">Login</a>
				</div>
			</div>
			<ul className="login__text">
				<i>- Login</i>
			</ul>
			<h3 className="login__create">Login to Your Account</h3>
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

import withLayout from 'components/withLayout'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from './selector'

const CartFeature = () => {
	const cartTolal = useSelector(cartTotalSelector)

	return (
		<div>
			<div className="container">
				<div className="breadcum">
					<div className="breadcum__item">
						<a href="/">Home Page</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Categories</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Shopping Cart</a>
						<i className="fa-solid fa-angle-right" />
					</div>
				</div>
				<div>Cart features</div>
				{cartTolal}
			</div>
		</div>
	)
}

CartFeature.propTypes = {}

export default withLayout(CartFeature)

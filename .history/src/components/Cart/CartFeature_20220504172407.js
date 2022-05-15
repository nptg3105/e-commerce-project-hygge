import withLayout from 'components/withLayout'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from './selector'

const CartFeature = () => {
	const cartTolal = useSelector(cartTotalSelector)

	return (
		<div>
			<div className="container" />
		</div>
	)
}

CartFeature.propTypes = {}

export default withLayout(CartFeature)

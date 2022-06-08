import React from 'react'
import withLayout from '../withLayout'

const PlaceOrder = () => (
	<div className="place-order container">
		<h2>Order Success</h2>
		<h3>The shipper will contact you as soon as possible.</h3>
	</div>
)

PlaceOrder.propTypes = {}

export default withLayout(PlaceOrder)

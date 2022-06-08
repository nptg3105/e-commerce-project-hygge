import React from 'react'
import withLayout from '../withLayout'
import './PlaceOrder.scss'

const PlaceOrder = () => (
	<div className="place-order container">
		<h2>Order Success</h2>
		<h3>The shipper will contact you as soon as possible.</h3>
		<h3>Thank you for supporting us.</h3>
		<img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width="250" />
	</div>
)

PlaceOrder.propTypes = {}

export default withLayout(PlaceOrder)

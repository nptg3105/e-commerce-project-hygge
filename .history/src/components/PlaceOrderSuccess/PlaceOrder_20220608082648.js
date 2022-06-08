import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import React from 'react'
import withLayout from '../withLayout'
import './PlaceOrder.scss'

const PlaceOrder = () => (
	<div className="place-order container">
		<h2>Order Success</h2>
		<LocalShippingIcon className="icon" />
		<h3>Thank you for supporting us!</h3>
	</div>
)

PlaceOrder.propTypes = {}

export default withLayout(PlaceOrder)

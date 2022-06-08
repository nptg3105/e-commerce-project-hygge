import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import React from 'react'
import withLayout from '../withLayout'
import './PlaceOrder.scss'

const PlaceOrder = () => (
	<div className="place-order container">
		<h2>Order Success</h2>
		<CheckCircleIcon />
		<h3>The shipper will contact you as soon as possible.</h3>
		<h3>Thank you for supporting us.</h3>
		{/* <iframe src="https://giphy.com/embed/o71pz8r3l3JtBEC5x4" width="480" height="275" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/parcelLab-delivery-done-parcellab-o71pz8r3l3JtBEC5x4">via GIPHY</a></p> */}
	</div>
)

PlaceOrder.propTypes = {}

export default withLayout(PlaceOrder)

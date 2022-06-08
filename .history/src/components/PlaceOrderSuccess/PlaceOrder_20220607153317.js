import React from 'react'
import withLayout from '../withLayout'
import './PlaceOrder.scss'

const PlaceOrder = () => (
	<div className="place-order container">
		<h2>Order Success</h2>
		<h3>The shipper will contact you as soon as possible.</h3>
		<h3>Thank you for supporting us.</h3>
		{/* <iframe src="https://giphy.com/embed/o71pz8r3l3JtBEC5x4" width="480" height="275" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/parcelLab-delivery-done-parcellab-o71pz8r3l3JtBEC5x4">via GIPHY</a></p> */}

		<div style="width:100%;height:0;padding-bottom:100%;position:relative;">
			<iframe
				src="https://giphy.com/embed/uCHMKHJLZDtl9B3604"
				width="100%"
				height="100%"
				style="position:absolute"
				frameBorder="0"
				className="giphy-embed"
				allowFullScreen
			/>
		</div>
		<p>
			<a href="https://giphy.com/gifs/uCHMKHJLZDtl9B3604">via GIPHY</a>
		</p>
	</div>
)

PlaceOrder.propTypes = {}

export default withLayout(PlaceOrder)

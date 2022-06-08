import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'
import './PlaceOrder.scss'

const PlaceOrder = () => (
	<div className="container">
		<div className="place-order ">
			<h2>Order Success</h2>
			<LocalShippingIcon className="icon" />
			<h3>Thank you for supporting us!</h3>
			<div className="place-order__btn">
				<Link to="/products" className="btn--primary btn">
					Shopping Now
				</Link>
				<Link to="/" className=" btn btn--secondary">
					Back to Hompage
				</Link>
			</div>
		</div>
	</div>
)

PlaceOrder.propTypes = {}

export default withLayout(PlaceOrder)

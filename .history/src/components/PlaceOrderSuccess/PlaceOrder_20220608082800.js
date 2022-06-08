import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import React from 'react'
import withLayout from '../withLayout'
import './PlaceOrder.scss'

const PlaceOrder = () => (
	<div className="place-order container">
		<h2>Order Success</h2>
		<LocalShippingIcon className="icon" />
		<h3>Thank you for supporting us!</h3>
		<div className="cart__btn">
			<Link to="/products" className="btn--primary btn">
				Shopping Now
			</Link>
			<button
				type="button"
				onClick={() => {
					dispatch(removeAllItem())
				}}
				className=" btn btn--secondary"
			>
				Clear All
			</button>
		</div>
	</div>
)

PlaceOrder.propTypes = {}

export default withLayout(PlaceOrder)

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import React from 'react'
import { Controller } from 'react-hook-form'
import { decreaseQuantity, increaseQuantity } from 'redux/actions/auth'
import './InputField.scss'

const QuantityField = props => {
	const { form, name, label } = props
	const { errors } = form
	const hasError = !!errors[name]

	console.log(quantity)

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ value, name }) => (
				<div>
					{hasError && <i className="error">{errors[name]}</i>}
					<div className="product-detail__change" type="button" onClick={() => dispatch(decreaseQuantity())}>
						<ArrowBackIosNewIcon />
					</div>
					<input type="number" label={label} id={name} />

					<div className="product-detail__change" type="button" onClick={() => dispatch(increaseQuantity())}>
						<ArrowForwardIosIcon />
					</div>
				</div>
			)}
		/>
	)
}

export default QuantityField

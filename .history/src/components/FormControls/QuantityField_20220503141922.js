import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, ...restProps }) => {
	const [quantity, setQuantity] = useState(1)
	const handleCountChange = countChange => {
		let value = quantity + countChange
		if (value < 1) {
			value = 1
		} else {
			setQuantity(value)
		}
	}
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState }) => (
				<div>
					<div className="product-detail__change" type="button" onClick={() => handleCountChange(-1)}>
						<ArrowBackIosNewIcon />
					</div>
					{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
					<input quantity={quantity} type="number" {...field} {...restProps} />
					<div className="product-detail__change" type="button" onClick={() => handleCountChange(1)}>
						<ArrowForwardIosIcon />
					</div>
				</div>
			)}
		/>
	)
}

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired
}

export default QuantityField

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, value, ...restProps }) => {
	const [quantity, setQuantity] = useState(1)
	const handleQuantityChange = valueChange => {
		setQuantity(quantity + valueChange)
	}
	return (
		<Controller
			name={name}
			control={control}
			value={value}
			render={({ field, formState }) => (
				<div>
					<button type="button" onClick={() => handleQuantityChange(-1)}>
						<ArrowBackIosNewIcon />
						{console.log(-1)}
					</button>
					{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
					<input type="number" value={quantity} {...field} {...restProps} />
					<button type="button" onClick={() => handleQuantityChange(1)}>
						<ArrowForwardIosIcon />
						{console.log(1)}
					</button>
				</div>
			)}
		/>
	)
}

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired
}

export default QuantityField
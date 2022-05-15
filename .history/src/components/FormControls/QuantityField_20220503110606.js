import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, value, ...restProps }) => {
	// const handleQuantityChange = valueChange => {
	// 	setQuantity(quantity + valueChange)
	// }

	const [count, setCount] = useState(1)
	const handleCountChange = countChange => {
		let value = count + countChange
		if (value < 1) {
			value = 1
		} else {
			setCount(value)
		}
	}
	return (
		<Controller
			name={name}
			control={control}
			value={value}
			render={({ field, formState }) => (
				<div>
					<div className="product-detail__change" type="button" onClick={() => handleCountChange(-1)}>
						<ArrowBackIosNewIcon />
					</div>
					{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
					<input type="number" {...field} {...restProps} />
					<div className="product-detail__change" type="button" onClick={() => handleCountChange(1)}>
						<ArrowForwardIosIcon />
						{console.log(+1)}
					</div>
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

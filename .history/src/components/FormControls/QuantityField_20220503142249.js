import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, setValues, ...restProps }) => {
	const [quantity, setQuantity] = useState(1)
	const handleCountChange = countChange => {
		let count = quantity + countChange
		if (count < 1) {
			count = 1
		} else {
			setQuantity(count)
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
					<input value={setValues} setValues={quantity} type="number" {...field} {...restProps} />
					{quantity}
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
	setValues: PropTypes.number.isRequired
}

export default QuantityField

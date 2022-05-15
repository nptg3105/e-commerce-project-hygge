import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, ...restProps }) => {
	const [quantity, setQuantity] = useState(1)
	const handleQuantityChange = valueChange => {
		setQuantity(quantity + valueChange)
	}
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState }) => (
				<div>
					<button className="product-detail__change" type="button" onClick={() => handleQuantityChange(-1)}>
						<ArrowBackIosNewIcon />
					</button>
					{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
					<input value={quantity} {...field} {...restProps} />
					<button className="product-detail__change" type="button" onClick={() => handleQuantityChange(1)}>
						<ArrowBackIosNewIcon />
					</button>
				</div>
			)}
		/>
	)
}

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default QuantityField

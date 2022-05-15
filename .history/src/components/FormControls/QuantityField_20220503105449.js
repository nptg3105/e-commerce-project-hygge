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
					<div className="product-detail__change" type="button" onClick={() => handleQuantityChange(-1)}>
						<ArrowBackIosNewIcon />
					</div>
					{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
					<input type="number" value={quantity} {...field} {...restProps} />
					<div className="product-detail__change" type="button" onClick={() => handleQuantityChange(1)}>
						<ArrowBackIosNewIcon />
					</div>
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

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import './QuantityField.scss'

const QuantityField = ({ name, control, , ...restProps }) => {
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
					<div className="product-detail__number">
						<div className="product-detail__change" type="button" onClick={() => handleCountChange(-1)}>
							<ArrowBackIosNewIcon />
						</div>
						{quantity}
						{console.log(value)}
						<input value={quantity} type="number" className="product-detail__input" {...field} {...restProps} />
						<div className="product-detail__change" type="button" onClick={() => handleCountChange(1)}>
							<ArrowForwardIosIcon />
						</div>
						{!!formState.errors[name] && (
							<i className="product-detail__error error">{formState.errors[name].message}</i>
						)}
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

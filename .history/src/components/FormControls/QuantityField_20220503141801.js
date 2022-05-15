import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, quantity, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState }) => (
			<div>
				<div className="product-detail__change" type="button" onClick={() => handleCountChange(-1)}>
					<ArrowBackIosNewIcon />
				</div>
				{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
				<input value={quantity} type="number" {...field} {...restProps} />

				<div className="product-detail__change" type="button" onClick={() => handleCountChange(1)}>
					<ArrowForwardIosIcon />
				</div>
			</div>
		)}
	/>
)

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired
}

export default QuantityField

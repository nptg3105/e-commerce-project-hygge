import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import './InputField.scss'

const quantity = useSelector(getQuantity)

const QuantityField = ({ name, control, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState, name }) => (
			<div>
				{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
				<input {...field} {...restProps} value={quantity} />
			</div>
		)}
	/>
)

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default QuantityField

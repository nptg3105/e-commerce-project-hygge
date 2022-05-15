import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, value, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		value={value}
		render={({ field, formState }) => (
			<div>
				{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
				<input {...field} {...restProps} />
			</div>
		)}
	/>
)

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default QuantityField

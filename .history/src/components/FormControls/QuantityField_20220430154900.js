import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState, value, name }) => (
			<div>
				{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
				<input value={value} {...field} {...restProps} />
			</div>
		)}
	/>
)

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired
}

export default QuantityField

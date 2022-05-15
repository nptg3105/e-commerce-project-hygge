import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState, value }) => (
			<div>
				<button onClick={() => formState.setValue(name, Number.parseInt(value) - 1)}>Giam</button>
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

import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const InputField = ({ name, control, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState }) => (
			<div>
				{!!formState.errors[name] && <p className="error">{formState.errors[name].message}</p>}
				<input {...field} {...restProps} />
			</div>
		)}
	/>
)

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default InputField

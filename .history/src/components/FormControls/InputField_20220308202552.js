import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const InputField = ({ name, control, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState }) => (
			<>
				<input {...field} {...restProps} />
				{!!formState.errors[name] && <p>{formState.errors[name].message}</p>}
			</>
		)}
	/>
)

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	className: PropTypes.string
}

InputField.defaultProps = {
	className: ''
}

export default InputField

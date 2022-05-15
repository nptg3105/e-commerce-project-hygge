import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const InputField = ({ name, control,formState }) => {
	console.log(1)
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState, formState }) => {
				console.log(field, fieldState, formState)
				return (
					<>
						<input {...field} {...formState} />
						{false && <span>Co loi</span>}
					</>
				)
			}}
		/>
	)
}

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
	formState: PropTypes.object.isRequired
}

export default InputField

import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const InputField = ({ name, control }) => {
	console.log(1)
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState, formState }) => {
				console.log({ field }, { fieldState }, { formState })
				return (
					<>
						<input {...field} />
						{!!formState.errors[name] && <p>{formState.errors[name].message}</p>}
					</>
				)
			}}
		/>
	)
}

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default InputField

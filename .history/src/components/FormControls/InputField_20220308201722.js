import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const InputField = ({ name, control }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState }) => (
			<>
				<input {...field} className="abc" />
				{!!formState.errors[name] && <p>{formState.errors[name].message}</p>}
			</>
		)}
	/>
)

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default InputField

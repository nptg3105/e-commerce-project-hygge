import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const InputField = ({ name, control, formState }) => {
	console.log(1)
	return (
		<Controller>
			<input />
			{false && <span>Co loi</span>}
		</Controller>
	)
}

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	formState: PropTypes.object.isRequired
}

export default InputField

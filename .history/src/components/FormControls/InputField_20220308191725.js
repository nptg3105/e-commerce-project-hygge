import PropTypes from 'prop-types'
import React from 'react'

const InputField = ({ name, control, formState }) => {
	console.log(1)
	return <input />
}

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	formState: PropTypes.object.isRequired
}

export default InputField

import { FormHelperText } from '@mui/FormHelperText'
import { InputLabel } from '@mui/InputLabel'
import FormControl from '@mui/material/FormControl'
import { OutlinedInput } from '@mui/OutlinedInput'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const QuantityField = props => {
	const { form, label, name } = props
	const { errors } = form
	const hasError = !!errors[name]

	return (
		<FormControl error={hasError} fullWidth margin="normal" variant="outline">
			<InputLabel htmlFor={name}>{label}</InputLabel>

			<Controller
				name={name}
				control={form.control}
				render={({ onChange, onBlur, value, name }) => (
					<OutlinedInput id={name} type="number" label={label} value={value} onChange={onChange} onBlur={onBlur} />
				)}
			/>
			<FormHelperText>{errors[name]?.message}</FormHelperText>
		</FormControl>
	)
}

QuantityField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,

	label: PropTypes.string
}

QuantityField.defaultProps = {
	label: ''
}

export default QuantityField

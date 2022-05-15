import FormControl from '@mui/material/FormControl'
import PropTypes from 'prop-types'
import React from 'react'
import { InputLabel } from '@mui/material/InputLabel'

const QuantityField = props => {
	const { form, label } = props
	const { errors } = form
	const hasError = !!errors[name]

	return (
        <FormControl error={hasError} fullWidth margin='normal' variant='outline'
        
        <InputLabel

         />

    )
}

QuantityField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,

	label: PropTypes.string
}

export default QuantityField

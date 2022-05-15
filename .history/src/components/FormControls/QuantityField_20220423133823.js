import React from 'react'
import PropTypes from 'prop-types'
import { FormControl } from '/@mui/material';

const QuantityField = (props) => {
    const {form, label} = props
    const {errors} = form;
    const hasError = !!errors[name]

    return(
        <FormControl


    )
}

QuantityField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,

	label: PropTypes.string
}

export default QuantityField

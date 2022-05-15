import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from './react-hook-form/dist/useForm';

const AddToCartForm = ({ onSubmit = null }) => {

    const schema = yup.object().shape({
        quantity: yup.number().min(1, 'Please enter at least 1').required('Please enter quantity')
    });

    const form = useForm

    return()
}

AddToCartForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default AddToCartForm

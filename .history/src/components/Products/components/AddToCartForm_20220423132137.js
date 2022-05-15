import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = ({ onSubmit = null }) => {
	const schema = yup.object().shape({
		quantity: yup.number().required('Please enter quantity.').min(1, 'Please enter at least 1')
	})

	const form = useForm({
		defaultValues: {
			quantity: 1
			// checkbox: false
		},
		resolver: yupResolver(schema)
	})

	// console.log('errors', errors)

	const handleSubmit = async values => {
		if (onSubmit) {
			await onSubmit(values)
		}
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} form={form}>
			<input name="quantity" label="Quantity" />
			<button type="submit" className="btn btn--primary btn__add-cart">
				Add to Cart
			</button>
		</form>
	)
}

AddToCartForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default AddToCartForm

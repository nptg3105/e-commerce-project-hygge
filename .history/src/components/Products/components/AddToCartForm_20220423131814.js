import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = () => {
	const schema = yup.object().shape({
		quantity: yup.number().min(1, 'Please enter at least 1').required('Please enter quantity.')
	})

	const form = useForm({
		defaultValues: {
			quantity: 1
			// checkbox: false
		},
		resolver: yupResolver(schema)
	})

	// console.log('errors', errors)

	const onSubmit = async values => {
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

export default AddToCartForm

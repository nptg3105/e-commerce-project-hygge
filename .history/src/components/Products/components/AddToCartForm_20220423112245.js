import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'components/FormControls/InputField'
import PropTypes from 'prop-types'
import React from 'react'
import * as yup from 'yup'
import { useForm } from './react-hook-form/dist/useForm'

const AddToCartForm = ({ onSubmit = null }) => {
	const schema = yup.object().shape({
		quantity: yup.number().min(1, 'Please enter at least 1').required('Please enter quantity')
	})

	const form = useForm({
		defaultValue: {
			quantity: 1
		},
		resolver: yupResolver(schema)
	})

	const handleSubmit = async values => {
		if (onSubmit) {
			await onSubmit(values)
		}
	}
	return (
		<form onSubmit={form.handleSubmit(handleSubmit)}>
			<InputField name="quantity" label="Quantity" form={form} />
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

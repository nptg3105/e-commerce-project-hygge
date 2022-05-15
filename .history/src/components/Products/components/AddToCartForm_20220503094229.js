import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from 'components/FormControls/QuantityField'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = ({ onSubmit = null }) => {
	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})
	// const { handleSubmit, control } = useForm({
	// 	defaultValues: {
	// 		quantity: 1
	// 	},
	// 	resolver: yupResolver(schema)
	// })

	const form = useForm({
		defaultValues: {
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
		<div className="register__form">
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<div className="form-group">
					<QuantityField name="quantity" form={form} className="form-quantity" />
					<button type="submit" className="btn btn--primary">
						Add to Cart
					</button>
				</div>
			</form>
		</div>
	)
}

AddToCartForm.propTypes = {
	onSubmit: PropTypes.func
}
AddToCartForm.defaultValues = {
	onSubmit = ()
}


export default AddToCartForm

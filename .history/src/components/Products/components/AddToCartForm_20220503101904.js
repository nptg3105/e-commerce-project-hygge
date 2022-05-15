import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from 'components/FormControls/QuantityField'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = ({ onSubmit }) => {
	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})

	const { control, handleSubmit } = useForm({
		defaultValues: {
			quantity: 1
		},
		resolver: yupResolver(schema)
	})

	const onSubmit = formData => {
		console.log({ formData })
	}

	return (
		<div className="register__form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<QuantityField name="quantity" control={control} className="form-quantity" />
					<button type="submit" className="btn btn--primary">
						Add to Cart
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddToCartForm

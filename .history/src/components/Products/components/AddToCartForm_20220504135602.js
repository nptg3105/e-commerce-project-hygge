import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from 'components/FormControls/QuantityField'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import '../../FormControls/QuantityField.scss'

const AddToCartForm = () => {
	const dispatch = useDispatch()
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

		try {
			dispatch(registerAsync(formData))
			enqueueSnackbar('Register Successfully!', { variant: 'success' })
		} catch (errors) {
			console.log('Failed to register', errors.message)
		}
		reset({
			email: '',
			password: ''
		})
	}

	return (
		<div>
			<form className="product-detail__form" onSubmit={handleSubmit(onSubmit)}>
				<QuantityField name="quantity" control={control} className="form-quantity" />
				<button type="submit" className="btn btn--primary">
					Add to Cart
				</button>
			</form>
		</div>
	)
}

export default AddToCartForm

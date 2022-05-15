import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from 'components/FormControls/QuantityField'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = () => {
	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity.')
			.min(1, 'Minimum value is 1')
			.typeError('Please enter a number')
	})

	const { form, control } = useForm({
		defaultValues: {
			quantity: 1
		},
		resolver: yupResolver(schema)
	})

	// console.log('errors', errors)

	// const handleSubmit = (values) => {
	// 	if (onSubmit) {
	// 		 onSubmit(values)
	// 	}
	// }
	return (
		<form>
			<QuantityField name="quantity" label="Quantity" form={form} control={control} />

			<button type="submit" className="btn btn--primary btn__add-cart">
				Add to Cart
			</button>
		</form>
	)
}

export default AddToCartForm

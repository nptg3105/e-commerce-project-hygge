import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from 'components/FormControls/QuantityField'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import {} from '../../Cart/CartSlice'
import { addToCart } from '../../FormControls/QuantityField.scss'

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

	const onSubmit = ({ quantity }) => {
		const action = addToCart({
			id: product.id,
			product,
			quantity
		})
		dispatch(action)
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

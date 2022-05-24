import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'
import { addToCart } from '../../Cart/CartSlice'
import QuantityField from '../../FormControls/QuantityField'
import useProductDetail from '../hooks/useProductDetail'

const AddToCartForm = () => {
	const { enqueueSnackbar } = useSnackbar()

	const { productId } = useParams()
	const { product } = useProductDetail(productId)

	const dispatch = useDispatch()
	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})

	const { control, handleSubmit, setValue } = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = ({ quantity }) => {
		const action = addToCart({
			product,
			id: product.product.id,
			quantity
		})
		// console.log(action)
		dispatch(action)
		enqueueSnackbar('Add to Cart Successfully!', { variant: 'success' })
		window.scrollTo(0, 0)
	}

	useEffect(() => {
		setValue('quantity', 1)
		console.log(1)
	})

	return (
		<div>
			<form className="product-detail__form" onSubmit={handleSubmit(onSubmit)}>
				<QuantityField useFormProps={{ setValue }} name="quantity" control={control} className="form-quantity" />
				<button type="submit" className="btn btn--primary">
					Add to Cart
				</button>
			</form>
		</div>
	)
}

export default AddToCartForm

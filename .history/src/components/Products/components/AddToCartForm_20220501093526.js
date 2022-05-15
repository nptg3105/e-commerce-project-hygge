/* eslint-disable */
import { yupResolver } from '@hookform/resolvers/yup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from 'redux/actions/auth'
import { getQuantity } from 'redux/selectors/auth'
import * as yup from 'yup'

const AddToCartForm = () => {
	const dispatch = useDispatch()
	const quantity = useSelector(getQuantity)

	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})
	const { handleSubmit, control } = useForm({
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
					<div className="product-detail__change" type="button" onClick={() => dispatch(decreaseQuantity())}>
						<ArrowBackIosNewIcon />
					</div>
					{/* {quantity} */}
					<QuantityField value={quantity} id="quantity" name="quantity" control={control} className="form-quantity" />

					<div className="product-detail__change" type="button" onClick={() => dispatch(increaseQuantity())}>
						<ArrowForwardIosIcon />
					</div>

					<button type="submit" className="btn btn--primary">
						Add to Cart
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddToCartForm

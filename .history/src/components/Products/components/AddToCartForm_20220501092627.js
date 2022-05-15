/* eslint-disable */
import { yupResolver } from '@hookform/resolvers/yup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import QuantityField from 'components/FormControls/QuantityField'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from 'redux/actions/auth'
import * as yup from 'yup'

const AddToCartForm = () => {
	const dispatch = useDispatch()

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

	const onSubmit = quantity => {
		console.log({ quantity })
	}

	return (
		<div className="register__form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<div className="product-detail__change" type="button" onClick={() => dispatch(decreaseQuantity())}>
						<ArrowBackIosNewIcon />
					</div>

					<QuantityField id="quantity" name="quantity" control={control} quantity className="form-quantity" />

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

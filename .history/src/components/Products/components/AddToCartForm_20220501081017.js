/* eslint-disable */
import { yupResolver } from '@hookform/resolvers/yup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import QuantityField from 'components/FormControls/QuantityField'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = () => {
	const [count, setCount] = React.useState(1)

	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})
	const { handleSubmit, control, setValue } = useForm({
		defaultValues: {
			quantity: 1
		},
		resolver: yupResolver(schema)
	})

	const handleCountChange = countChange => {
		let quantity = count + countChange
		if (quantity < 1) {
			quantity = 1
		} else {
			setCount(quantity)
		}
	}

	const onSubmit = formData => {
		console.log({ formData })
	}

	return (
		<div className="register__form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<div className="product-detail__change" type="button" onClick={() => setValue(handleCountChange(-1))}>
						<ArrowBackIosNewIcon />
					</div>

					<QuantityField id="quantity" name="quantity" control={control} className="form-quantity" />

					<div className="product-detail__change" type="button" onClick={() => setValue(handleCountChange(1))}>
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

import { yupResolver } from '@hookform/resolvers/yup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import QuantityField from 'components/FormControls/QuantityField'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = () => {
	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})
	const { handleSubmit, control, setValue, value, name } = useForm({
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
					<div className="product-detail__change" type="button" onClick={() => setValue(formData + 1)}>
						<ArrowBackIosNewIcon />
					</div>
					<QuantityField id="quantity" name="quantity" value={value} control={control} className="form-quantity" />
					<div
						className="product-detail__change"
						type="button"
						onClick={() => setValue(name, Number.parseInt(value) + 1)}
					>
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

import { yupResolver } from '@hookform/resolvers/yup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import QuantityField from 'components/FormControls/QuantityField'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = ({ onSubmit = null }) => {
	const [count, setCount] = useState(1)
	const handleCountChange = countChange => {
		let value = count + countChange
		if (value < 1) {
			value = 1
		} else {
			setCount(value)
		}
	}

	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})

	const {
		control,
		handleSubmit,
		value,
		formState: { setValues }
	} = useForm({
		defaultValues: {
			quantity: 1
		},
		resolver: yupResolver(schema)
	})

	return (
		<div className="register__form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<div className="product-detail__change" type="button" onClick={() => setValues(handleCountChange(-1))}>
						<ArrowBackIosNewIcon />
					</div>
					<QuantityField count={value} id="quantity" name="quantity" control={control} className="form-quantity" />
					<div className="product-detail__change" type="button" onClick={() => handleCountChange(1)}>
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

AddToCartForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default AddToCartForm

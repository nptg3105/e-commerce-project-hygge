import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from 'components/FormControls/QuantityField'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import '../../FormControls/QuantityField.scss'

const AddToCartForm = ({ onSubmit = null }) => {
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

	return (
		<div>
			<form className="product-detail__form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<QuantityField name="quantity" control={control} className="form-quantity" />
				</div>
				<button type="submit" className="btn btn--primary">
					Add to Cart
				</button>
			</form>
		</div>
	)
}

AddToCartForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default AddToCartForm

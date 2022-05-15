/*eslint-disable*/
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import './QuantityField.scss'

const QuantityField = ({ name, control, useFormProps, isDispatchQuantityChange, ...restProps }) => {
	const dispatch = useDispatch()
	const action = addToCart({
		product,
		id: product.product.id,
		quantity
	})
	console.log(action)
	dispatch(action)
	// const [quantity, setQuantity] = useState(1)
	// const handleCountChange = (countChange, ref) => {
	// 	// const { value } = ref.current
	// 	// ref.current = value + countChange
	// 	console.log(ref.ref.current)
	// 	// let count = quantity + countChange
	// 	// if (count < 1) {
	// 	// 	count = 1
	// 	// } else {
	// 	// 	setQuantity(count)
	// 	// }
	// }

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState }) => {
				// console.log(field)

				return (
					<div>
						<div className="product-detail__number">
							<div
								className="product-detail__change"
								type="button"
								onClick={() => useFormProps.setValue(name, field.value - 1)}
							>
								<ArrowBackIosNewIcon />
							</div>
							<input type="number" className="product-detail__input" {...field} {...restProps} />
							<div
								className="product-detail__change"
								type="button"
								onClick={() => useFormProps.setValue(name, field.value + 1)}
							>
								<ArrowForwardIosIcon />
							</div>
							{!!formState.errors[name] && (
								<i className="product-detail__error error">{formState.errors[name].message}</i>
							)}
						</div>
					</div>
				)
			}}
		/>
	)
}

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	useFormProps: PropTypes.object,
	isDispatchQuantityChange: PropTypes.bool
}

QuantityField.defaultValues = {
	useFormProps: {},
	isDispatchQuantityChange: false
}

export default QuantityField

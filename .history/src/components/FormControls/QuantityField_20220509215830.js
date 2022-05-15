import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { setQuantity } from 'components/Cart/CartSlice'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import './QuantityField.scss'

const QuantityField = ({ name, control, useFormProps, dispatchQuantityID, ...restProps }) => {
	const dispatch = useDispatch()

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
			render={({ field, formState }) => (
				// console.log(field)

				<div>
					<div className="product-detail__number">
						<div
							className="product-detail__change"
							type="button"
							onClick={() => useFormProps.setValue(name, field.value - 1)}
						>
							<ArrowBackIosNewIcon />
						</div>
						<input
							type="number"
							className="product-detail__input"
							{...field}
							onChange={event => {
								if (dispatchQuantityID) {
									const action = setQuantity({
										id: product.product.id,
										quantity
									})
									console.log(action)
									dispatch(action)
								}

								useFormProps.setValue(name, event.target.value)
							}}
							{...restProps}
						/>
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
			)}
		/>
	)
}

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	useFormProps: PropTypes.object,
	dispatchQuantityID: PropTypes.string
}

QuantityField.defaultProps = {
	useFormProps: {},
	dispatchQuantityID: ''
}

export default QuantityField

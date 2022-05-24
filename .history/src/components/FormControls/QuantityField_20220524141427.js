import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setQuantity } from '../Cart/CartSlice'
import './QuantityField.scss'

const QuantityField = ({ name, control, useFormProps, dispatchQuantityID, ...restProps }) => {
	const dispatch = useDispatch()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState }) => (
				<div>
					<div className="product-detail__number">
						{field.value - 1 < 1 ? (
							<button type="button" className="product-detail__change" disabled />
						) : (
							<button
								className="product-detail__change"
								type="button"
								onClick={() => {
									if (dispatchQuantityID) {
										const action = setQuantity({
											id: dispatchQuantityID,
											quantity: field.value - 1
										})
										dispatch(action)
									}
									useFormProps.setValue(name, Math.abs(field.value) ? Math.abs(field.value - 1) : 1)
								}}
							>
								<ArrowBackIosNewIcon />
							</button>
						)}

						<input className="product-detail__input" {...field} {...restProps} />
						<button
							className="product-detail__change"
							type="button"
							onClick={() => {
								if (dispatchQuantityID) {
									const action = setQuantity({
										id: dispatchQuantityID,
										quantity: field.value + 1
									})
									dispatch(action)
								}
								useFormProps.setValue(name, Math.abs(field.value) ? Math.abs(field.value + 1) : 1)
							}}
						>
							<ArrowForwardIosIcon />
						</button>
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

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from 'redux/actions/auth'
import './InputField.scss'

const QuantityField = ({ name, control, ...restProps }) => {
	const dispatch = useDispatch()
	const quantity = useSelector(getQuantity)

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState, name }) => (
				<div>
					{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
					<div className="product-detail__change" type="button" onClick={() => dispatch(decreaseQuantity())}>
						<ArrowBackIosNewIcon />
					</div>
					<input type="number" {...field} {...restProps} />

					<div className="product-detail__change" type="button" onClick={() => dispatch(increaseQuantity())}>
						<ArrowForwardIosIcon />
					</div>
				</div>
			)}
		/>
	)
}

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default QuantityField

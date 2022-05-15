import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = ({ name, control, ...restProps }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, formState, value }) => (
			<div>
				<div
					className="product-detail__change"
					type="button"
					onClick={() => formState.setValue(name, Number.parseInt(value) - 1)}
				>
					<ArrowBackIosNewIcon />
				</div>
				{!!formState.errors[name] && <i className="error">{formState.errors[name].message}</i>}
				<input type="number" value={value} {...field} {...restProps} />
			</div>
		)}
	/>
)

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default QuantityField

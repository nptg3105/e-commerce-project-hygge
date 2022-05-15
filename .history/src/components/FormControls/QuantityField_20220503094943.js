import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import './InputField.scss'

const QuantityField = props => {
	const { form, name } = props
	const { errors } = form
	const hasError = errors[name]

	console.log(name)

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ value, name }) => (
				<div>
					{hasError && <i className="error">{errors[name]?.message}</i>}
					{/* <div className="product-detail__change" type="button" onClick={() => console.log(-1)}>
						<ArrowBackIosNewIcon />
					</div> */}
					<input type="number" id={name} value={value} />

					{/* <div className="product-detail__change" type="button" onClick={() => console.log(1)}>
						<ArrowForwardIosIcon />
					</div> */}
				</div>
			)}
		/>
	)
}
QuantityField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired
}

export default QuantityField

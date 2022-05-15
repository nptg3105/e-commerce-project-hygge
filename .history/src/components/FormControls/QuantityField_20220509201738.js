import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import './QuantityField.scss'

const QuantityField = ({ name, control, ...restProps }) => (
	// const [quantity, setQuantity] = useState(1)
	// const handleCountChange = countChange => {
	// 	let count = quantity + countChange
	// 	if (count < 1) {
	// 		count = 1
	// 	} else {
	// 		setQuantity(count)
	// 	}
	// }

	<Controller
		name={name}
		control={control}
		render={({ field: { onChange, value }, formState }) => {
			console.log(field)

			return (
				<div>
					<div className="product-detail__number">
						<div className="product-detail__change" type="button" onChange={onChange}>
							<ArrowBackIosNewIcon />
						</div>
						<input value={value} type="number" className="product-detail__input" {...field} {...restProps} />
						<div className="product-detail__change" type="button">
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

QuantityField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired
}

export default QuantityField

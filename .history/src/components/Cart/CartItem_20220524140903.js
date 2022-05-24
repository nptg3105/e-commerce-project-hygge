import { yupResolver } from '@hookform/resolvers/yup'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { formatVND } from '../../utils/formatCurrency'
import QuantityField from '../FormControls/QuantityField'
import './Cart.scss'

const CartItem = ({ product }) => {
	console.log(product)
	const schema = yup.object().shape({
		quantity: yup
			.number()
			.required('Please enter quantity')
			.min(1, 'Minimum value is 1.')
			.typeError('Please enter a numbers')
	})

	const { control, setValue } = useForm({
		defaultValues: {
			quantity: product.quantity
		},
		resolver: yupResolver(schema)
	})

	return (
		<div>
			<div className="cart__item">
				<div className="cart__img">
					<img src={product.product.product.img} alt={product.product.product.name} />
				</div>
				<div className="cart__details">
					<h3 className="cart__product">{product.product.product.name}</h3>
					<div className="cart__price">
						{!product.product.product.newest && (
							<div className="product__price product__price--old">{formatVND(product.product.product.price.old)}</div>
						)}
						<div className="product__price product__price--actual">
							{formatVND(product.product.product.price.actual)}
						</div>
					</div>
					<div className="cart__control">
						{product.quantity > 0 ? (
							<QuantityField
								dispatchQuantityID={product.product.product.id}
								useFormProps={{ setValue }}
								name="quantity"
								control={control}
								className="form-quantity cart__quantity"
							/>
						) : (
							<QuantityField
								// dispatchQuantityID={product.product.product.id}
								useFormProps={{ setValue }}
								name="quantity"
								control={control}
								className="form-quantity cart__quantity"
							/>
						)}
						{/* {console.log(product.quantity)} */}

						<a href="/" className="cart__delete">
							<CloseIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

CartItem.propTypes = {
	product: PropTypes.object.isRequired
}

export default CartItem

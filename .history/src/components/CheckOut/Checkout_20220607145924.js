import { yupResolver } from '@hookform/resolvers/yup'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { formatVND } from '../../utils/formatCurrency'
import { removeFromCart } from '../Cart/CartSlice'
import { cartTotalSelector } from '../Cart/selector'
import InputField from '../FormControls/InputField'
import requiredOrder from '../requiredOrder'
import withLayout from '../withLayout'
import './Checkout.scss'

const Checkout = () => {
	const cartItems = useSelector(state => state.cart.cartItems)
	console.log(cartItems)

	const cartTolal = useSelector(cartTotalSelector)

	const dispatch = useDispatch()

	const schema = yup.object().shape({
		email: yup.string().required('Please enter your email.').email('Please enter a valid email!'),
		fullname: yup.string().required('Please enter your name').min(2, 'Please enter at least 2 characters.'),
		phone: yup.number().required('Please enter your phone'),
		city: yup.string().required('Please fill your city'),
		district: yup.string().required('Please enter your district'),
		ward: yup.string().required('Please enter your ward'),
		address: yup.string().required('Please enter your address')
	})
	const { handleSubmit, control } = useForm({
		defaultValues: {
			fullname: '',
			phone: '',
			email: '',
			city: '',
			district: '',
			ward: '',
			address: ''
		},
		resolver: yupResolver(schema)
	})

	const handleDeleteItem = id => {
		const action = removeFromCart(id)
		console.log(action)
		dispatch(action)
	};

	submitForm (e) {;
		e.preventDefault()
		this.props.history.push('/thank-you') // <--- The page you want to redirect your user to.
	  }

	return (
		<div className="container">
			<div id="breadcum">
				<div className="breadcum__item">
					<Link to="/">Home Page</Link>
					<i className="fa-solid fa-angle-right" />
				</div>
				<div className="breadcum__item">
					<Link to="/products">Products</Link>
					<i className="fa-solid fa-angle-right" />
				</div>
				<div className="breadcum__item">
					<Link to="/cart">Shopping Cart</Link>
					<i className="fa-solid fa-angle-right" />
				</div>
				<div className="breadcum__item">
					<span>Checkout</span>
				</div>
			</div>
			<div className="checkout">
				<div className="checkout__title">
					<i className="sub-heading">- Almost There</i>
					<h2 className="main-heading">Checkout</h2>
				</div>
				<div className="checkout__box">
					<div className="checkout__cart">
						<h2>My Cart</h2>
						<div className="basket">
							{cartItems.map(product => (
								<div className="basket__item">
									<div className="basket__img">
										<img src={product.product.product.img} alt={product.product.product.name} />
									</div>
									<div className="basket__details">
										<p>{product.product.product.name}</p>

										<div className="product__price product__price--actual">
											{formatVND(product.product.product.price.actual)}
										</div>
										<p>Quantity: {product.quantity}</p>
									</div>
									<div className="basket__delete">
										<button
											type="button"
											onClick={() => {
												handleDeleteItem(product.id)
											}}
											className="cart__delete"
										>
											<CloseIcon />
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="checkout__total">
							<h3>Total:</h3>
							<h3>{formatVND(cartTolal)}</h3>
						</div>
						<Link to="/cart" className="btn btn--secondary btn--full checkout__btn-edit">
							Edit cart
						</Link>
					</div>
					<div className="checkout__detail">
						<h2>Details</h2>
						<div className="login__form">
							<form onSubmit={this.submitForm.bind(this)}>
								<div className="form-group">
									<label className="form-label" htmlFor="fullname">
										Fullname{' '}
									</label>
									<InputField required id="fullname" name="fullname" control={control} className="form-input" />
								</div>
								<div className="form-group">
									<label className="form-label" htmlFor="phone">
										Phone Number{' '}
									</label>
									<InputField required id="phone" name="phone" control={control} className="form-input" />
								</div>
								<div className="form-group">
									<label className="form-label" htmlFor="mail">
										Email Address{' '}
									</label>
									<InputField required id="email" name="email" control={control} className="form-input" />
								</div>
								<div className="form-group">
									<label className="form-label" htmlFor="city">
										City{' '}
									</label>
									<InputField required id="city" name="city" control={control} className="form-input" />
								</div>
								<div className="form-group">
									<label className="form-label" htmlFor="district">
										District{' '}
									</label>
									<InputField required id="district" name="district" control={control} className="form-input" />
								</div>
								<div className="form-group">
									<label className="form-label" htmlFor="ward">
										Ward{' '}
									</label>
									<InputField required id="ward" name="ward" control={control} className="form-input" />
								</div>
								<div className="form-group">
									<label className="form-label" htmlFor="address">
										Address{' '}
									</label>
									<InputField
										required
										type="textarea"
										id="address"
										name="address"
										control={control}
										className="form-input"
									/>
								</div>
								<label className="form-remember">
									Set as default Address
									<input type="checkbox" />
									<span className="checkmark" />
								</label>

								<div className="form-btn">
									<button type="submit" className="btn btn--primary btn--full">
										Place Order
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

// Checkout.propTypes = {
// 	product: PropTypes.object.isRequired
// }

export default withLayout(requiredOrder(Checkout))

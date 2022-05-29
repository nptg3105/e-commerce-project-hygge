import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { loginAsync } from '../../redux/actions/auth'
import { formatVND } from '../../utils/formatCurrency'
import InputField from '../FormControls/InputField'
import withLayout from '../withLayout'
import { removeFromCart } from './CartSlice'
import './Checkout.scss'

const Checkout = () => {
	const cartItems = useSelector(state => state.cart.cartItems)
	console.log(cartItems.product)

	const dispatch = useDispatch()
	// const dangLogin = useSelector(selectDangLogin)
	// console.log(dangLogin)

	const { enqueueSnackbar } = useSnackbar()

	const schema = yup.object().shape({
		email: yup.string().required('Please enter your email.').email('Please enter a valid email!'),
		password: yup.string().required('Please enter your password')
	})
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		defaultValues: {
			email: '',
			password: ''
			// checkbox: false
		},
		resolver: yupResolver(schema)
	})
	console.log('errors', errors)

	const onSubmit = async formData => {
		try {
			await dispatch(loginAsync(formData))
		} catch (err) {
			const loginMessage = JSON.parse(err.message)
			if (loginMessage.status === 'success') {
				enqueueSnackbar(loginMessage.message, { variant: 'success' })
			} else if (loginMessage.status === 'fail') {
				enqueueSnackbar(loginMessage.message, { variant: 'error' })
			}
			console.log(loginMessage)
		}
	}

	const handleDeleteItem = () => {
		const action = removeFromCart(product.id)
		// console.log(action)
		dispatch(action)
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
					<div className="checkout__detail">
						<h2>Details</h2>
						<div className="login__form">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-group">
									<label className="form-label" htmlFor="mail">
										Email Address{' '}
									</label>
									<InputField id="email" name="email" control={control} className="form-input" />
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="password">
										Password{' '}
									</label>
									<InputField id="password" name="password" control={control} className="form-input" type="password" />
								</div>

								<div className="form-btn">
									<button type="submit" className="btn btn--primary btn--full">
										Login
									</button>
									<div className="btn-login ">
										<Link to="/register" className="btn btn--secondary btn--full">
											Guest Checkout
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="checkout__cart">
						<h2>My Cart</h2>
						{cartItems.map(product => (
							<>
								<div className="basket__img">
									<img src={product.product.product.img} alt={product.product.product.name} />
								</div>
								<div className="basket__details">
									<p>{product.product.product.name}</p>
									{!product.product.product.newest && (
										<div className="product__price product__price--old">
											{formatVND(product.product.product.price.old)}
										</div>
									)}
									<div className="product__price product__price--actual">
										{formatVND(product.product.product.price.actual)}
									</div>
								</div>
								<div className="basket__delete">
									<button
										type="button"
										onClick={() => {
											handleDeleteItem()
										}}
										className="cart__delete"
									>
										<CloseIcon />
									</button>
								</div>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default withLayout(Checkout)

import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { loginAsync } from '../../redux/actions/auth'
import InputField from '../FormControls/InputField'
import withLayout from '../withLayout'

const Checkout = () => {
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
									<div className="btn-login">
										<Link to="/register" className="btn btn--secondary">
											Create Account
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withLayout(Checkout)

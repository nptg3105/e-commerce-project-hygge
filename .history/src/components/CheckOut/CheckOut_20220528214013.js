import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../FormControls/InputField'
import withLayout from '../withLayout'

const Checkout = () => {
	console.log(1)
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
							<form>
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

								<label className="form-remember">
									Remember me
									<input type="checkbox" />
									<span className="checkmark" />
								</label>
								<div className="form-btn">
									<button type="submit" className="btn btn--primary btn--full">
										Login
									</button>
									<div className="btn-login">
										<Link to="/register" className="btn btn--secondary">
											Create Account
										</Link>

										<Link to="/login" className="btn btn--forgot">
											Forgot Password?
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

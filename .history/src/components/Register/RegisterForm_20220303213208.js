import withLayout from 'components/withLayout'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAsync } from 'redux/actions/auth'
import './RegisterForm.scss'

const Register = () => {
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const handleEmailChange = event => {
		setEmail(event.target.value)
	}

	const [password, setPassword] = useState('')
	const handlePasswordChange = event => {
		setPassword(event.target.value)
	}

	// const [passwordConfirm, setPasswordConfirm] = useState('')
	// const handlePasswordConfirmChange = event => {
	//   setPasswordConfirm(event.target.value)
	// }

	const handleSubmit = event => {
		event.preventDefault()
		const data = {
			email,
			password
			// passwordConfirm
		}
		dispatch(registerAsync(data))
	}

	return (
		<div className="container-fluid">
			<div className="navigator">
				<a href="/homepage">Home Page</a>
				<span> </span>
				<a href="/categories">Categories</a>
				<span> </span>
				<a href="/signup">Sign Up</a>
			</div>
			<p>Sign Up</p>
			<h3>Create Account</h3>
			<div className="register__form">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label className="form-label" htmlFor="mail">
							Email Address{' '}
						</label>
						<input className="form-input" type="email" id="mail" value={email} onChange={handleEmailChange} />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="password">
							Create Password{' '}
						</label>
						<input
							className="form-input"
							type="password"
							id="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>

					{/* <div className="form-group">
            <label className="form-label" htmlFor="passwordConfirm">
              Password Confirm:{' '}
            </label>
            <input
              className="form-input"
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
            />
          </div> */}
					<div>
						I have read and agree to <a href="/policy">term & condition</a>
					</div>
					<button type="submit">Create Account</button>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	)
}

export default withLayout(Register)

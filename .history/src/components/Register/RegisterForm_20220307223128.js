import withLayout from 'components/withLayout'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerAsync } from 'redux/actions/auth'
import * as Yup from 'yup'
import './Register.scss'

const RegisterForm = () => {
	const dispatch = useDispatch()

	const { enqueueSnackbar } = useSnackbar()

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

	const schema = Yup.object().shape({
		email: Yup.string().required('Please enter your email.').email('Please enter a valid email!')
	})

    const form = useForm({
        defaultValues:{
            email:'',
            password:''
        },
        resolver: yupResolver(schema);
    })

	const handleSubmit = event => {
		try {
			event.preventDefault()
			const data = {
				email,
				password
				// passwordConfirm
			}

			dispatch(registerAsync(data))
			console.log(data)

			// show noti when register successfully
			enqueueSnackbar('Register Successfully!', { variant: 'success' })
		} catch (error) {
			console.log('Failed to register', error)
		}
	}

	return (
		<div className="register">
			<div className="container">
				<div className="breadcum">
					<div className="breadcum__item">
						<a href="/">Home Page</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Categories</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Sign Up</a>
					</div>
				</div>
				<ul className="register__text">
					<i>- Sign Up</i>
				</ul>
				<h3 className="register__create">Create Account</h3>
				<div className="register__form">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label className="form-label" htmlFor="email">
								Email Address{' '}
							</label>
							<input className="form-input" type="email" id="email" value={email} onChange={handleEmailChange} />
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
						<label className="form-policy">
							I have read and agree to <a href="/policy">term & condition</a>
							<input type="checkbox" />
							<span className="checkmark" />
						</label>
						<div className="form-btn">
							<button type="submit" className="btn btn--primary">
								Create Account
							</button>
							<button type="submit" className="btn btn--secondary">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default withLayout(RegisterForm)

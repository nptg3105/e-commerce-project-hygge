import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import useLanguage from '../../hooks/useLanguage'
import { registerAsync } from '../../redux/actions/auth'
import InputField from '../FormControls/InputField'
import withLayout from '../withLayout'
import './Register.scss'

const Register = () => {
	const { t } = useLanguage()

	const dispatch = useDispatch()

	const { enqueueSnackbar } = useSnackbar()

	const schema = yup.object().shape({
		email: yup.string().required('Please enter your email.').email('Please enter a valid email!'),
		password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters.')
		// checkbox: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
	})
	const {
		handleSubmit,
		control,
		register,
		reset,
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

	const onSubmit = formData => {
		console.log({ formData })

		try {
			dispatch(registerAsync(formData))
			enqueueSnackbar('Register Successfully!', { variant: 'success' })
		} catch (errors) {
			console.log('Failed to register', errors.message)
		}
		reset({
			email: '',
			password: ''
		})
	}

	console.log(t('text.username'))

	return (
		<div className="register">
			<div className="container">
				<div id="breadcum">
					<div className="breadcum__item">
						<Link to="/">Home Page</Link>
						<i className="fa-solid fa-angle-right" />
					</div>

					<div className="breadcum__item">
						<span>Register</span>
					</div>
				</div>
				<ul className="register__text">
					<i>- Sign Up</i>
				</ul>
				<h3 className="register__create">Create Account</h3>
				<div className="register__form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<label className="form-label" htmlFor="email">
								Email Address{' '}
							</label>
							<InputField id="email" name="email" control={control} className="form-input" />
							<label className="form-label" htmlFor="password">
								Create Password{' '}
							</label>
							<InputField id="password" name="password" control={control} className="form-input" type="password" />
						</div>

						<InputField
							control={control}
							type="checkbox"
							name="checkbox"
							id="checkbox"
							className="form-policy form-policy--main"
						/>

						<label className="form-policy">
							I have read and agree to <a href="/policy">terms & conditions</a>
							{/* <InputField type="checkbox" /> */}
							<input
								type="checkbox"
								{...register('checkbox', { required: 'You must accept the terms and conditions' })}
							/>
							<span className="checkmark" />
						</label>
						<div className="form-btn">
							<button type="submit" className="btn btn--primary">
								Create Account
							</button>

							<Link to="/login" className="btn btn--secondary">
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default withLayout(Register)

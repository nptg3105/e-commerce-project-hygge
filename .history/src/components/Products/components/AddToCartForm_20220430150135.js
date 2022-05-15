import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'components/FormControls/InputField'
import useLanguage from 'hooks/useLanguage'
import { useSnackbar } from 'notistack'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerAsync } from 'redux/actions/auth'
import * as yup from 'yup'

const AddToCartForm = () => {
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
		<div className="register__form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<InputField id="email" name="email" control={control} className="form-input" />
				</div>

				<InputField
					control={control}
					type="checkbox"
					name="checkbox"
					id="checkbox"
					className="form-policy form-policy--main"
				/>

				<div className="form-btn">
					<button type="submit" className="btn btn--primary">
						Create Account
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddToCartForm

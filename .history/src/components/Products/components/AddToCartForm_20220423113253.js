import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'components/FormControls/InputField'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = () => {
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
		<form onSubmit={handleSubmit(handleSubmit)}>
			<InputField name="quantity" label="Quantity" control={control} />
			<button type="submit" className="btn btn--primary btn__add-cart">
				Add to Cart
			</button>
		</form>
	)
}

AddToCartForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default AddToCartForm

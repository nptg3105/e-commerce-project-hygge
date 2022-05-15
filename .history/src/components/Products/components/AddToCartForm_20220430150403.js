import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'components/FormControls/InputField'
import useLanguage from 'hooks/useLanguage'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddToCartForm = () => {
	const { t } = useLanguage()

	const schema = yup.object().shape({
		quantity: yup.number().required('Please enter quantity').min(1, 'Please enter at least 1.')
		// checkbox: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
	})
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		defaultValues: {
			quantity: 1
		},
		resolver: yupResolver(schema)
	})
	console.log('errors', errors)

	const onSubmit = formData => {
		console.log({ formData })
	}

	console.log(t('text.username'))

	return (
		<div className="register__form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<InputField id="quantity" name="quantity" control={control} className="form-input" />
				</div>

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

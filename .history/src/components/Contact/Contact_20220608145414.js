import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import InputField from '../FormControls/InputField'
import Newsletter from '../Newsletter/Newsletter'
import withLayout from '../withLayout'
import './Contact.scss'

const Contact = () => {
	const schema = yup.object().shape({
		email: yup.string().required('Please enter your email.').email('Please enter a valid email!'),
		fullname: yup.string().required('Please enter your name').min(2, 'Please enter at least 2 characters.')
	})

	const { handleSubmit, control } = useForm({
		defaultValues: {
			email: '',
			fullname: ''
			// checkbox: false
		},
		resolver: yupResolver(schema)
	})

	const navigate = useNavigate()

	const submitForm = () => {
		navigate('/')
	}

	return (
		<div className="container">
			<div id="breadcum">
				<div className="breadcum__item">
					<Link to="/">Home Page</Link>
					<i className="fa-solid fa-angle-right" />
				</div>

				<div className="breadcum__item">
					<Link to="/contact">Contact us</Link>
				</div>
			</div>
			<i className="sub-heading">- Ask Questions</i>
			<h2 className="main-heading">We are always here to help you</h2>

			<div className="contact__infor mb-112">
				<div className="contact__item">
					<h3>Customer Services</h3>
					<p>
						Please send us an email at <a href="mailto:customercare@hygge.com">customercare@hygge.com</a>
					</p>
				</div>
				<div className="contact__item">
					<h3>Public Relations</h3>
					<p>
						You can contact our media team by sending them an email at{' '}
						<a href="mailto:media@hygge.com">media@hygge.com</a>
					</p>
				</div>
				<div className="contact__item">
					<h3>Large Orders</h3>
					<p>
						If you are thinking of making a very large order, plese feel free to contact us at{' '}
						<a href="mailto:sales@hygge.com">sales@hygge.com</a> and we will give you a special discount
					</p>
				</div>
				<div className="contact__item">
					<h3>Other Enquiries</h3>
					<p>
						For all of your other questions, please send us an email at{' '}
						<a href="mailto:general@hygge.com">general@hygge.com</a>
					</p>
				</div>
			</div>

			<div className="contact__form mb-112">
				<div className="contact__title">
					<i className="sub-heading">- Ask Questions</i>
					<h2 className="main-heading">We are always here to help you</h2>
				</div>

				<form className="form" onSubmit={handleSubmit(submitForm)}>
					<div className="form-group">
						<label className="form-label" htmlFor="fullname">
							Fullname
						</label>
						<InputField required id="fullname" name="fullname" control={control} className="form-input" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="mail">
							Email Address
						</label>
						<InputField id="email" name="email" control={control} className="form-input" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="select">
							Email Address
						</label>
						<select id="select" name="select" className="form-input" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="message">
							Message
						</label>
						<textarea className="form-textarea" rows="4" cols="50" name="message" />
					</div>

					<div className="form-btn">
						<button type="submit" className="btn btn--primary btn--full">
							Send
						</button>
					</div>
				</form>
			</div>

			<Newsletter />
		</div>
	)
}

Contact.propTypes = {}

export default withLayout(Contact)

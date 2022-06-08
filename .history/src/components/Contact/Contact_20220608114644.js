import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'
import './Contact.scss'

const Contact = () => (
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

		<div className="contact__infor">
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
				<h3>Customer Services</h3>
				<p>
					Please send us an email at <a href="mailto:customercare@hygge.com">customercare@hygge.com</a>
				</p>
			</div>
		</div>
	</div>
)

Contact.propTypes = {}

export default withLayout(Contact)

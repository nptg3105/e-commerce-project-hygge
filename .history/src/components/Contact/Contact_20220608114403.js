import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'

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
		</div>
	</div>
)

Contact.propTypes = {}

export default withLayout(Contact)

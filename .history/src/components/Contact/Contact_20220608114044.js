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
				<Link to="/">Contact us</Link>
			</div>
		</div>
	</div>
)

Contact.propTypes = {}

export default withLayout(Contact)

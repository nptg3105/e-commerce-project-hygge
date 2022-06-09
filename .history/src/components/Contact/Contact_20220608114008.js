import React from 'react'
import withLayout from '../withLayout'

const Contact = () => (
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
	</div>
)

Contact.propTypes = {}

export default withLayout(Contact)
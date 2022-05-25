import React from 'react'
import './Newsletter.scss'

const Newsletter = () => (
	<section className="section-newsletter">
		<div className="container newsletter">
			<p className="sub-heading ">- Our Newsletter</p>
			<h2 className="main-heading">Sign Up to our Newsletter</h2>
			<form className="newsletter__form">
				<input className="newsletter__input" placeholder="Your Email" type="email" required />
				<button type="submit" className="btn btn--primary newsletter__btn">
					Sign Up
				</button>
			</form>
		</div>
	</section>
)

export default Newsletter

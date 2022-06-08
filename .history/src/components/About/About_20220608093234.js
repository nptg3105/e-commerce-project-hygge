import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'
import './About.scss'

const About = () => (
	<div className="container">
		<div id="breadcum">
			<div className="breadcum__item">
				<Link to="/">Home Page</Link>
				<i className="fa-solid fa-angle-right" />
			</div>
			<div className="breadcum__item">
				<Link to="/about">About</Link>
			</div>
		</div>
		<div className="about__heading">
			<i className="sub-heading">- Your Cart</i>
			<h2 className="main-heading">Shopping Cart</h2>
		</div>
	</div>
)

About.propTypes = {}

export default withLayout(About)

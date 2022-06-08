import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
	<div className="container">
		<div id="breadcum">
			<div className="breadcum__item">
				<Link to="/">Home Page</Link>
				<i className="fa-solid fa-angle-right" />
			</div>
			<div className="breadcum__item">
				<Link to="/about">About</Link>
				<i className="fa-solid fa-angle-right" />
			</div>
		</div>
	</div>
)

About.propTypes = {}

export default About

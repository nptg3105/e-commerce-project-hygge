import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../withLayout'
import './About.scss'

const About = () => (
	<div className="container">
		<div className="about">
			<div id="breadcum">
				<div className="breadcum__item">
					<Link to="/">Home Page</Link>
					<i className="fa-solid fa-angle-right" />
				</div>
				<div className="breadcum__item">
					<Link to="/about">About</Link>
				</div>
			</div>
			<div className="about__heading mb-112">
				<i className="sub-heading">- Learn More</i>
				<h2 className="main-heading">All About Us</h2>
			</div>
			<img alt="about-img" className="about__image" src="/images/blog1.jpg" />

			<div className="about__content">
				<div className="about__heading">
					<i className="sub-heading">- How it has Started</i>
					<h2 className="main-heading">How and When it has All Started</h2>
					<img alt="about-img" className="about__image" src="/images/blog2.jpg" />
				</div>
				<div className="about__text">
					<div className="about__text-item">
						<h3>Natural Ingredients Only</h3>
						<p>
							10 years ago, when one of the co-founders came up with the idea of making skincare and beauty products
							using only natural ingreadients, he did not even think twice.
						</p>
					</div>
					<div className="about__text-item">
						<h3>Affordable Pricing Strategy</h3>
						<p>
							One of our main goals from the start was to offer high quality products that would also have affordable
							prices. We just can’t believe that we have finally achieved this and now we are proud of it.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

About.propTypes = {}

export default withLayout(About)

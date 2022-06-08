import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
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
			<div className="about__heading ">
				<i className="sub-heading">- Learn More</i>
				<h2 className="main-heading">All About Us</h2>
			</div>
			<img alt="about-img" className="about__image mb-112" src="/images/blog1.jpg" />

			<div className="about__infor">
				<div className="about__heading">
					<i className="sub-heading">- How it has Started</i>
					<h2 className="main-heading">How and When it has All Started</h2>
					<img alt="about-img" className="about__image" src="/images/blog2.jpg" />
				</div>
				<div className="about__text">
					<div className="about__text-item">
						<h3 className="about__text-title">Natural Ingredients Only</h3>
						<p className="about__text-paragh">
							10 years ago, when one of the co-founders came up with the idea of making skincare and beauty products
							using only natural ingreadients, he did not even think twice.
						</p>
					</div>

					<div className="about__text-item">
						<h3 className="about__text-title">Affordable Pricing Strategy</h3>
						<p className="about__text-paragh">
							One of our main goals from the start was to offer high quality products that would also have affordable
							prices. We just can’t believe that we have finally achieved this and now we are proud of it.
						</p>
					</div>
				</div>
			</div>

			<section className="about__features mb-112">
				<p className="sub-heading center">- Company Values</p>
				<h2 className="main-heading center">Our Core Values</h2>
				<div className="about__content">
					<div className="about__item">
						<div className="about__icon">
							<ShoppingCartCheckoutOutlinedIcon />
						</div>
						<h3 className="about__title">Great Innovation</h3>
						<p className="about__desc">Our return policy is simple and that is why customers love our shop.</p>
					</div>
					<div className="about__item">
						<div className="about__icon">
							<PersonOutlineOutlinedIcon />
						</div>
						<h3 className="about__title">Customer Service</h3>
						<p className="about__desc">We offer amazing customer service no matter what happens.</p>
					</div>
					<div className="about__item">
						<div className="about__icon">
							<StarBorderOutlinedIcon />
						</div>
						<h3 className="about__title">High Quality</h3>
						<p className="about__desc">
							All of our products go through very strict inspection before we dispatch them.
						</p>
					</div>
				</div>
			</section>
		</div>
	</div>
)

About.propTypes = {}

export default withLayout(About)

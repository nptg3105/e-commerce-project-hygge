import withLayout from 'components/withLayout'
import React from 'react'
import './HomePage.scss'

const Homepage = () => (
	<div>
		<div className="container main">
			<div className="main__banner">
				<div className="main__details">
					<i className="main__sub-title">- Skincare Products</i>
					<h2 className="main__title">We Offer the Best Products for your Skin</h2>
					<a href="homepage" className="btn btn--primary">
						Shop Now
					</a>
				</div>
				<div className="main__image">
					<img src="images/main-pic.png" alt="main-pic" />
				</div>
			</div>
		</div>
	</div>
)

export default withLayout(Homepage)

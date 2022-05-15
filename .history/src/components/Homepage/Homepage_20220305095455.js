import withLayout from 'components/withLayout'
import React from 'react'

const Homepage = () => (
	<div className="main">
		<div className="container">
			<div className="main__banner">
				<div className="main__details">
					<p className="main__sub-title">- Skincare Products</p>
					<h2 className="main__title">We Offer the Best Products for your Skin</h2>
					<a href="homepage" className="btn btn--primary">
						Shop Now
					</a>
				</div>
			</div>
		</div>
	</div>
)

export default withLayout(Homepage)

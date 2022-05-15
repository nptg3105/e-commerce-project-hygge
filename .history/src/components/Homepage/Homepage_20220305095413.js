import withLayout from 'components/withLayout'
import React from 'react'

const Homepage = () => (
	<div className="main">
		<div className="container">
			<div className="main__banner">
				<div className="main__details">
					<p className="main__sub-title">- Skincare Products</p>
					<h2 className="main__title">We Offer the </h2>
				</div>
			</div>
		</div>
	</div>
)

export default withLayout(Homepage)

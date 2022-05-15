import React from 'react'

const Review = ({ review }) => (
	<div className="review__item">
		<div className="review__box">
			<span className="review__avatar">
				<img src="images/avatar.jpg" alt="review-icon" className="review__img" />
			</span>
			<h4 className="review__name">{review.firstName}</h4>
			<p className="review__comment">This is the best website</p>
		</div>
	</div>
)

Review.propTypes = {}

export default Review

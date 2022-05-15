import PropTypes from 'prop-types'
import React from 'react'

const Review = ({ review }) => (
	<div className="review__img">
		<img src={review.img} alt={review.firstName} />
		<p className="review__content">{review.content}</p>
	</div>
)

Review.propTypes = {
	review: PropTypes.object
}
Review.defaultProps = {
	review: {}
}

export default Review

import PropTypes from 'prop-types'
import React from 'react'

const Review = ({ review }) => (
	<>
		<div className="review__img">
			<img src={review.postedBy.avatar} alt={review.firstName} />
		</div>
		<h3 className="review__name">
			{review.postedBy.firstName} {review.postedBy.lastName}
		</h3>
		<p className="review__detail">{review.content}</p>
	</>
)

Review.propTypes = {
	review: PropTypes.object
}
Review.defaultProps = {
	review: {}
}

export default Review

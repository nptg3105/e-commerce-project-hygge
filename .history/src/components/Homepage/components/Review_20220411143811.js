import PropTypes from 'prop-types'
import React from 'react'

const Review = ({ review }) => (
	<>
		<div className="review__img">
			<img src={review.postedBy.avatar} alt={review.firstName} />
		</div>
		<h3 className="review__name">
			{review.firstName} +{review.lastName}
		</h3>
	</>
)

Review.propTypes = {
	review: PropTypes.object
}
Review.defaultProps = {
	review: {}
}

export default Review

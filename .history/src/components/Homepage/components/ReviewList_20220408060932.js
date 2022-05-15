import PropTypes from 'prop-types'
import React from 'react'
import Review from './Review'

const ReviewList = ({ data }) => {
	console.log(1)

	return (
		<div className="review__item">
			<div className="review__box">
				{data.map(review => (
					<div key={review.id}>
						<Review review={review} />
					</div>
				))}
			</div>
		</div>
	)
}

ReviewList.propTypes = {
	data: PropTypes.array
}

ReviewList.defaultProps = {
	data: []
}

export default ReviewList

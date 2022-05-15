import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Review from 'components/HomePage/components/Review'
import Newsletter from 'components/Newsletter/Newsletter'
import React, { useEffect, useState } from 'react'
import reviewAPI from 'services/reviewApi'

const DetailPage = () => {
	const [reviewList, setReviewList] = useState([])

	useEffect(() => {
		const getReviews = async () => {
			try {
				const { reviews } = await reviewAPI.getReviewAPI()
				setReviewList(reviews)
			} catch (err) {
				console.log('Failed to fetch reviews: ', err)
			}
		}
		getReviews()
	}, [])

	return (
		<>
			<Header />
			<section className="product-detail">
				<div className="container">
					<div className="breadcum">
						<div className="breadcum__item">
							<a href="/">Home Page</a>
							<i className="fa-solid fa-angle-right" />
						</div>
						<div className="breadcum__item">
							<a href="/">Categories</a>
							<i className="fa-solid fa-angle-right" />
						</div>
						<div className="breadcum__item">
							<a href="/">Sun Cream</a>
						</div>
					</div>
				</div>
			</section>
			<Review />
			<Newsletter />
			<Footer />
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
